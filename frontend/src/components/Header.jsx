import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = ({ onBookNow }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <div className="logo-icon">✨</div>
            <div className="logo-text">
              <h1>HHR Cleaning</h1>
              <span>Professional Solutions</span>
            </div>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <a onClick={() => scrollToSection('home')}>Home</a>
            <a onClick={() => scrollToSection('services')}>Services</a>
            <a onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</a>
            <a onClick={() => scrollToSection('testimonials')}>Testimonials</a>
            <a onClick={() => scrollToSection('contact')}>Contact</a>
            <button className="nav-cta" onClick={onBookNow}>
              Book Now
            </button>
          </nav>

          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;