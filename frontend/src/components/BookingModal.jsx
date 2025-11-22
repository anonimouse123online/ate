import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const formRef = useRef();

  const services = [
    'Residential Cleaning',
    'Commercial Cleaning',
    'End of Lease Cleaning',
    'Carpet Cleaning',
    'Window Cleaning',
    'Construction Cleaning'
  ];

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
      
      // Show success message in modal
      setIsSuccess(true);
      formRef.current.reset();
      
      // Auto close after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 3000);
      
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send booking request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={handleClose}>×</button>
        
        {isSuccess ? (
          // Success State
          <div className="success-state">
            <div className="success-icon">✓</div>
            <h2>Booking Request Sent Successfully!</h2>
            <p>We will contact you within 30 minutes to discuss pricing and schedule confirmation.</p>
            <div className="success-timer">
              <p>This modal will close automatically in 3 seconds...</p>
            </div>
          </div>
        ) : (
          // Form State
          <>
            <div className="modal-header">
              <h2>Schedule Your Service</h2>
              <p>Complete the form below and we'll contact you promptly</p>
            </div>

            <form 
              ref={formRef}
              className="booking-form" 
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label>Service Type *</label>
                <select name="service" required>
                  <option value="">Select a service</option>
                  {services.map(service => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input
                    type="date"
                    name="date"
                  />
                </div>
                <div className="form-group">
                  <label>Preferred Time</label>
                  <select name="time">
                    <option value="">Flexible</option>
                    <option value="morning">Morning (8AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Service Address</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter service location address"
                />
              </div>

              <div className="form-group">
                <label>Additional Requirements</label>
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Please specify any special requirements or notes..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary btn-block"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Request Quote'}
              </button>

              <p className="form-note">
                We will contact you within 30 minutes to discuss pricing and schedule confirmation
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;