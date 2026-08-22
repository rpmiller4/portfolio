import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
    <section id="about">
        <div className="container mt-4 pt-4">
            <h1 className="text-center">About Me</h1>
            <div className="row mt-4">

                <div className="col-lg-12">
                    <p> I am a software engineer with over 12 years of experience in software design and process streamlining. My expertise draws from cognitive science and discrete mathematics, enabling me to engineer high-quality, scalable solutions that reduce cognitive burden. I am passionate about building low-friction practical systems and have experience working with distributed .NET services, ASP.NET Web API, Azure cloud services, and event-driven systems using Kafka, Azure Event Hubs, and NServiceBus. While my primary focus is on C# and .NET, I am also enthusiastic about learning and working with other languages and toolsets.
                    </p>
                    
                    <p>During my career, I have worked on a variety of projects, including integrating middleware for sophisticated manufacturing equipment, migrating Intuit’s TurboTax to a new language, and contributing to GreatCall’s (now Best Buy Health's) internal-facing software tools. I enjoy exploring the possibilities of machine learning models like neural networks and genetic algorithms, as well as participating in mathematics and programming contests. In my free time, I enjoy pushing machine learning and large language models beyond traditional software applications into other domains, including research, writing, and durable personal knowledge work.
                    </p>
                    </div>
                    
                </div>

            </div>
    </section>
    );
  }
}