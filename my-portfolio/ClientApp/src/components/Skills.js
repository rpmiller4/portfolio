import React, { Component } from 'react';
export class Skills extends Component {


  render() {
    return (
        <section id="skills">
            <div className="container">
                <h1 className="text-center">Skills</h1>
                <div className="row">
                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className="fas servicesIcon fa-clock"></i>
                                <h4 className="card-title mt-3">Full Stack Development</h4>
                                <p className="card-text mt-3">Leveraging expertise in C#, .NET Core, ASP.NET MVC, and React to build robust, scalable, and user-friendly web applications.
                                </p>
                            </div>
                        </div>  
                    </div>
                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-layer-group'></i>
                                <h4 className="card-title mt-3">Microservices & API Design</h4>
                                <p className="card-text mt-3">Designing, implementing, and maintaining back-end microservices and APIs using ASP.NET Web API and event-driven architectures like NServiceBus.
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='far servicesIcon fa-check-circle'></i>
                                <h4 className="card-title mt-3">Machine Learning & AI</h4>
                                <p className="card-text mt-3">Applying Python, TensorFlow, Keras, Pandas, and Numpy to develop and implement machine learning models and algorithms for various applications.
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
                                <p className="card-text mt-3">Optimizing software processes and systems to increase efficiency and performance, as demonstrated by reducing migration cycle time by 87% and improving microservices speed by 6.5x
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-shield-alt'></i>
                                <h4 className="card-title mt-3">DevOps & Deployment</h4>
                                <p className="card-text mt-3">Proficient in Jenkins, Octopus Deploy, Azure, and Docker to automate, manage, and deploy applications and services.
                                </p>
                            </div>
                        </div>  
                    </div>

                    <div className="col-lg-4 mt-4">
                        <div className="card servicesText">
                            <div className="card-body">
                                <i className='fas servicesIcon fa-wrench'></i>
                                <h4 className="card-title mt-3">Front End Technologies</h4>
                                <p className="card-text mt-3">Utilizing HTML, CSS, JavaScript, TypeScript, and React to create responsive, interactive, and SEO-friendly user interfaces.
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
