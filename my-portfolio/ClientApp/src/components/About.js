import React, { Component } from 'react';
import aboutImage from '../images/about.jpeg'

export class About extends Component {


  render() {
    return (
<section id="about">
    <div className="container mt-4 pt-4">
        <h1 className="text-center">About Me</h1>
        <div className="row mt-4">
            <div className="col-lg-4">
                <img src={aboutImage} className="imageAboutPage" alt=""></img>
            </div>

            <div className="col-lg-8">
                <p> I am a software engineer with a strong background in software design and process streamlining. Drawing from cognitive science and discrete mathematics, I engineer high-quality, scalable solutions that reduce cognitive burden. With experience in back-end microservices, ASP.NET Web API, and event-driven architectures like NServiceBus, I am passionate about developing innovative software solutions.
                </p>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <ul>
                            <li>Name: Robert P. Miller IV</li>
                            <li>Age: 40</li>
                            <li>Occupation: Software Engineer</li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li>Email: rpmiller4 @ gmail . com</li>
                            <li>Location: West Coast</li>
                            <li>LinkedIn: <a href="linkedin.com/in/rpmiller4">linkedin.com/in/rpmiller4</a></li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-3">
                    <p> During my career, I have worked on various projects, such as developing adhesive dispensation hardware simulations, migrating Intuit’s TurboTax to a new XML-based engine language, and contributing to GreatCall’s internal-facing software tools. I have also been involved in personal projects, including building responsive React applications and leveraging machine learning technologies.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
    );
  }
}
