import React from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonials from '../components/Testimonials/Testimonials';
import Work from '../components/Work/Work';

const index = () => {
  return (
      <div>
          <Header/>
          <Hero/>
          <About/>
          <Portfolio/>
          <Experience/>
          <Work/>
          <Testimonials/>
          <Contact/>
          <Footer/>
      </div>
  );
};

export default index;
