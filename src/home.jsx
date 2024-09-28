import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Category from './components/Category';
import MostSearchedCar from './components/MostSearchedCar';
import Section from './components/Section';
import Footer from './components/Footer';
import FeaturesSection from './components/FeaturesSection';
import AnimatedSection from './AnimatedSection';

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AnimatedSection>
        <Category />
      </AnimatedSection>
      <AnimatedSection>
        <MostSearchedCar />
      </AnimatedSection>
      <AnimatedSection>
        <Section />
      </AnimatedSection>
      <AnimatedSection>
        <FeaturesSection />
      </AnimatedSection>
      <Footer />
    </div>
  );
}

export default Home;
