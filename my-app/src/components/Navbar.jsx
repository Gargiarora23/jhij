import React from 'react';

import image1 from '../components/image/chair.png';
import image2 from '../components/image/table.png';
import image3 from '../components/image/lamp.png';
import image4 from '../components/image/lll.png';
import image5 from '../components/image/chhhai.png';
import image6 from '../components/image/plant.png';
import image7 from '../components/image/image1.png';
import image8 from '../components/image/image2.png';
import image9 from '../components/image/image3.png';
import image10 from '../components/image/image4.png';
import image11 from '../components/image/image5.png';
import image12 from '../components/image/image6.png';
import image13 from '../components/image/image7.png';
import image14 from '../components/image/image8.png';
import image15 from '../components/image/pic.png';
import image16 from '../components/image/sofa.png';
import image17 from '../components/image/girll.png';

import './Nav.css';

export const Navbar = () => {
  return (
    <>
      <div className='ryt'>
        <div className='right'>Brainwave.io</div>
        <div className='menu'>
          <div className='items'>Demos</div>
          <div className='items'>Pages</div>
          <div className='items'>Support</div>
          <div className='items'>Contact</div>
          <div className='items'>&#xf07a;</div>
         </div>
      </div>

       <div className='txt'>
       
         <div className='tt'>
          We minimise your<br />
           waste in every step of<br />
           the process.
         </div>
       </div>

      
         <div className="inner">
           <div className="card card1">
             <h3>Living Room</h3>
             <p>23 items</p>
            <img src={image1} className="img1" alt="Living Room" />
          </div>

           <div className="card card2">
             <h3>Dining Room</h3>
             <p>36 items</p>
             <img src={image2} className="img2" alt="Dining Room" />
           </div>

           <div className="card card3">
             <h3>Bed Room</h3>
             <p>17 items</p>
             <img src={image3} className="img3" alt="Bed Room" />
           </div>

           <div className="card card4">
             <h3>Kitchen</h3>
             <p>11 items</p>
            <img src={image4} className="img4" alt="Kitchen" />
            </div>

           <div className="card card5">
             <h3>Office</h3>
            <p>09 items</p>
            <img src={image5} className="img5" alt="Office" />
          </div>

          <div className="card card6">
          <h3>Outdoor</h3>
            <p>45 items</p>
            <img src={image6} className="img6" alt="Outdoor" />
          </div>
        </div>
      

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
  
               <h1>CHECK ALL PRODUCTS</h1>

<div className='background'>
  <div className='set'>
<img src={image15} className="pic" alt="...." />
<img src={image16} className="sofa" alt="...." />
</div>
<div className='slide'>
<h6>
  Track your progress with <br/>
  our advanced site.
 </h6>
<p>We share common trends and strategies for<br/>
   improving your rental income and making sure<br/>
    you stay in high demand.</p>
   
<h3>Start shopping -></h3>    
</div>
</div>

<div className='twoslide'>
  <div className='two'>
  <p>&#11088;&#11088;&#11088;&#11088;&#11088;</p>
<p>
“OMG! I cannot believe that I have got a brand<br/>
 new room after getting your services. It was super<br/>
  easy to order and get started.”
</p>
</div>
<img src={image17} className="gir" alt="...." />

</div>

<div className='thirdslide'>
  <div className='third'>
  <p>Ready to have a<br/>
    decorated lifestyle?
  </p>
  <button className='btn'>Start Shopping</button>
</div>
</div>
  </>
  );
}
