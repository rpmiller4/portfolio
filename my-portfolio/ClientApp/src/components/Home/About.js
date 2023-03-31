import React, { Component } from 'react';
import aboutImage from '../../images/profile2.jpeg'

export class About extends Component {
  render() {
    return (
    <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center">About Me</h1>
            <div className="row mt-4">

                <div className="col-lg-12">
                    <p> I am a software engineer with over 10 years of experience in software design and process streamlining. My expertise draws from cognitive science and discrete mathematics, enabling me to engineer high-quality, scalable solutions that reduce cognitive burden. I am passionate about developing innovative software solutions and have experience working with back-end microservices, ASP.NET Web API, and event-driven architectures like NServiceBus. While my primary focus is on C# and .NET, I am also enthusiastic about learning and working with other languages and toolsets.
                    </p>
                    
                    <p>During my career, I have worked on a variety of projects, including integrating middleware for sophisticated manufacturing equipment, migrating Intuit’s TurboTax to a brand new language, and contributing to GreatCall’s (now Best Buy Health's) internal-facing software tools. I enjoy exploring the possibilities of machine learning models like neural networks and genetic algorithms, as well as participating in programming contests. In my free time, I am currently learning more about Large Language Models (LLMs) like GPT-4, which I believe will significantly accelerate progress in various domains over the next few years.
                    </p>
                    </div>
                    
                </div>

            </div>
    </section>
    );
  }
}
