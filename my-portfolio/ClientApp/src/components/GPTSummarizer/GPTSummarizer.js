import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

import './GPTSummarizer.css';

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
        //checkForPreviousHistoryGet(clientIdFromCookies);

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
      const response = await fetch('gptcompletions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          //clientId: clientId,
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

  const aiText =`Artificial intelligence (AI) is intelligence demonstrated by machines, as opposed to intelligence of humans and other animals. Example tasks in which this is done include speech recognition, computer vision, translation between (natural) languages, as well as other mappings of inputs.

  AI applications include advanced web search engines (e.g., Google Search), recommendation systems (used by YouTube, Amazon, and Netflix), understanding human speech (such as Siri and Alexa), self-driving cars (e.g., Waymo), generative or creative tools (ChatGPT and AI art), automated decision-making, and competing at the highest level in strategic game systems (such as chess and Go).[1]
  
  As machines become increasingly capable, tasks considered to require "intelligence" are often removed from the definition of AI, a phenomenon known as the AI effect. For instance, optical character recognition is frequently excluded from things considered to be AI,[2] having become a routine technology.[3]
  
  Artificial intelligence was founded as an academic discipline in 1956, and in the years since it has experienced several waves of optimism,[4][5] followed by disappointment and the loss of funding (known as an "AI winter"),[6][7] followed by new approaches, success, and renewed funding.[5][8] AI research has tried and discarded many different approaches, including simulating the brain, modeling human problem solving, formal logic, large databases of knowledge, and imitating animal behavior. In the first decades of the 21st century, highly mathematical and statistical machine learning has dominated the field, and this technique has proved highly successful, helping to solve many challenging problems throughout industry and academia.[8][9]
  
  The various sub-fields of AI research are centered around particular goals and the use of particular tools. The traditional goals of AI research include reasoning, knowledge representation, planning, learning, natural language processing, perception, and the ability to move and manipulate objects.[a] General intelligence (the ability to solve an arbitrary problem) is among the field's long-term goals.[10] To solve these problems, AI researchers have adapted and integrated a wide range of problem-solving techniques, including search and mathematical optimization, formal logic, artificial neural networks, and methods based on statistics, probability, and economics. AI also draws upon computer science, psychology, linguistics, philosophy, and many other fields.
  
  The field was founded on the assumption that human intelligence "can be so precisely described that a machine can be made to simulate it".[b] This raised philosophical arguments about the mind and the ethical consequences of creating artificial beings endowed with human-like intelligence; these issues have previously been explored by myth, fiction, and philosophy since antiquity.[12] Computer scientists and philosophers have since suggested that AI may become an existential risk to humanity if its rational capacities are not steered towards beneficial goals.[c] The term artificial intelligence has also been criticized for overhyping AI's true technological capabilities`;
  
  const quantumMechanicsText =`Quantum mechanics is a fundamental theory in physics that provides a description of the physical properties of nature at the scale of atoms and subatomic particles.[2]: 1.1  It is the foundation of all quantum physics including quantum chemistry, quantum field theory, quantum technology, and quantum information science.

  Classical physics, the collection of theories that existed before the advent of quantum mechanics, describes many aspects of nature at an ordinary (macroscopic) scale, but is not sufficient for describing them at small (atomic and subatomic) scales. Most theories in classical physics can be derived from quantum mechanics as an approximation valid at large (macroscopic) scale.[3]
  
  Quantum mechanics differs from classical physics in that energy, momentum, angular momentum, and other quantities of a bound system are restricted to discrete values (quantization); objects have characteristics of both particles and waves (wave–particle duality); and there are limits to how accurately the value of a physical quantity can be predicted prior to its measurement, given a complete set of initial conditions (the uncertainty principle).
  
  Quantum mechanics arose gradually from theories to explain observations that could not be reconciled with classical physics, such as Max Planck's solution in 1900 to the black-body radiation problem, and the correspondence between energy and frequency in Albert Einstein's 1905 paper, which explained the photoelectric effect. These early attempts to understand microscopic phenomena, now known as the "old quantum theory", led to the full development of quantum mechanics in the mid-1920s by Niels Bohr, Erwin Schrödinger, Werner Heisenberg, Max Born, Paul Dirac and others. The modern theory is formulated in various specially developed mathematical formalisms. In one of them, a mathematical entity called the wave function provides information, in the form of probability amplitudes, about what measurements of a particle's energy, momentum, and other physical properties may yield.
  
  Overview and fundamental concepts
  Quantum mechanics allows the calculation of properties and behaviour of physical systems. It is typically applied to microscopic systems: molecules, atoms and sub-atomic particles. It has been demonstrated to hold for complex molecules with thousands of atoms,[4] but its application to human beings raises philosophical problems, such as Wigner's friend, and its application to the universe as a whole remains speculative.[5] Predictions of quantum mechanics have been verified experimentally to an extremely high degree of accuracy.[note 1]
  
  A fundamental feature of the theory is that it usually cannot predict with certainty what will happen, but only give probabilities. Mathematically, a probability is found by taking the square of the absolute value of a complex number, known as a probability amplitude. This is known as the Born rule, named after physicist Max Born. For example, a quantum particle like an electron can be described by a wave function, which associates to each point in space a probability amplitude. Applying the Born rule to these amplitudes gives a probability density function for the position that the electron will be found to have when an experiment is performed to measure it. This is the best the theory can do; it cannot say for certain where the electron will be found. The Schrödinger equation relates the collection of probability amplitudes that pertain to one moment of time to the collection of probability amplitudes that pertain to another.
  
  One consequence of the mathematical rules of quantum mechanics is a tradeoff in predictability between different measurable quantities. The most famous form of this uncertainty principle says that no matter how a quantum particle is prepared or how carefully experiments upon it are arranged, it is impossible to have a precise prediction for a measurement of its position and also at the same time for a measurement of its momentum.
  
  Another consequence of the mathematical rules of quantum mechanics is the phenomenon of quantum interference, which is often illustrated with the double-slit experiment. In the basic version of this experiment, a coherent light source, such as a laser beam, illuminates a plate pierced by two parallel slits, and the light passing through the slits is observed on a screen behind the plate.[6]: 102–111 [2]: 1.1–1.8  The wave nature of light causes the light waves passing through the two slits to interfere, producing bright and dark bands on the screen – a result that would not be expected if light consisted of classical particles.[6] However, the light is always found to be absorbed at the screen at discrete points, as individual particles rather than waves; the interference pattern appears via the varying density of these particle hits on the screen. Furthermore, versions of the experiment that include detectors at the slits find that each detected photon passes through one slit (as would a classical particle), and not through both slits (as would a wave).[6]: 109 [7][8] However, such experiments demonstrate that particles do not form the interference pattern if one detects which slit they pass through. Other atomic-scale entities, such as electrons, are found to exhibit the same behavior when fired towards a double slit.[2] This behavior is known as wave–particle duality.
  
  Another counter-intuitive phenomenon predicted by quantum mechanics is quantum tunnelling: a particle that goes up against a potential barrier can cross it, even if its kinetic energy is smaller than the maximum of the potential.[9] In classical mechanics this particle would be trapped. Quantum tunnelling has several important consequences, enabling radioactive decay, nuclear fusion in stars, and applications such as scanning tunnelling microscopy and the tunnel diode.[10]
  
  When quantum systems interact, the result can be the creation of quantum entanglement: their properties become so intertwined that a description of the whole solely in terms of the individual parts is no longer possible. Erwin Schrödinger called entanglement "...the characteristic trait of quantum mechanics, the one that enforces its entire departure from classical lines of thought".[11] Quantum entanglement enables the counter-intuitive properties of quantum pseudo-telepathy, and can be a valuable resource in communication protocols, such as quantum key distribution and superdense coding.[12] Contrary to popular misconception, entanglement does not allow sending signals faster than light, as demonstrated by the no-communication theorem.[12]
  
  Another possibility opened by entanglement is testing for "hidden variables", hypothetical properties more fundamental than the quantities addressed in quantum theory itself, knowledge of which would allow more exact predictions than quantum theory can provide. A collection of results, most significantly Bell's theorem, have demonstrated that broad classes of such hidden-variable theories are in fact incompatible with quantum physics. According to Bell's theorem, if nature actually operates in accord with any theory of local hidden variables, then the results of a Bell test will be constrained in a particular, quantifiable way. Many Bell tests have been performed, using entangled particles, and they have shown results incompatible with the constraints imposed by local hidden variables.[13][14]
  
  It is not possible to present these concepts in more than a superficial way without introducing the actual mathematics involved; understanding quantum mechanics requires not only manipulating complex numbers, but also linear algebra, differential equations, group theory, and other more advanced subjects.[note 2] Accordingly, this article will present a mathematical formulation of quantum mechanics and survey its application to some useful and oft-studied examples.`;

  const SubmitCannedMessage = (text) =>
  {
    setTextAreaValue(text);
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
        {messages === undefined || messages.length == 0 && <p>Summarization text will appear here</p>}
        <div>{messages !== undefined && messages.map((message, index) => (
          <p key={index}><strong>{message.speaker}: </strong>{message.text}</p>
        ))}</div>
        {isLoading &&
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>}
      </div>
      <div className="chat-input">
        <button className="send-button" disabled={isLoading} onClick={handleOnSubmit}>Summarize</button>
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
            Canned Text Samples
          </button>
        )}
        <div className={`settings ${isSettingsOpen ? "active" : ""}`}>
          <div className="row">
            <div className="col-xl-6 col-sm-6">
              <button onClick={() => SubmitCannedMessage(aiText)}>Insert Text About AI</button>
              <button onClick={() => SubmitCannedMessage(quantumMechanicsText)}>Insert Text About Quantum Mechanics</button>
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

