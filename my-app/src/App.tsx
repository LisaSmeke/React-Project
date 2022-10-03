import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/inspo" element={<Inspo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
