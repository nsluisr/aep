import React from 'react';
import Hero from '../components/Hero';
import Topics from '../components/Topics';
import Team from '../components/Team';
import Downloads from '../components/Downloads';
import Footer from '../components/Footer';

// This is the main page component.
// It's now clean and easy to read, just assembling the other components.
function HomePage() {
  return (
    <>
      <Hero />
      <Topics />
      <Team />
      <Downloads />
      <Footer />
    </>
  );
}

export default HomePage;
