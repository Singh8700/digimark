import React from 'react'

import PropTypes from 'prop-types'

import './hero9.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Hero9 = (props) => {
  return (
    <div className="hero9-header30 thq-section-padding home">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="hero9-image"
      />
      <div className="hero9-container"></div>
      <div className="hero9-max-width thq-section-max-width">
        <div className="hero9-content">
          <h1 className="hero9-text thq-heading-1">{props.heading1}</h1>
        
          <p className="hero9-text1 thq-body-large">{props.content1}</p>
          <div className="hero9-actions">
            <button className="thq-button-filled hero9-button">
            <Link to="/service">
              <span className="hero9-text2 thq-body-small">
                {props.action1}
              </span>
            </Link>
            </button>
            <button className="thq-button-outline hero9-button1">
            <a href="https://bit.ly/rohit-port" traget="__blank">
              <span className="hero9-text3 thq-body-small">
                {props.action2}
              </span>
            </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero9.defaultProps = {
  action2: 'Get Started',
  image1Src:
    './bg.webp',
  content1:
    'We offer top-notch Instagram, YouTube, and Google Ads services to help you increase followers, engagement, and reach your target audience.',
  action1: 'Learn More',
  heading1: 'Boost Your Online Presence',
  image1Alt: 'Digital Marketing Agency',
}

Hero9.propTypes = {
  action2: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
  action1: PropTypes.string,
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
}

export default Hero9
