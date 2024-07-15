import React from 'react';
import image23 from '../components/image/doctor2.jpeg';

export const Appointment = () => {
  return (
    <>
      <div className='w-auto h-20'>
        <div className="bg-blue-200 p-4 text-center">
          MEDICAL
        </div>
      </div>

      {/* 2nd part */}
      <div className="flex justify-between items-center p-4">
        <div className="flex space-x-4">
          <div>Home</div>
          <div>About us</div>
          <div>Services</div>
          <div>Doctors</div>
          <div>News</div>
          <div className='text-white-800 text-sm'>Contact</div>
        </div>
        <div className="flex items-center space-x-2">
          <div>&#128270;</div>
          <button className="bg-blue-100 text-white px-9 py-2 rounded">Appointment</button>
        </div>
      </div>
      
{/* 3rd part */}
<div>
  Home/Appointment
</div>
<div className='text-blue'>
  Book an Appointment
</div>

{/* 4th part */}
<h2>Book an Appointment</h2>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
Quisque placerat scelerisque tortor ornare ornare. Convallis <br/>
felis vitae tortor augue. Velit nascetur proin massa in. <br/>
Consequat faucibus porttitor enim et.
</p>

<div className='bg-blue'>
  <button>Name</button>
  <button>Gender &or;</button>
  <button>Email</button>
  <button>Phone</button>
  <button>Date &or;</button>
  <button>Time &or;</button>
  <button>Doctor &or;</button>
  <button>Department &or;</button>
  <button>Message</button>
</div>
<button>SUBMIT</button>

<div>
  <h3>Shedule hours</h3>
  <pre>
    Monday    -  09.00 AM - 07.00 PM
    Tuesday   -  09.00 AM - 07.00 PM
    Wednesday -  09.00 AM - 07.00 PM
    Thursday  -  09.00 AM - 07.00 PM
    Friday    -  09.00 AM - 07.00 PM
    Saturday  -  09.00 AM - 07.00 PM
    Sunday    -  Closed
   </pre>
  <hr/>
</div>

{/* 5th part */}
<div>
<img src={image23} className="img1" alt="Map" />
</div>

<div>
       
            logo: contact1,
            h1: 'Emergency',
            p1: '(237) 681-812-255',
            p2: '(237) 666-331-894',
            color: '#BFD2F8',
            text: '#1F2B6C'
</div>
    <div>    
       
            logo: contact2,
            h1: 'LOCATION',
            p1: '0123 Some place',
            p2: '9876 Some country',
            color: '#1F2B6C',
            text: '#BFD2F8'
        </div>
       <div>
            logo: contact3,
            h1: 'EMAIL',
            p1: 'fildineeesoe@gmil.com',
            p2: 'myebstudios@gmail.com',
            color: '#BFD2F8',
            text: '#1F2B6C'
        </div>
        <div>
            logo: contact4,
            h1: 'WORKING HOURS',
            p1: 'Mon-Sat 09:00-20:00',
            p2: 'Sunday Emergency only',
            color: '#BFD2F8',
            text: '#1F2B6C'
</div>


<div>
  <div>
    <h1>MEDDICAL</h1>
    <pre>
    Leading the Way in Medical
    Execellence, Trusted Care.
    </pre>
  </div>
</div>
    </>
  );
}
