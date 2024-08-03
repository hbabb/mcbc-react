// mcbc-react/src/pages/Home.jsx
import React from 'react'
import { Helmet } from 'react-helmet'
import LogoSection from '../components/pages/LogoSection'
import MessageFromPastor from '../components/pages/MessageFromPastor'
import '../styles/pages/Home.css'

function Home() {
  return (
    <div className="page-container">
      <Helmet>
        <title>Motlow Creek Baptist Church</title>
        <meta name="title" content="The Creek - Motlow Creek Baptist Church" />
        <meta
          name="description"
          content="Welcome to Motlow Creek Baptist Church. We are a Southern Baptist Church located in Campobello, SC. We are a church that loves God, loves people, and loves serving our community."
        />
        <meta
          name="keywords"
          content="Motlow Creek Baptist Church, Motlow Creek, Campobello, Christian Fellowship, Sunday School, Sunday School Classes, Church, Blessings, Blessings Box"
        />
        <meta name="author" content="Data Point Solutions: Rights Babb" />
      </Helmet>
      <div className="home-container">
        <div className="logo-section-wrapper">
          <LogoSection />
        </div>
        <div className="message-container">
          <MessageFromPastor />
        </div>
      </div>
    </div>
  )
}

export default Home
