import { ArrowRight, BookOpen, BarChart3, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import './HomePage.css'

function HomePage() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Master Your Studies with Flash</h1>
            <p>
              A free, open-source flashcard and revision study tool.
              Create, share, and study smarter with spaced repetition.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                Learn More
                <ArrowRight size={20} />
              </Link>
              <button className="btn btn-secondary">Create Deck Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Flash</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <BookOpen size={40} />
              </div>
              <h3>Smart Flashcards</h3>
              <p>Create beautiful, organized flashcards with images, formulas, and multimedia. Learn efficiently with spaced repetition.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <BarChart3 size={40} />
              </div>
              <h3>Track Progress</h3>
              <p>Monitor your learning journey with detailed statistics and insights. Know exactly what you've mastered.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <Users size={40} />
              </div>
              <h3>Share & Collaborate</h3>
              <p>Share your decks with classmates and friends. Study together and build a learning community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container cta-container">
          <h2>Ready to Study Smarter?</h2>
          <p>Start creating your first deck today and transform your revision process.</p>
          <button className="btn btn-light">Get Started Free</button>
        </div>
      </section>
    </div>
  )
}

export default HomePage
