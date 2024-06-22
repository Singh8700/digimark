import React from 'react'
import { Link,useLocation } from "react-router-dom"
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import './navbar4.css'

const Navbar4 = (props) => {
  const loaction = useLocation();
  const path  = loaction.pathname;
  useEffect(()=>{
    window.scrollTo({top:0, behaviour:"smooth"})
  },[path])
  return (
    <header className="navbar4-container red" fixed="top">
      <header data-thq="thq-navbar" className="navbar4-navbar-interactive">
        <Link to="/">
        <img
          alt={props.logoAlt}
          src={props.logoSrc}
          className="navbar4-image1"
        />
        </Link>
        <div data-thq="thq-navbar-nav" className="navbar4-desktop-menu">
          <nav className="navbar4-links">
            <Link to="/">
            <span className="thq-link thq-body-small">{props.link1}</span>
            </Link>
            <Link to="/service">
            <span className="thq-link thq-body-small">{props.link2}</span>
            </Link>
            <Link to="/about">
            <span className="thq-link thq-body-small">{props.link3}</span>
            </Link>
            <Link to="/contact">
            <span className="thq-link thq-body-small">{props.link4}</span>
            </Link>
            <Link to="/order">
            <span className="thq-link thq-body-small">{props.link5}</span>
            </Link>
          </nav>
          <div className="navbar4-buttons">
            <button className="navbar4-action1 thq-button-filled thq-button-animated">
              <span className="thq-body-small">
              <Link to="/contact">
              Contact Me
              </Link>
            </span>
            </button>
            <button className="navbar4-action2 thq-button-outline thq-button-animated">
            <a href="https://bit.ly/rohit-port" traget="__blank">
              <span className="thq-body-small">
              Send Me
              </span>
              </a>
            </button>
          </div>
        </div>
        <div data-thq="thq-burger-menu" className="navbar4-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navbar4-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-thq="thq-mobile-menu" className="navbar4-mobile-menu">
          <div className="navbar4-nav">
            <div className="navbar4-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="navbar4-logo"
              />
              <div data-thq="thq-close-menu" className="navbar4-close-menu">
                <svg viewBox="0 0 1024 1024" className="navbar4-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav className="navbar4-links1">
            <Link to="/">
            <span className="thq-link thq-body-small">{props.link1}</span>
            </Link>
            <Link to="/service">
            <span className="thq-link thq-body-small">{props.link2}</span>
            </Link>
            <Link to="/about">
            <span className="thq-link thq-body-small">{props.link3}</span>
            </Link>
            <Link to="/contact">
            <span className="thq-link thq-body-small">{props.link4}</span>
            </Link>
            <Link to="/order">
            <span className="thq-link thq-body-small">{props.link5}</span>
            </Link>
            </nav>
          </div>
          <div className="navbar4-buttons">
            <button className="navbar4-action1 thq-button-filled thq-button-animated">
              <span className="thq-body-small">
              <Link to="/contact">
              Contact Me
              </Link>
            </span>
            </button>
            <button className="navbar4-action2 thq-button-outline thq-button-animated">
            <a href="https://bit.ly/rohit-port" traget="__blank">
              <span className="thq-body-small">
              Send Me
              </span>
              </a>
            </button>
          </div>
        </div>
      </header>
    </header>
  )
}

Navbar4.defaultProps = {
  link4: 'Contact',
  link2: 'Services',
  logoAlt: 'Digital Marketing Agency',
  link1: 'Home',
  logoSrc:
    './logos.webp',
  action1: '/',
  action3: '/about',
  action2: '/services',
  link3: 'About Us',
  link5: 'Products',
}

Navbar4.propTypes = {
  link4: PropTypes.string,
  link2: PropTypes.string,
  logoAlt: PropTypes.string,
  link1: PropTypes.string,
  logoSrc: PropTypes.string,
  action1: PropTypes.string,
  action3: PropTypes.string,
  action2: PropTypes.string,
  link3: PropTypes.string,
  link5: PropTypes.string,
}

export default Navbar4
