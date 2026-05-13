import { Link } from 'react-router-dom'
import { LogIn, Brain } from 'lucide-react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <Brain size={32} />
          <span>Foundation Model</span>
        </Link>
        
        <nav className="nav">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </nav>
        
        <button className="btn login-btn">
          <LogIn size={18} />
          Login
        </button>
      </div>
    </header>
  )
}

export default Header
