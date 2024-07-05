import React from 'react'

import image15 from '../components/image/pic.png';
import image16 from '../components/image/sofa.png';
import image17 from '../components/image/girll.png';

export const Support = () => 
    {
  return (
   <>    <h1>CHECK ALL PRODUCTS</h1>

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
  
