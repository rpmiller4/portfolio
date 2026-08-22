import React, { Component } from 'react';
export class Skillset extends Component {

  render() {
    return (
        <section id="skillset">
            <div className="container">
                <h1 className="text-center">Skillset</h1>
                <div className="row">
                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className="fas servicesIcon fa-desktop"></i>
                                <h4 className="card-title mt-3">Full-Stack Application Development</h4>
                                <p className="card-text mt-3">I have expertise in building robust, scalable, and user-friendly web applications and back-end services using C#, .NET Core, ASP.NET MVC, and React. I also work with SQL and NoSQL data stores.
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-layer-group'></i>
                                <h4 className="card-title mt-3">Back-End Systems & APIs</h4>
                                <p className="card-text mt-3">I design and maintain back-end services, APIs, and event-driven systems in cloud environments, including systems using Kafka, Azure Event Hubs, and NServiceBus.
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-fire'></i>
                                <h4 className="card-title mt-3">Applied AI & LLM Systems</h4>
                                <p className="card-text mt-3">I work with LLMs as software components: integrating model APIs, designing AI-assisted workflows, managing context, and reviewing outputs for reliability. Earlier local GPT-2 experiments in 2019 gave me practical experience with how language models behave outside polished API surfaces.
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-search'></i>
                                <h4 className="card-title mt-3">Workflow Automation & Optimization</h4>
                                <p className="card-text mt-3">I have optimized software processes and systems to increase efficiency and performance. Across distinct roles and systems, I have reduced migration cycle time, improved system performance, and streamlined development workflows through thorough analysis, exploratory testing, and targeted implementation changes.
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-cog'></i>
                                <h4 className="card-title mt-3">Cloud, DevOps & Delivery</h4>
                                <p className="card-text mt-3">I have worked with Azure DevOps, Docker, and deployment pipelines, with practical familiarity across cloud platform workflows. I also have experience managing deployments and coordinating with multiple teams to support safe and predictable software delivery.
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-check-square'></i>
                                <h4 className="card-title mt-3">Testing & Code Quality</h4>
                                <p className="card-text mt-3">I use focused unit testing with xUnit and Moq, code review, and simulation harnesses to validate behavior as systems become more complex or requirements continue to evolve. Even when AI tools are part of the workflow, code should remain legible to humans, with focused responsibilities, clear abstractions, and well-named components.
                                </p>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </section>
    );
  }
}