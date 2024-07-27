// mcbc-react\src\App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.scss'

import OriginalApp from './pages/OriginalApp'
import About from './pages/About'
import BlogPost from './pages/BlogPost'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Events from './pages/Events'
import Home from './pages/Home'
import EventPage from './pages/EventPage'
import Staff from './pages/Staff'
import Prayer from './pages/Prayer'
import Missions from './pages/Missions'

import Header from './components/common/Header'
import Footer from './components/common/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<OriginalApp />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPost />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/home" element={<Home />} />
        <Route path="/event/:eventTitle" element={<EventPage />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/prayer" element={<Prayer />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
