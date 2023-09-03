import React from 'react';
import About from './conponents/About';
import Navbar from './conponents/Navbar';
import Home from './conponents/Home';
import Skills from './conponents/Skills';
import Work from './conponents/Work'
import Contact from './conponents/Contact';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
