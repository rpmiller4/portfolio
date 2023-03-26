import React, { Component } from 'react';
import { About } from './About';
import { Skills } from './Skills';
import Hero from './Hero';
export class Home extends Component {
  static displayName = Home.name;
  
  render() {
    return (
      <>
      <Hero />
      <About/>
      <Skills/>
    </>
    );
  }
}
