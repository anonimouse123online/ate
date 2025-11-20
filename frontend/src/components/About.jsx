import React from 'react'
import './About.css'

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <div className="section-header">
              <h2>About HHR Cleaning Solutions</h2>
              <p>Your trusted partner for premium cleaning services</p>
            </div>
            
            <div className="about-description">
              <p>
                With over 8 years of experience in the cleaning industry, HHR Cleaning Solutions 
                has established itself as a leader in providing exceptional cleaning services 
                across Australia. Our commitment to quality, reliability, and customer satisfaction 
                has made us the preferred choice for thousands of homeowners and businesses.
              </p>
              
              <p>
                We believe that a clean environment is essential for health, productivity, and 
                overall well-being. That's why we use only the best eco-friendly products and 
                state-of-the-art equipment to deliver results that exceed expectations.
              </p>
            </div>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-number">8+</div>
                <div className="feature-text">Years Experience</div>
              </div>
              <div className="feature-item">
                <div className="feature-number">50+</div>
                <div className="feature-text">Trained Professionals</div>
              </div>
              <div className="feature-item">
                <div className="feature-number">100%</div>
                <div className="feature-text">Satisfaction Guarantee</div>
              </div>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <span>Professional Cleaning Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About