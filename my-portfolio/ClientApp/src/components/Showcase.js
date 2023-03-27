import React, { Component } from 'react';
import brainbowImg from '../images/brainbow.jpeg';

const Showcase = () => {
    return (
        <section id="showcase">
            <h1 className="text-center">Showcase</h1>
            <div className="container">
                <h2>Personal Projects</h2>
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <div className="card" style={{width: '18rem'}}>
                            <img src={brainbowImg} className="card-img-top" alt="GPT Summarizer"></img>
                            <div className="card-body">
                                <h5 className="card-title">GPT Summarizer</h5>
                                <p className="card-text">GPT Summarizer is a web application that leverages the power of OpenAI's GPT to provide text summarization and document abstraction services. Users can easily input text or upload documents, and the application returns a concise summary or abstracts key information, depending on the chosen feature.</p>
                                <h6>Technologies:</h6>
                                <ul>
                                    <li>OpenAI GPT API</li>
                                    <li>.NET Core API - Back-End</li>
                                    <li>React, HTML, CSS - Front End</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </section>
    );
}

export default Showcase;