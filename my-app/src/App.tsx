import React from 'react';
import Nav from './components/Nav/Nav';
import About from './components/pages/About/About';
import Learn from './components/pages/Learn/Learn';
import Blog from './components/pages/Blog/Blog';
import Inspo from './components/pages/Inspo/Inspo';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import HeroSection from './components/pages/Hero/Hero';

function App() {
  return (
    <>
      <Nav />
      <HeroSection />
      <About />
      <Learn />
      <Blog />
      <Inspo />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
