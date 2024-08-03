// mcbc-react/frontend/src/pages/Prayer.jsx
import React from 'react'
import { SEO } from '../components/common/SEO'
import PrayerDirectorMessage from '../components/pages/PrayerDirectorMessage'
import LHP_logo from '../components/common/LHP_logo'
import '../styles/pages/Prayer.css'

function Prayer() {
  return (
    <div className="prayer-page">
      <SEO
        title="Lighthouse Prayer Ministry"
        description="Welcome to The Creek's Lighthouse Prayer Ministry. We are a community of believers who are dedicated to praying for the needs of our church, our community, and our world. Our goal is to be 'A Beacon in the Dark'."
        name="Lighthouse Prayer Ministry"
        type="website"
        keywords="Lighthouse Prayer Ministry, Prayer, Community, Church, God, Jesus, Love, Hope, A Beacon in the Dark"
      />
      <div className="prayer-title-container">
        <div className="prayer-logo-container">
          <LHP_logo />
        </div>
        <div classname="message-container">
          <PrayerDirectorMessage />
        </div>
      </div>
    </div>
  )
}

export default Prayer
