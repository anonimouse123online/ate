import React from 'react';
import './Services.css';

// Import images with correct filenames
import residentialImage from '../assets/cleaningg.jpg';
import commercialImage from '../assets/commercial.jpg';
import endOfLeaseImage from '../assets/end.jpeg';
import carpetImage from '../assets/carpet.jpg';
import windowImage from '../assets/window.jpeg';
import constructionImage from '../assets/constuction.jpg'; // Changed from con.jpg

const Services = ({ onBookNow }) => {
  const services = [
    {
      id: 1,
      image: residentialImage,
      title: "Residential Cleaning",
      description: "Comprehensive home cleaning services using eco-friendly products and advanced equipment for a healthier living environment.",
      features: ["Deep cleaning", "Eco-friendly products", "Flexible scheduling", "Quality guarantee"],
      price: "From $120"
    },
    {
      id: 2,
      image: commercialImage,
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for offices, retail spaces, and commercial establishments.",
      features: ["Office cleaning", "Common areas", "Restroom sanitization", "Custom schedules"],
      price: "Custom Quote"
    },
    {
      id: 3,
      image: endOfLeaseImage,
      title: "End of Lease Cleaning",
      description: "Guaranteed bond-back cleaning service to ensure full deposit return.",
      features: ["Bond guarantee", "Professional equipment", "Thorough inspection", "Quick turnaround"],
      price: "From $250"
    },
    {
      id: 4,
      image: carpetImage,
      title: "Carpet Cleaning",
      description: "Advanced steam cleaning technology for all carpet types and rug varieties.",
      features: ["Steam cleaning", "Stain removal", "Odor elimination", "Quick drying"],
      price: "From $80/room"
    },
    {
      id: 5,
      image: windowImage,
      title: "Window Cleaning",
      description: "Crystal clear window cleaning for residential and commercial properties.",
      features: ["Interior & exterior", "Streak-free finish", "Safety equipment", "Regular maintenance"],
      price: "From $150"
    },
    {
      id: 6,
      image: constructionImage,
      title: "Construction Cleaning",
      description: "Post-construction cleanup services to prepare spaces for occupancy.",
      features: ["Debris removal", "Final cleaning", "Waste disposal", "Move-in ready"],
      price: "From $300"
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Our Professional Services</h2>
          <p>Comprehensive cleaning solutions tailored to your specific requirements</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-header">
                <div className="service-image">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    loading="lazy"
                  />
                </div>
              </div>
              
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <div className="service-features">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="feature">
                    <span className="feature-check">✓</span>
                    {feature}
                  </div>
                ))}
              </div>

              <div className="service-footer">
                <div className="service-pricing">
                  <span className="price">{service.price}</span>
                </div>
                <button className="service-cta" onClick={onBookNow}>
                  Book Service
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;