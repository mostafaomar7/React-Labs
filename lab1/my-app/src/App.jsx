import React from 'react';
import Navbar from './Feature/Components/Navbar'
import Hero from './Feature/Components/Hero'
import './App.css'
import About from './Feature/Components/about';
import Skills from './Feature/Components/Skills';
import Project from './Feature/Components/Project';
import Footer from './Feature/Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
