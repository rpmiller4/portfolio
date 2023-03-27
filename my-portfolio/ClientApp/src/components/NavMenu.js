import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import useScroll from './hooks/useScroll';


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
  return <NavMenuClass navbarDark={navbarDark} />;
};

export default NavMenu;
