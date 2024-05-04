import React from 'react';
import './App.css'
import Navbar from '../src/Components/Navbar/Navbar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import About from './Components/About/About.jsx';
import Faqs from './Components/Faqs/Faqs.jsx'
import Contact from './Components/Contact/Contact.jsx';
import Footer from './Components/Footer/Footer.jsx'


function App() {


  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <About />
        <Faqs />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
