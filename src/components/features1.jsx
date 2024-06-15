import React from 'react'

import PropTypes from 'prop-types'

import './features1.css'
import { Helmet } from 'react-helmet'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom'
const Features1 = (props) => {
  const location = useLocation()

  return (
    <>
    {location.pathname == "/service" ? <Helmet>
      <title>
        DigiMark Services
      </title>
    </Helmet>:<Helmet><title>DigiMark By Rohit</title></Helmet>}
    
    <div className="features1-layout251 thq-section-padding">
      <div className="features1-max-width thq-section-max-width">
        <div className="thq-flex-row features1-section-title">
          <div className="features1-column thq-flex-column">
            <span className="thq-body-small">{props.slogan}</span>
            <h2 className="thq-heading-2 features1-text1">
              {props.sectionTitle}
            </h2>
          </div>
          <span className="thq-body-small">{props.sectionDescription}</span>
        </div>
        <div className="features1-content">
          <div className="features1-row thq-flex-row">
            <div className="features1-feature1 thq-flex-column">
              <img
                alt={props.feature1ImageAlt}
                src={props.feature1ImageSrc}
                className="thq-img-ratio-4-3 features1-feature1-image"
              />
              <div className="features1-content1 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature1Title}</h3>
                <span className="thq-body-small">
                  {props.feature1Description}
                </span>
              </div>
            </div>
            <div className="features1-feature2 thq-flex-column">
              <img
                alt={props.feature2ImageAlt}
                src={props.feature2ImageSrc}
                className="thq-img-ratio-4-3 features1-feature2-image"
              />
              <div className="features1-content2 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature2Title}</h3>
                <span className="thq-body-small">
                  {props.feature2Description}
                </span>
              </div>
            </div>
            <div className="features1-feature3 thq-flex-column">
              <img
                alt={props.feature3ImageAlt}
                src={props.feature3ImageSrc}
                className="thq-img-ratio-4-3 features1-feature3-image"
              />
              <div className="features1-content3 thq-flex-column">
                <h3 className="thq-heading-3">{props.feature3Title}</h3>
                <span className="thq-body-small">
                  {props.feature3Description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="features1-actions">
          <a href="https://bit.ly/rohit-port" target='__blank'>
          <button className="thq-button-filled features1-button">
            <span className="thq-body-small">{props.mainAction}</span>
          </button>
          </a>
          <a href="https://bit.ly/rohit-port" target='__blank'>
          <button className="thq-button-outline features1-button1">
            <span className="thq-body-small">{props.secondaryAction}</span>
          </button>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

Features1.defaultProps = {
  mainAction: 'Increase Followers',
  slogan: 'Grow Your Online Presence with Us',
  feature3ImageSrc:
    './googleads.webp',
  feature2ImageAlt: 'YouTube Services Image',
  secondaryAction: 'Boost Engagement',
  feature1ImageSrc:
    'instagram.webp',
  feature3Description:
    'Let us handle your Google Ads campaigns to drive targeted traffic and maximize your ROI.',
  feature1Title: 'Instagram Followers Increase',
  feature3Title: 'Google Ads Management',
  feature2Title: 'YouTube Services',
  feature2ImageSrc:
    'youtube.webp',
  sectionDescription:
    'Check out the amazing features we offer to boost your online presence.',
  sectionTitle: 'Our Features',
  feature3ImageAlt: 'Google Ads Management Image',
  feature2Description:
    'Optimize your YouTube channel with our services to increase views, subscribers, and engagement.',
  feature1Description:
    'Get real and active followers on your Instagram account to enhance your reach and influence.',
  feature1ImageAlt: 'Instagram Followers Increase Image',
}

Features1.propTypes = {
  mainAction: PropTypes.string,
  slogan: PropTypes.string,
  feature3ImageSrc: PropTypes.string,
  feature2ImageAlt: PropTypes.string,
  secondaryAction: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImageSrc: PropTypes.string,
  sectionDescription: PropTypes.string,
  sectionTitle: PropTypes.string,
  feature3ImageAlt: PropTypes.string,
  feature2Description: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
}

export default Features1
