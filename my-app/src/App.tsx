import { Routes, Route } from 'react-router-dom';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { Box } from './components/context/Box';
// import { WelcomeContextProvider } from './components/Context/WelcomeContext';
// import { Welcome } from './components/Context/Welcome';

import Nav from './components/Nav/Nav';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';

import Learn from './components/pages/Learn/Learn';
import LearnHtml from './components/pages/Learn/Html/LearnHtml';
import LearnHtmlVideos from './components/pages/Learn/Html/HtmlVideos';
import LearnHtmlDocs from './components/pages/Learn/Html/HtmlDocs';
import LearnHtmlPractice from './components/pages/Learn/Html/HtmlPractice';

import LearnCss from './components/pages/Learn/Css/LearnCss';

import LearnJs from './components/pages/Learn/Js/LearnJs';

import LearnReact from './components/pages/Learn/React/LearnReact';

import Contests from './components/Contests/Contests';

import Blog from './components/pages/Blog/Blog';

import Inspo from './components/pages/Inspo/Inspo';

import Contact from './components/pages/Contact/Contact';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Nav />
      {/* <ThemeContextProvider> */}
      <UserContextProvider>
        <Box />
      </UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />}>
          <Route path="html" element={<LearnHtml />} />
          {/* <Route path="videos" element={<LearnHtmlVideos />} />
            <Route path="docs" element={<LearnHtmlDocs />} />
            <Route path="practice" element={<LearnHtmlPractice />} /> */}
          {/* </Route> */}
          <Route path="css" element={<LearnCss />} />
          <Route path="js" element={<LearnJs />} />
          <Route path="react" element={<LearnReact />} />
        </Route>
        <Route path="/learn/contests" element={<Contests />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/inspo" element={<Inspo />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {/* </ThemeContextProvider> */}
    </>
  );
}

export default App;
