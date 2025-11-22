import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-text">
                <h3>HHR Cleaning</h3>
                <span>Professional Solutions</span>
              </div>
            </div>
            <p className="footer-description">
              Delivering exceptional cleaning services across Australia with 
              uncompromising quality, reliability, and customer satisfaction since 2015.
            </p>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('services')}>Residential Cleaning</a></li>
              <li><a onClick={() => scrollToSection('services')}>Commercial Cleaning</a></li>
              <li><a onClick={() => scrollToSection('services')}>End of Lease Cleaning</a></li>
              <li><a onClick={() => scrollToSection('services')}>Carpet Cleaning</a></li>
              <li><a onClick={() => scrollToSection('services')}>Window Cleaning</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a onClick={() => scrollToSection('why-choose-us')}>Why Choose Us</a></li>
              <li><a onClick={() => scrollToSection('testimonials')}>Testimonials</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-info">
              <p>📞 1300-CLEAN-HHR</p>
              <p>📧 info@hhrclean.com</p>
              <p>📍 Australia Wide</p>
              <p>🕒 7:00 AM - 9:00 PM</p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 HHR Cleaning Solutions. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;