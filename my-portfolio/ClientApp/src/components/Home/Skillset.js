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
                                <h4 className="card-title mt-3">Full Stack Development</h4>
                                <p className="card-text mt-3">I have expertise in building robust, scalable, and user-friendly web applications and back-end services using C#, .NET Core, ASP.NET MVC, and React. Additionally, I leverage storage solutions such as SQL databases and MongoDB.
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-layer-group'></i>
                                <h4 className="card-title mt-3">Microservices & API Design</h4>
                                <p className="card-text mt-3">I design, implement, and maintain back-end microservices and APIs using ASP.NET Web API and event-driven architectures like NServiceBus.
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-fire'></i>
                                <h4 className="card-title mt-3">Machine Learning & AI</h4>
                                <p className="card-text mt-3">I have experience in fine-tuning machine learning models and algorithms for various applications. Specifically, I have fine-tuned GPT-2 locally and ran it on a traditional desktop with a mid-range graphics card. I am also familiar with OpenAI's GPT models and have consumed OpenAI's GPT-3.5 chat and completion services.
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
                                <h4 className="card-title mt-3">Software Optimization</h4>
                                <p className="card-text mt-3">I have optimized software processes and systems to increase efficiency and performance. In two separate scenarios, I reduced migration cycle time by 87% and improved the speed of microservices workflows by 6.5x.
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-cog'></i>
                                <h4 className="card-title mt-3">DevOps & Deployment</h4>
                                <p className="card-text mt-3">I am proficient in using Jenkins, Octopus Deploy, Azure, and Docker to automate, manage, and deploy applications and services.
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-check-square'></i>
                                <h4 className="card-title mt-3">Test Driven Development</h4>
                                <p className="card-text mt-3">I have experience with various testing frameworks like NUnit and Moq, which I use to write unit tests and mocks to ensure quality through test-driven development.
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
