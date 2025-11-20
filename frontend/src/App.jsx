import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import './index.css';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="App">
      <Header onBookNow={() => setIsBookingModalOpen(true)} />
      <Hero onBookNow={() => setIsBookingModalOpen(true)} />
      <Services onBookNow={() => setIsBookingModalOpen(true)} />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
      
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </div>
  );
}

export default App;