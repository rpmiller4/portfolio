import React, { Component } from 'react';



const Hero = () => {

    const titles = ["Robert Miller", "It's me, Robert"]
    const titleIndex = Math.floor(Math.random() * titles.length)

    const descriptions  = ["Painting with code to create software that's both functional and beautiful.", "I am a professional software engineer in the west coast"]
    const descriptionIndex = Math.floor(Math.random() * descriptions.length)

    return  (
                <section className="bgimage" id="home">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
                                <h2 className="hero_title">{titles[titleIndex]}</h2>
                                <p className="hero_desc">{descriptions[descriptionIndex]}</p>
                            </div>
                        </div>
                    </div>
                </section>
            )
};

export default Hero;


