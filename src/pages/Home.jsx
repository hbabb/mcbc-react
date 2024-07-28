// mcbc-react/src/pages/Home.jsx
import LogoSection from '../components/pages/LogoSection'
import MessageFromPastor from '../components/pages/MessageFromPastor'
import '../styles/pages/Home.css'

function Home() {
  return (
    <div className="page-container">
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
