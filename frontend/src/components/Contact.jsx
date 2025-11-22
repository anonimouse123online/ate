import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        'service_z08e5dn',
        'template_3x6e0di',
        formRef.current,
        'zcrVLqTwIKDds8jE4'
      );
      
      alert('Thank you for your inquiry. We will contact you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send inquiry. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Contact Us</h2>
          <p>Ready to experience premium cleaning services? Get in touch today</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get In Touch</h3>
            
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div className="contact-details">
                <h4>Phone</h4>
                <p>1300-CLEAN-HHR</p>
                <span>Mon-Sun: 7:00 AM - 9:00 PM</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📧</div>
              <div className="contact-details">
                <h4>Email</h4>
                <p>info@hhrclean.com</p>
                <span>Response within 1 hour</span>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div className="contact-details">
                <h4>Service Areas</h4>
                <p>Nationwide Coverage</p>
                <span>Metro and regional Australia</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <h3>Contact Us</h3>
            <form 
              ref={formRef}
              className="contact-form" 
              onSubmit={handleSubmit}
            >
              {/* Hidden fields for EmailJS */}
              <input type="hidden" name="_subject" value="New Contact Form Inquiry - HHR Cleaning" />
              <input type="hidden" name="_captcha" value="false" />
              
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <select 
                  name="service" 
                  value={formData.service} 
                  onChange={handleChange}
                >
                  <option value="">Select Service Type</option>
                  <option value="residential">Residential Cleaning</option>
                  <option value="commercial">Commercial Cleaning</option>
                  <option value="end-of-lease">End of Lease Cleaning</option>
                  <option value="carpet">Carpet Cleaning</option>
                  <option value="window">Window Cleaning</option>
                  <option value="construction">Construction Cleaning</option>
                </select>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Please describe your cleaning requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;