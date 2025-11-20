import React from 'react';
import './Hero.css';

const Hero = ({ onBookNow }) => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span>Trusted Since 2015</span>
          </div>
          
          <h1 className="hero-title">
            Premium Cleaning Services for Modern Living
          </h1>
          
          <p className="hero-description">
            Experience unparalleled cleaning excellence with our certified professionals. 
            We deliver exceptional results for homes and businesses across Australia using 
            eco-friendly products and advanced cleaning technology.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10,000+</span>
              <span className="stat-label">Satisfied Clients</span>
            </div>
            <div className="stat">
              <span className="stat-number">50,000+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Customer Support</span>
            </div>
          </div>

          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onBookNow}>
              Get Free Quote
              <span className="btn-icon">→</span>
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              <span className="btn-icon">📞</span>
              Call: 1300-CLEAN-HHR
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;