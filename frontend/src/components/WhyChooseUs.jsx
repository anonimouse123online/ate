import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      icon: "🏆",
      title: "Award-Winning Service",
      description: "Recognized as Australia's premier cleaning service with multiple industry awards"
    },
    {
      icon: "🌿",
      title: "Eco-Conscious Approach",
      description: "Certified green cleaning products that are safe for families, pets, and the environment"
    },
    {
      icon: "⏰",
      title: "Flexible Scheduling",
      description: "24/7 availability with same-day service options to accommodate your busy schedule"
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description: "Transparent pricing with a best-price guarantee and no hidden fees"
    },
    {
      icon: "🛡️",
      title: "Fully Insured",
      description: "$2 million public liability insurance providing complete peace of mind"
    },
    {
      icon: "⭐",
      title: "5-Star Excellence",
      description: "Consistently rated 4.9/5 stars across 2,000+ verified customer reviews"
    }
  ];

  return (
    <section id="why-choose-us" className="why-choose-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose HHR Cleaning Solutions?</h2>
          <p>Discover the distinctive qualities that establish our industry leadership</p>
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