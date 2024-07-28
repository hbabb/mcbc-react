// mcbc-react\src\components\common\Header.jsx
import { useState } from 'react'
import '../../styles/components/Header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className="header">
      <nav className="navbar">
        <div className="nav-container">
          <button className="hamburger" onClick={toggleMenu}>
            &#9776;
          </button>
          <ul className={`nav-list ${isOpen ? 'block' : 'hidden'} md:flex`}>
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/prayer" className="nav-link">
                Prayer
              </a>
            </li>
            <li className="nav-item">
              <a href="/missions" className="nav-link">
                Missions
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a href="/events" className="nav-link">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a href="/blogs" className="nav-link">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
