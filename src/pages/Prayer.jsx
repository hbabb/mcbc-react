// mcbc-react/frontend/src/pages/Prayer.jsx
import PrayerRequestMessage from '../components/pages/PrayerRequestMessage'
import '../styles/pages/Prayer.css'

function Prayer() {
  return (
    <div className="prayer-container">
      <div className="prayer-title-container">
        <div classname="message-container">
          <PrayerRequestMessage />
        </div>
      </div>
    </div>
  )
}

export default Prayer
