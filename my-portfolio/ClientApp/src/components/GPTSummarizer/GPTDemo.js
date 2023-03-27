import React, { Component, useState } from 'react';
import './GPTDemo.css';

const GPTDemo = () =>{

  const [conversationText, setConversationText] = useState("Conversation Text will appear here"); 
    const [isLoading, setIsLoading] = useState(false);
    const [textAreaValue, setTextAreaValue] = useState("")

    const handleTextAreaChange = (event) => {
        setTextAreaValue(event.target.value);
    };
    async function callDotNetApi(clientId, userInput) {
      setIsLoading(true);
  
      try {
          const response = await fetch('gptservice', {
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
          setConversationText(data.gptResponse);
          setTextAreaValue(""); // reset
      } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
      } finally {
          setIsLoading(false);
      }
  }
  

  function handleOnSubmit(e) {
    e.preventDefault();
    callDotNetApi("42", textAreaValue);
  }

    return (
      <div className="gpt-demo-wrapper">
        <div className='gpt-nav-spacing'></div>
              <section id="gpt-demo" >
              <h1 className="text-center">GPT Demo</h1>
              <div className="container mt-4 pt-4">
                <h2>Output</h2>
                <div className="scrollable-container">
                  {conversationText}
                </div>
                <form onSubmit={handleOnSubmit}>
                  <label htmlFor="userText">User Text</label><p></p>
                  <textarea id="userText" value={textAreaValue} onChange={handleTextAreaChange}></textarea>
                  <button type="submit">Submit Text</button>
                </form>
              </div>
        </section>
      </div>
    );
};

export default GPTDemo

