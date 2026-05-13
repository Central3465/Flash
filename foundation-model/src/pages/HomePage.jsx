import { ArrowRight, Zap, Shield, Globe } from 'lucide-react'
import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Welcome to Foundation Model</h1>
            <p>
              Discover the power of next-generation AI technology. 
              Build smarter applications with our cutting-edge foundation models.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                Learn More
                <ArrowRight size={20} />
              </Link>
              <button className="btn btn-secondary">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={40} />
              </div>
              <h3>Lightning Fast</h3>
              <p>Experience blazing fast inference speeds with our optimized models.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={40} />
              </div>
              <h3>Secure & Reliable</h3>
              <p>Enterprise-grade security and reliability for your critical applications.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Globe size={40} />
              </div>
              <h3>Global Scale</h3>
              <p>Deploy worldwide with our distributed infrastructure and edge computing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of developers building the future with Foundation Model.</p>
          <button className="btn btn-light">Start Building Now</button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
