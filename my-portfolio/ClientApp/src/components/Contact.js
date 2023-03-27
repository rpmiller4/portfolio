import React, { Component } from 'react';
import aboutImage from '../images/about.jpeg'

const Contact = () => {
    return (
        <section id="contact">
            <h1 className="text-center">Contact</h1>
            <div className="container mt-4 pt-4">
                <p><i className="fab fa-linkedin"></i> Find me on <a href="https://linkedin.com/in/rpmiller4">LinkedIn</a></p>
                <p><i className="fab fa-github"></i> Glance at my code at <a href="https://github.com/rpmiller4">Github</a></p>
                <div className="row mt-4">
                    <div className="col-lg-16">
                        <div className="row mt-3">
                            
                            <div className="col-md-6">

                            </div>
                            <div className="col-md-6">
                            </div>
                        </div>
                        <div className="row mt-3">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;