import React from 'react';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonials from '../components/Testimonials/Testimonials';
import Work from '../components/Work/Work';
import PageWrapper from '../layout/PageWrapper/PageWrapper';

const index = () => {
  return (
      <PageWrapper>
          <Header/>
          <Hero/>
          <About/>
          <Portfolio/>
          <Experience/>
          <Work/>
          <Testimonials/>
          <Contact/>
      </PageWrapper>
  );
};

export default index;
