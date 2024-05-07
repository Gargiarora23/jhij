import React from 'react'
import './Port.css';
  // import img from './';

export const Portfolio = () => 
    {
  return (
    <>
     {/* <div className='img'>
      <img src={img} alt='image not found'/> */}
         <div className="portfolio">
        <div className="stellar">PORTFOLIO</div>
        <div className="menu">

          <button className="items">HOME</button>
          <button className="items">EXPERIENCE</button>
          <button className="items">SKILLS</button>
          <button className="items">PROJECT</button>
          <button className="items">CONTACT</button>
        </div>
      </div>
      <h1>stellarX</h1>
      <div className='paragraph'>
        <p>
            Augment your workforce with AI-powered
            virtual Reality Experiences
        </p>
      </div>
      <button className='but'>EXPERIENCE</button>
    
      </>
  )
}

export default Portfolio