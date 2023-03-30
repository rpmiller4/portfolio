import React, { Component } from 'react';
import { About } from './About';
import { Skillset } from './Skillset';
import Contact from './Contact';
import Hero from './Hero';
import Showcase from './Showcase';

export class Home extends Component {
  static displayName = Home.name;
  
  render() {
    return (
      <>
      <Hero />
      <About/>
      <Skillset/>
      <Showcase/>
      <Contact/>
    </>
    );
  }
}
