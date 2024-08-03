// mcbc-react/frontend/src/pages/Prayer.jsx
import React from 'react'
import { Helmet } from 'react-helmet'
import PrayerDirectorMessage from '../components/pages/PrayerDirectorMessage'
import LHP_logo from '../components/common/LHP_logo'
import '../styles/pages/Prayer.css'

function Prayer() {
  return (
    <div className="prayer-page">
      <Helmet>
        <title>The Creek Prayer Ministry</title>
        <meta
          name="title"
          content="The Creek - Motlow Creek Baptist Church Prayer Ministry"
        />
        <meta
          name="description"
          content="Welcome to Motlow Creek Baptist Church. We are a Southern Baptist Church located in Campobello, SC. We are a church that loves God, loves people, and loves serving our community."
        />
        <meta
          name="keywords"
          content="The Creek, Motlow Creek Baptist Church, Prayer, Prayer Ministry, Ministry, Blessings"
        />
        <meta name="author" content="Data Point Solutions: Rights Babb" />
      </Helmet>
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
