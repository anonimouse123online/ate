import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // 'success', 'error'

  const services = [
    'Residential Cleaning',
    'Commercial Cleaning',
    'End of Lease Cleaning',
    'Carpet Cleaning',
    'Window Cleaning',
    'Construction Cleaning'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      await emailjs.sendForm(
        'service_z08e5dn', // Your EmailJS service ID
        'template_nc6q9vb', // Your EmailJS template ID
        formRef.current,
        'zcrVLqTwIKDds8jE4' // Your EmailJS public key
      );

      setSubmitStatus('success');
      console.log('Booking submitted:', formData);
      
      // Reset form
      setFormData({
        service: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        date: '',
        time: '',
        message: ''
      });

      // Close modal after success
      setTimeout(() => {
        onClose();
        setSubmitStatus('');
      }, 3000);

    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>Schedule Your Service</h2>
          <p>Complete the form below and we'll contact you promptly</p>
        </div>

        <form ref={formRef} className="booking-form" onSubmit={sendEmail}>
          <div className="form-group">
            <label>Service Type *</label>
            <select 
              name="service" 
              value={formData.service} 
              onChange={handleChange}
              required
            >
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
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Preferred Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Preferred Time</label>
              <select name="time" value={formData.time} onChange={handleChange}>
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
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter service location address"
            />
          </div>

          <div className="form-group">
            <label>Additional Requirements</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
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

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="status-message success">
              ✅ Thank you! Your booking request has been sent. We'll contact you within 30 minutes.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="status-message error">
              ❌ Failed to send booking request. Please try again or call us directly.
            </div>
          )}

          <p className="form-note">
            We will contact you within 30 minutes to discuss pricing and schedule confirmation
          </p>
        </form>
      </div>
    </div>
  );
};

export default BookingModal;