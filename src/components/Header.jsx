import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogIn, Brain, Menu, X } from 'lucide-react'
import './Header.css'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={() => setMobileMenuOpen(false)}>
          <Brain size={32} />
          <span>Flash</span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
