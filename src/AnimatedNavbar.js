import React from 'react'
import './styles/AnimatedNavbar.css'

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
            <button onClick={onLogoClick} >
              <svg width="330in" height="80in" viewBox="0 0 330 80">
                  <g layername="0" is_locked="false" is_construction="false" fill="none" stroke="white" strokeWidth="1.5">
                      <path className='john' d="M30,40 C10,20 20,10 28.33333333,6.66666667 C36.66666667,3.33333333 43.33333333,6.66666667 46.66666667,13.33333333 C50,20 50,30 45,41.66666667 C40,53.33333333 30,66.66666667 21.66666667,71.66666667 C13.33333333,76.66666667 6.66666667,73.33333333 5,70 C3.33333333,66.66666667 6.66666667,63.33333333 15.83333333,58.33333333 C25,53.33333333 40,46.66666667 47.5,43.33333333 C55,40 55,40 53.33333333,41.66666667 C51.66666667,43.33333333 48.33333333,46.66666667 48.33333333,50 C48.33333333,53.33333333 51.66666667,56.66666667 55,56.66666667 C58.33333333,56.66666667 61.66666667,53.33333333 61.66666667,50 C61.66666667,46.66666667 58.33333333,43.33333333 55,43.33333333 C51.66666667,43.33333333 48.33333333,46.66666667 53.33333333,46.66666667 C58.33333333,46.66666667 71.66666667,43.33333333 78.33333333,38.33333333 C85,33.33333333 85,26.66666667 83.33333333,23.33333333 C81.66666667,20 78.33333333,20 75,26.66666667 C71.66666667,33.33333333 68.33333333,46.66666667 66.66666667,53.33333333 C65,60 65,60 66.66666667,55.83333333 C68.33333333,51.66666667 71.66666667,43.33333333 75,45 C78.33333333,46.66666667 81.66666667,58.33333333 85,59.16666667 C88.33333333,60 91.66666667,50 93.33333333,45 C95,40 95,40 94.16666667,43.33333333 C93.33333333,46.66666667 91.66666667,53.33333333 90.83333333,56.66666667 C90,60 90,60 91.66666667,55.16666667 C93.33333333,50.33333333 96.66666667,40.66666667 102.08333333,46.08333333 C107.5,51.5 115,72 130,50 "/>
                      <path className='s' d="M157,28 C160,29 170,19.5 171.66666667,13.08333333 C173.33333333,6.66666667 166.66666667,3.33333333 159.16666667,6 C151.66666667,8.66666667 143.33333333,17.33333333 145,24 C146.66666667,30.66666667 158.33333333,35.33333333 164.16666667,41 C170,46.66666667 170,53.33333333 165,59.16666667 C160,65 150,70 135,60 "/>
                      <path className='heehy' d="M180,21 C170,57 170,57 169.66666667,58.16666667 C169.33333333,59.33333333 168.66666667,61.66666667 170.5,58.5 C172.33333333,55.33333333 176.66666667,46.66666667 179.66666667,46.16666667 C182.66666667,45.66666667 184.33333333,53.33333333 185.83333333,57 C187.33333333,60.66666667 188.66666667,60.33333333 190.83333333,58.5 C193,56.66666667 196,53.33333333 196.66666667,50.66666667 C197.33333333,48 195.66666667,46 194,46 C192.33333333,46 190.66666667,48 190.83333333,50.66666667 C191,53.33333333 193,56.66666667 195.33333333,58.33333333 C197.66666667,60 200.33333333,60 202.83333333,58.33333333 C205.33333333,56.66666667 207.66666667,53.33333333 208,50.66666667 C208.33333333,48 206.66666667,46 205,46 C203.33333333,46 201.66666667,48 201.83333333,50.66666667 C202,53.33333333 204,56.66666667 205.66666667,58.33333333 C207.33333333,60 208.66666667,60 211.33333333,53.83333333 C214,47.66666667 218,35.33333333 219.5,28.66666667 C221,22 220,21 218.33333333,27.16666667 C216.66666667,33.33333333 214.33333333,46.66666667 213.5,53.66666667 C212.66666667,60.66666667 213.33333333,61.33333333 214.66666667,57.83333333 C216,54.33333333 218,46.66666667 219.5,46.66666667 C221,46.66666667 222,54.33333333 222.83333333,57.66666667 C223.66666667,61 224.33333333,60 225.25,57.5 C226.16666667,55 227.33333333,51 227.75,48.83333333 C228.16666667,46.66666667 227.83333333,46.33333333 227.5,46.33333333 C227.16666667,46.33333333 226.83333333,46.66666667 226.58333333,49 C226.33333333,51.33333333 226.16666667,55.66666667 227.58333333,57.66666667 C229,59.66666667 232,59.33333333 233.83333333,56.83333333 C235.66666667,54.33333333 236.33333333,49.66666667 236.5,47.5 C236.66666667,45.33333333 236.33333333,45.66666667 235.33333333,50.66666667 C234.33333333,55.66666667 232.66666667,65.33333333 220,70.16666667 C207.33333333,75 183.66666667,75 173.33333333,72.25 C163,69.5 166,64 238,63 "/>
                      <path className='co' d="M285,15 C270,-10 253,15 250.16666667,32.5 C247.33333333,50 258.66666667,60 267.16666667,63.33333333 C275.66666667,66.66666667 281.33333333,63.33333333 286.33333333,59.33333333 C291.33333333,55.33333333 295.66666667,50.66666667 298.83333333,48.33333333 C302,46 304,46 304,46 C304,46 302,46 300,47.33333333 C298,48.66666667 296,51.33333333 296.5,54.16666667 C297,57 300,60 303,60 C306,60 309,57 309.5,54.16666667 C310,51.33333333 308,48.66666667 306,47.33333333 C304,46 302,46 301.5,47.33333333 C301,48.66666667 302,51.33333333 303.66666667,52 C305.33333333,52.66666667 307.66666667,51.33333333 311.33333333,48.16666667 C315,45 320,40 320,30 "/>
                      <circle className='period' cx="320" cy="60" r="1"/>
                  </g>
              </svg>
            </button>
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