import React, { useRef } from 'react'
import './App.css';
import Navbar from "./Navbar"
import AnimatedNavbar from "./AnimatedNavbar"
import AboutUs from "./AboutUs"
import ContactUs from './ContactUs';
import Background from "./assets/farm_land_image.webp"

function App() {
  const aboutUsReference = useRef(null)
  const contactUsReference = useRef(null)

  //<Navbar aboutUsReference={aboutUsReference} contactUsReference={contactUsReference} />

  return (
    <div className="App">
      <AnimatedNavbar aboutUsReference={aboutUsReference} contactUsReference={contactUsReference} />
      <p className='Blessing'>May peace and plenty bless your world, with a joy that long endures.<br/> 
May all life’s passing seasons bring the best to you and yours.</p>
      <img className="Background" src={Background} />
      <AboutUs ref={aboutUsReference}/>
      <ContactUs ref={contactUsReference}/>
    </div>
  );
}

export default App;
