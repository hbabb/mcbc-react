// mcbc-react/frontend/src/pages/Prayer.jsx
import PrayerDirectorMessage from '../components/pages/PrayerDirectorMessage'
import LHP_logo from '../components/common/LHP_logo'
import '../styles/pages/Prayer.css'

function Prayer() {
  return (
    <div className="prayer-page">
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
