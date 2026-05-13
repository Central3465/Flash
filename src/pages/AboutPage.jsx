import { Users, Target, Award, Heart } from 'lucide-react'
import './AboutPage.css'

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>About Flash</h1>
          <p>We believe effective learning should be free, accessible, and fun for everyone.</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission">
        <div className="container mission-container">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              At Flash, we're committed to democratizing education through intelligent,
              free revision tools. Our mission is to help students, professionals, and
              lifelong learners master any subject using proven study techniques like
              spaced repetition and active recall. We believe everyone deserves access
              to powerful learning tools, regardless of their background or budget.
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
              <h3>Learning First</h3>
              <p>Everything we build is guided by education science and what helps students learn best.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Users size={40} />
              </div>
              <h3>Community</h3>
              <p>We foster collaboration between students, creating a supportive learning community.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Award size={40} />
              </div>
              <h3>Accessibility</h3>
              <p>Quality education tools should be free and accessible to everyone, everywhere.</p>
            </div>

            <div className="value-card">
              <div className="value-icon">
                <Heart size={40} />
              </div>
              <h3>Open Source</h3>
              <p>We believe in transparency and community-driven development. Flash is built by the community, for the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story">
        <div className="container story-container">
          <h2>Our Story</h2>
          <p>
            Flash was born from frustration with expensive, feature-bloated study tools.
            Our founders believed that effective learning didn't need to cost hundreds of dollars.
            We started with a simple mission: create the free, open-source alternative that students actually want to use.
          </p>
          <p>
            Today, Flash powers millions of study sessions worldwide, helping students ace
            exams, learn new languages, and master professional skills. We're proud to be
            part of your learning journey.
          </p>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
