// import React from 'react';
import { useState } from 'react';

export const Usestatehook = () => {
 const [count, setCount] = useState[0];
//  let value = 0;
//  const handleIncrement = () => {
//     value = value +1;
//     console.log("value=>", value)

  return (
<div className='d-flex flex-row m-5'>
<button type="button" class="btn btn-success" onClick={()=>{setCount(count+1)}}>Increment</button>

<h1>{count}</h1>
<button type="button" class="btn btn-danger" onClick={()=>{setCount(count+1)}}>Decrement</button>
{/* <button type="button" class="btn btn-primary m-4" onClick={handleIncrement}>{value}</button> */}
 </div>
)
}
