import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useScroll from '../hooks/useScroll';


class NavMenuClass extends Component {
  static displayName = NavMenuClass.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    const { navbarDark } = this.props;
    return (
      
      <header>
        <nav className={`navbar navbar-expand-lg fixed-top navbarScroll navMenu ${navbarDark}`} id="mainNavbar">
          <div className="container">
              <a className="navbar-brand" href="#">Robert</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                      <li className="nav-item active">
                          <a className="nav-link" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#about">About</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#skillset">Skillset</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#showcase">Showcase</a>
                      </li>
                      <li className="nav-item">
                          <Link to="gpt-demo" className="nav-link">GPTDemo</Link>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link" href="#contact">Contact</a>
                      </li>
                  </ul>
              </div>
          </div>
        </nav>
      </header>
    );
  }
}

const NavMenu = () => {
  const scrollY = useScroll();
  const navbarDark = scrollY >= 100 ? 'navbarDark' : '';
  
  useEffect(() => {
    const handleNavLinkClick = (event) => {

    // Ignore internal routes handled by react-router-dom
      if (targetId.startsWith("/")) {
        return;
      }

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

  return <NavMenuClass navbarDark={navbarDark} />;
};

export default NavMenu;
