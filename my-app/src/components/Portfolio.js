import React from 'react'
import './Port.css';

import img from './html1.png';
import img1 from './css2.png';
import img2 from './react3.png';
import img3 from './node4.png';
import img4 from './graphic5.png';
import img5 from './mongo6.png';
import img6 from './figma7.svg';
import App from '../App';

export const Portfolio = () => 
    {
  return (
    <>
      {/* <div className='img'>
      <img src={img} alt='image not found'/> */}
         <div className="port">
        <div className="portfolio">PORTFOLIO</div>
        <div className="menu">

          <button className="items">ABOUT</button>
          <button className="items">EXPERIENCE</button>
          <button className="items">PROJECTS</button>
          <button className="items">CONTACT</button>
        </div>
      </div>
      <h1>Hi! I'm GARGI</h1>
      <div className='paragraph'>
          I'am a full stack Developer with five Years of Experience <br/>
          using React and Node J.S.Reach out if you'd like to <br/>
          learn more!
      </div>
      <button className='but'>CONTACT ME</button>

      {/* //...............................................// */}

    <h2>ABOUT</h2>

    <h3>FRONTEND DEVELOPER :</h3>
    <div className='content'>
    <p>
     I'm a front-end Developer with experiences in the building<br/>
     responsive and optimized sites
    </p>
    </div>
     
    <h3>BACKEND DEVELOPER :</h3>
    <div className='content'>
    <p>
    I have experiences developing fast and optimized<br/>
    back-end systems and APIs
    </p>
    </div>

    <h3>UI DESIGNER :</h3>
    <div className='content'>
    <p>
      I have designed multiple landing and have<br/>
      created design systems as well.
    </p>
    </div>
   

   <h2>EXPERIENCE</h2>

  <div className='logo'>
      <img src={img} alt='image not found'/>
   </div>
   
   <div className='logo1'>
      <img src={img1} alt='image not found'/>
   </div>

   <div className='logo2'>
      <img src={img2} alt='image not found'/>
   </div>

   <div className='logo3'>
      <img src={img3} alt='image not found'/>
   </div>

   <div className='logo4'>
      <img src={img4} alt='image not found'/>
   </div>

   <div className='logo5'>
      <img src={img5} alt='image not found'/>
   </div>

   <div className='logo5'>
      <img src={img6} alt='image not found'/>
   </div>


      </>
  )
}

export default Portfolio