// mcbc-react/src/pages/Home.jsx
import React from 'react'
import { SEO } from '../components/common/SEO'
import LogoSection from '../components/pages/LogoSection'
import MessageFromPastor from '../components/pages/MessageFromPastor'
import '../styles/pages/Home.css'

function Home() {
  return (
    <div className="page-container">
      <SEO
        title="Motlow Creek Baptist Church"
        description="Welcome to Motlow Creek Baptist Church. We are a Southern Baptist Church located in Campobello, SC. We are a church that loves God, loves people, and loves serving our community."
        name="Motlow Creek Baptist Church"
        type="website"
        keywords="Motlow Creek Baptist Church, Campobello, SC, Southern Baptist, Church, God, Jesus, Community, Love"
      />
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
