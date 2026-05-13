import { Users, Target, Award, Heart } from 'lucide-react'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Foundation Model</h1>
          <p>We're on a mission to democratize AI and make it accessible to everyone.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container mission-container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Foundation Model, we believe that artificial intelligence should be 
              accessible, ethical, and beneficial for all. Our mission is to build 
              powerful yet responsible AI systems that empower developers, businesses, 
              and individuals to solve complex problems and create positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Target size={40} />
              </div>
              <h3>Innovation</h3>
              <p>Pushing the boundaries of what's possible with AI technology.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <Users size={40} />
              </div>
              <h3>Collaboration</h3>
              <p>Working together with the community to build better solutions.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <Award size={40} />
              </div>
              <h3>Excellence</h3>
              <p>Striving for the highest quality in everything we do.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">
                <Heart size={40} />
              </div>
              <h3>Responsibility</h3>
              <p>Building AI that is ethical, fair, and beneficial for society.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container story-container">
          <h2>Our Story</h2>
          <p>
            Foundation Model was founded by a team of researchers and engineers who 
            saw the transformative potential of large language models. We started 
            with a simple idea: make state-of-the-art AI accessible to developers 
            of all skill levels.
          </p>
          <p>
            Today, we serve thousands of customers worldwide, from startups to 
            Fortune 500 companies, helping them build intelligent applications 
            that were once impossible.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
