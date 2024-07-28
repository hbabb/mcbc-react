// mcbc-react/src/pages/Home.jsx
import Button from '../components/common/Button'
import LogoSection from '../components/pages/LogoSection'
import MessageFromPastor from '../components/pages/MessageFromPastor'
import '../styles/pages/Home.css'

function Home() {
  return (
    <div data-reactroot>
      <div className="home-container">
        <div className="logo-section-wrapper">
          <LogoSection />
          <Button className="primary" to="/">
            Landing Page
          </Button>
        </div>
        <div className="message-container">
          <MessageFromPastor />
        </div>
      </div>
    </div>
  )
}

export default Home
