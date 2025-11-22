import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: "✅",
      title: "Quality Guaranteed",
      description: "100% satisfaction guarantee with free re-cleaning if you're not completely satisfied with our service"
    },
    {
      icon: "🌿",
      title: "Eco-Friendly Solutions",
      description: "Environmentally conscious cleaning products that are effective yet safe for your family and pets"
    },
    {
      icon: "⏰",
      title: "Flexible Scheduling",
      description: "Available 7 days a week with same-day service options to fit your busy lifestyle"
    },
    {
      icon: "💰",
      title: "Transparent Pricing",
      description: "No hidden fees with upfront quotes and competitive rates for all our cleaning services"
    },
    {
      icon: "👨‍💼",
      title: "Trained Professionals",
      description: "Our cleaning staff undergoes thorough background checks and continuous training"
    },
    {
      icon: "⭐",
      title: "Proven Track Record",
      description: "Trusted by thousands of satisfied customers with consistent 5-star service reviews"
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose HHR Cleaning Solutions?</h2>
          <p>Experience the difference with our customer-focused approach and professional standards</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;