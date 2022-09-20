import React from 'react';
import Nav from './components/Nav/Nav';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Learn from './components/pages/Learn/Learn';
import Blog from './components/pages/Blog/Blog';
import Inspo from './components/pages/Inspo/Inspo';
import Contact from './components/pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      <Home />
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
