import React from 'react'
import image from '../components/image/pic1.jpeg'
import image1 from '../components/image/pic2.jpeg'
import image2 from '../components/image/pic3.jpeg'
import image3 from '../components/image/pic4.jpeg'
import image4 from '../components/image/pic5.jpeg'
import image5 from '../components/image/pic6.jpeg'
import image6 from '../components/image/pic7.jpeg'
import image7 from '../components/image/pic8.jpeg'
import image8 from '../components/image/pic9.jpeg'
import image9 from '../components/image/pic10.jpeg'
import image10 from '../components/image/pic11.jpeg'
import image11 from '../components/image/pic12.jpeg'
import './Boot.css';

export const Bootstrap = () => 
  {
  return (

<>
<div>
<button type="button" className='A'>MIEEE MEMORIES!!.....</button>
</div>
<div className='B'>
<img src={image} className="w-10 p-3"/>
<img src={image1} className="w-10 p-3"/>
<img src={image2} className="w-10 p-3"/>
<img src={image3} className="w-10 p-3"/>
<img src={image4} className="w-10 p-3"/>
<img src={image5} className="w-10 p-3"/>
<img src={image6} className="w-10 p-3"/>
<img src={image7} className="w-10 p-3"/>
<img src={image8} className="w-10 p-3"/>
<img src={image9} className="w-10 p-3"/>
<img src={image10} className="w-10 p-3"/>
<img src={image11} className="w-13 p-3"/>

</div>
</>
  )
}
