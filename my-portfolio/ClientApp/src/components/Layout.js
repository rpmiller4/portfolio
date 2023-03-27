import React, { Component, useEffect } from 'react';
import NavMenu from './NavMenu';
import Footer from './Footer';

class LayoutClass extends Component {
  static displayName = LayoutClass.name;

  render() {
    return (
      <div>
        <NavMenu />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

const Layout = ({children}) =>{

  useEffect(() => {
    const handleNavLinkClick = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const offset = parseInt(event.target.getAttribute('data-offset'), 10);
      const targetElement = document.querySelector(targetId);
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    };

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach((navLink) => {
      navLink.addEventListener('click', handleNavLinkClick);
    });

    // Clean up when the component unmounts
    return () => {
      navLinks.forEach((navLink) => {
        navLink.removeEventListener('click', handleNavLinkClick);
      });
    };
  }, []);

  return <LayoutClass children={children}/>
}

export default Layout