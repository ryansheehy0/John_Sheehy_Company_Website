import React, { useRef } from 'react'
import Logo from './assets/john_sheehy_logo.svg'
import './styles/Navbar.css'

function Navbar({aboutUsReference, contactUsReference}) {

  window.addEventListener('scroll', function() {
    var scroll = window.scrollY;
    var opacityValue = (scroll / 160);
    document.querySelector('.navbarBackground').style.opacity = opacityValue;
});

  const onLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const aboutUsClick = () => {
    const yOffset = -100; // adjust the value as needed
    const y = aboutUsReference.current?.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  const contactUsClick = () => {
    const yOffset = -100; // adjust the value as needed
    const y = contactUsReference.current?.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  return (
    <>
    <div className='navbarBackground'></div>
    <div className='navbar'>
        <div className='leftSide'>
            <button onClick={onLogoClick} ><img src={Logo}/></button>
        </div>
        <div className='rightSide'>
          <button onClick={aboutUsClick} >About Us</button> 
          <button onClick={contactUsClick} >Contact Us</button> 
        </div>
    </div>
    </>
  )
}

export default Navbar