import React from 'react'

export const Prps = (props) =>
{
    console.log("props data=>", props.data)
     
  return (
    <div className='m-5 d-flex justify-content-between'>
        <div>Logo</div>
        <div>Contact us</div>
        <div>Home</div>
        <div>About</div>
        <div>T&C</div>
    </div>
  )
}
