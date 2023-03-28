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

      // get the whether the navbar content is showing because during scroll animation, we obscure the target.
      // using the height of the element will let us change the target position by substracting the height.
      const heightOfNavbar = document.getElementById("mainNavbar").clientHeight;

      event.preventDefault();
      const targetId = event.target.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - heightOfNavbar;

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