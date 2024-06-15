import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Features1 from '../components/features1'
import Contact3 from '../components/contact3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>DigiMark By Rohit</title>
        <meta
          name="description"
          content="Discover our premier digital marketing agency offering top-tier Instagram followers boost, YouTube growth strategies, and expert Google Ads management. "
        />
        <meta property="og:title" content="digimark by rohit" />
        <meta
          property="og:description"
          content="Discover our premier digital marketing agency offering top-tier Instagram followers boost, YouTube growth strategies, and expert Google Ads management. "
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/399471a5-d4cd-4498-a2c8-01a1b4322c13/01366900-e9e7-4a9b-84ec-ff879acd701c?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
       <Hero9></Hero9>
      <Features1></Features1>
      <Contact3></Contact3>
    </div>
  )
}

export default Home
