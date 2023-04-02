import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

import './GPTDemo.css';

const GPTDemo = () => {

  const [conversationText, setConversationText] = useState("Conversation Text will appear here");
  const [isLoading, setIsLoading] = useState(false);
  const [textAreaValue, setTextAreaValue] = useState("")
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [activeMode, setActiveMode] = useState('chat');
  const [messages, setMessages] = useState([]);
  const [clientId, setClientId] = useState();
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [isMessagesCleared, setIsMessagesCleared] = useState(false);

  useEffect(() => {
    if (messages === undefined) {
      setIsMessagesCleared(true);
    } else {
      setIsMessagesCleared(false);
    }
  }, [messages]);

  useEffect(() => {

    if (isFirstLoad) {
      // code to run on first load
      console.log('Component loaded for the first time');
      setIsFirstLoad(false);

      const clientIdFromCookies = Cookies.get('clientId');

      if (clientIdFromCookies == undefined) {
        const randomId = uuidv4();
        setClientId(randomId);
        console.log(randomId);
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 15);
        document.cookie = `clientId=${randomId}; expires=${expirationDate.toUTCString()}; path=/`;
      }
      else {
        setClientId(clientIdFromCookies);
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 15);
        document.cookie = `clientId=${clientIdFromCookies}; expires=${expirationDate.toUTCString()}; path=/`;

        //checkForPreviousHistory(clientIdFromCookies);
        checkForPreviousHistoryGet(clientIdFromCookies);

      }
    }


  }, [isFirstLoad]);

  const textAreaRef = useRef(null);

  const handleModeChange = (mode) => {
    setActiveMode(mode);
  };

  const handleTextAreaChange = (event) => {
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
    setTextAreaValue(event.target.value);
  };

  async function callDotNetApi(clientId, userInput) {
    setIsLoading(true);

    try {
      const response = await fetch('api/gptservice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          clientId: clientId,
          userInput: userInput
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Status: ${response.status}, Error: ${errorText}`);
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();

      setMessages((prevMessages) => [...prevMessages,
      { speaker: 'You', text: userInput },
      { speaker: 'Gpt', text: data.gptResponse }
      ]);

      setTextAreaValue(""); // reset
      textAreaRef.current.style.height = 'auto';

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function checkForPreviousHistoryGet(clientId) {
    try {
      const response = await fetch(`api/gptservice/GetHistory/${clientId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Status: ${response.status}, Error: ${errorText}`);
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      const data = await response.json();
      console.log(data.gptHistory);
      setMessages(data.gptHistory.filter(x => x.role != "system").map((x) => ({ speaker: x.role == "user" ? 'You' : 'Gpt', text: x.content })));
      setTextAreaValue(""); // reset
      textAreaRef.current.style.height = 'auto';

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setIsLoading(false);
    }


  }

  async function clearGptHistory() {
    try {
      const response = await fetch(`api/gptservice/ClearHistory/${clientId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Status: ${response.status}, Error: ${errorText}`);
        throw new Error(`Network response was not ok: ${response.status}`);
      }

      //onst data = await response.json();
      //console.log(data.gptHistory);
      setMessages(undefined);
      setTextAreaValue(""); // reset
      textAreaRef.current.style.height = 'auto';

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      setIsLoading(false);
    }
  }


  const handleSettingsButtonClick = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleCloseButtonClick = () => {
    setIsSettingsOpen(false);
  };

  function handleOnSubmit(e) {
    e.preventDefault();
    callDotNetApi(clientId, textAreaValue);
  }

  return (
    <div className={`AppMode ${activeMode}`}>
      <div className="chat-box">
        {isMessagesCleared && <p>Messages have been cleared.</p>}
        {messages === undefined || messages.length == 0 && <p>Conversation text will appear here</p>}
        <div>{messages !== undefined && messages.map((message, index) => (
          <p key={index}><strong>{message.speaker}: </strong>{message.text}</p>
        ))}</div>
        {isLoading &&
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>}
      </div>
      <div className="chat-input">
        <button className="send-button" disabled={isLoading} onClick={handleOnSubmit}>Send</button>
        <textarea
          ref={textAreaRef}
          className="chat-textarea"
          placeholder="Type your message here"
          value={textAreaValue}
          onChange={handleTextAreaChange}
        />
      </div>
      <div className={`settings-container ${isSettingsOpen ? "settings-open" : ""}`}>
        {isSettingsOpen ? null : (
          <button className="settings-btn" onClick={handleSettingsButtonClick}>
            Settings
          </button>
        )}
        <div className={`settings ${isSettingsOpen ? "active" : ""}`}>
          <div className="row">
            <div className="col-xl-6 col-sm-6">
              <button onClick={clearGptHistory}>Delete History</button>
              {/* <button
                className={`mode-button btn btn-primary ${activeMode === 'chat' ? 'active' : ''}`}
                onClick={() => handleModeChange('chat')}>Chat Mode</button> */}
              {/* <button
                className={`mode-button btn btn-primary ${activeMode === 'summarize' ? 'active' : ''}`}
                onClick={() => handleModeChange('summarize')}>Summarize</button>
              <button
                className={`mode-button btn btn-primary ${activeMode === 'text-extract' ? 'active' : ''}`}
                onClick={() => handleModeChange('text-extract')}>Text Extract</button> */}
            </div>
          </div>
          <div className="col-12">
            <button className="close-btn" onClick={handleCloseButtonClick}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GPTDemo

