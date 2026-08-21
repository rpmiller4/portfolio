import React from 'react';

const Hero = () => {
  return (
    <section className="bgimage" id="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 hero-text">
            <h2 className="hero_title">Robert Miller</h2>
            <p className="hero_desc">
              Software engineer. Painting with code to make complex systems easier to understand.
            </p>
            <p className="hero_subdesc">
              Systems architecture, automation, and AI-assisted development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;