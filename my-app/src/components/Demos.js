import React from 'react'
import './Nav.css';
import image1 from '../components/image/chair.png';
import image2 from '../components/image/table.png';
import image3 from '../components/image/lamp.png';
import image4 from '../components/image/lll.png';
import image5 from '../components/image/chhhai.png';
import image6 from '../components/image/plant.png';

export const Demos = () => {
  return (
<>

<div className='txt'>
        {/* <img src={image} className='img'/> */}
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
      
      </>
  )
}