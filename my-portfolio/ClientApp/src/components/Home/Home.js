import React, { Component } from 'react';
import { About } from './About';
import { Skillset } from './Skillset';
import Contact from './Contact';
import Hero from './Hero';
import Showcase from './Showcase';
import Footer from './Footer';
import NavMenu from './NavMenu';

export class Home extends Component {
  static displayName = Home.name;
  
  render() {
    return (
      <>
      <NavMenu />
      <Hero />
      <About/>
      <Skillset/>
      <Showcase/>
      <Contact/>
      <Footer/>
    </>
    );
  }
}
