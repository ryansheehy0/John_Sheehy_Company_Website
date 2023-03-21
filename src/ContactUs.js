import React, { forwardRef, useEffect } from 'react'
import Image from './assets/precision-irrigation.jpg'
import './styles/ContactUs.css'

const ContactUs = forwardRef((props, ref) => {
  useEffect(() => {
    const container = document.getElementById("contactUs");
    container.scrollTop = -300;
  }, [])

  return (
    <div ref={ref} Id="contactUs" className='contactUs'>
      <div className='leftSide'>
        <h1>Contact Us</h1>
        <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida tortor euismod, efficitur ante sed, facilisis augue. Proin et urna blandit, semper dolor sed, consectetur metus. Nunc laoreet neque id ipsum bibendum lacinia. Integer ullamcorper leo quis velit ultricies, vel scelerisque leo mollis. Nulla facilisi. Phasellus ut magna at est lobortis pharetra. Sed non convallis nulla, ac consectetur turpis. Sed volutpat mi non faucibus fringilla. Quisque sed mauris in massa pretium cursus non et nibh. Vivamus eget elit mi. In interdum ante sed libero fringilla, id dignissim arcu ultricies. Sed feugiat, sapien eu dignissim bibendum, metus tellus varius nunc, vel luctus risus nulla eget nisl. Sed vel diam lacus. Sed id sapien sit amet metus suscipit suscipit at at felis. Donec auctor nunc eu nisi finibus, nec fermentum velit pellentesque.</p>
      </div>
      <div className='rightSide'>
        <img src={Image}/>
      </div>
    </div>
  )
})

export default ContactUs