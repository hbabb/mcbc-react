// mcbc-react\src\components\common\Footer.jsx
import React from 'react'
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa' // Import the LinkedIn and GitHub icons
import '../../styles/components/Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Motlow Creek Baptist Church. All
        rights reserved.{' '}
        <em className="construction">THIS SITE IS UNDER CONSTRUCTION</em>
      </p>
      <div className="social-icons">
        <a
          href="https://www.facebook.com/profile.php?id=100064495938328"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaFacebook size={40} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
