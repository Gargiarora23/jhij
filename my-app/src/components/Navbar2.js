import React from 'react'
import './Navbar.css';
 import img from './imag.webp';

export const Navbar2 = () => 
    {
  return (
    <>
    <div>
     <img src={img} alt='image not found'/> </div>
         <div className="navbar">
        <div className="logo">LOGO</div>
        <div className="menu">

          <div className="items">HOME</div>
          <div className="items">ABOUT US</div>
          <div className="items">MORE</div>
          <div className="items">INFO</div>
          <div className="items">CONTACT US</div>
        </div>
      </div>
      </>
  )
}
export default Navbar2
