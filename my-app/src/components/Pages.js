import React from 'react'
import './Nav.css';
import image7 from '../components/image/image1.png';
import image8 from '../components/image/image2.png';
import image9 from '../components/image/image3.png';
import image10 from '../components/image/image4.png';
import image11 from '../components/image/image5.png';
import image12 from '../components/image/image6.png';
import image13 from '../components/image/image7.png';
import image14 from '../components/image/image8.png';


export const Pages = () => 
    {
  return (
<>

<h1>EXPLORE ALL PRODUCTS</h1>
      
<div className='main'>
<div className="text">
    <div className="picture">
    <img src={image7} className="image1" alt="...." />
    </div>
    <p>$899 <strike>$1,350</strike></p>
    <h2>Safavieh Couture</h2>
      <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
  </div>

  <div className="text">
    <div className="picture">
    <img src={image8} className="image2" alt="...." />
    </div>
    <p>$34</p>
    <h2>Fair Trade Ghana</h2>
      <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
  </div>

  <div className="text">
    <div className="picture">
    <img src={image9} className="image3" alt="...." />
    </div>
    <p>$44.99</p>
    <h2>KingSo Round Table</h2>
      <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
  </div>

  <div className="text">
    <div className="picture">
    <img src={image10} className="image4" alt="...." />
    </div>
    <p>$120 <strike>$350</strike></p>
    <h2>Porthos Dining Chair</h2>
      <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
  </div>

  <div className="text">
    <div className="picture">
    <img src={image11} className="image5" alt="...." />
    </div>
    <p>$31.49</p>
    <h2>Trade Folding Stool</h2>
      <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
  </div>

  <div className="text">
    <div className="picture">
    <img src={image12} className="image6" alt="...." />
    </div>
    <p>$120 <strike>$350</strike></p>
    <h2>Rivet Accent Chair</h2>
      <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
  </div>

  <div className="text">
    <div className="picture">
    <img src={image13} className="image7" alt="...." cd my/>
    </div>
    <p>$110 <strike>$350</strike></p>
    <h2>Armen Living Chair</h2>
      <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
  </div>

  <div className="text">
    <div className="picture">
    <img src={image14} className="image8" alt="...." />
    </div>
    <p>$120 <strike>$350</strike></p>
    <h2>Knight Chair</h2>
      <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
  </div>
  </div>

  </>
 )
}
