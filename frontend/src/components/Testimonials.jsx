import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      position: "Office Manager",
      company: "Tech Innovations Ltd",
      rating: 5,
      comment: "HHR Cleaning has transformed our workplace environment. Their attention to detail and professional approach exceeds our expectations consistently.",
      service: "Commercial Cleaning"
    },
    {
      id: 2,
      name: "James Robertson",
      position: "Property Owner",
      company: "Residential Complex",
      rating: 5,
      comment: "The end of lease cleaning service was exceptional. We received our full bond back without any issues. Highly recommended for landlords.",
      service: "End of Lease Cleaning"
    },
    {
      id: 3,
      name: "Emma Chen",
      position: "Homeowner",
      company: "Private Residence",
      rating: 5,
      comment: "Outstanding residential cleaning service. The team is punctual, professional, and the results are consistently impeccable.",
      service: "Residential Cleaning"
    }
  ];

  const renderStars = (rating) => {
    return '★'.repeat(rating);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <p>Discover why businesses and homeowners trust HHR Cleaning Solutions</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-content">
                <div className="rating">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="testimonial-comment">"{testimonial.comment}"</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.position}</p>
                  <span>{testimonial.company}</span>
                </div>
              </div>
              
              <div className="testimonial-service">
                Service: {testimonial.service}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;