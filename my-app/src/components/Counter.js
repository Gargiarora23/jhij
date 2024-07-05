import React, { useState } from 'react';
export const Counter = (props) =>
{
    // const [value,setCount] = useState()
    return(
        <div className='d-flex'>
            <div className='btn btn-success' onClick={props.func2}>-</div>
                {/* <input type='number' className='flex justify-center'></input> */}
            <div className='btn btn-success' onClick={props.func1}> + </div>
            <div>{props.count}</div>
        </div>
        
    )
}

// export const Counter = (props) => {
//     const [count, setCount] = useState(0);

//     const handleIncrement = () => {
//         setCount(count + 1);
//     };
//     const [counta, setCounta] = useState(0);

//     const handleDecrement = ()=> 
//     {
//         setCount (count -1);
//     };
//         // props.onClick();
    

//     return (
//         <div className='d-flex flex-row m-5'>
//             <button type="button" className="btn btn-success m-4" onClick={handleIncrement}>{props.handleIncrement}</button>
//             <h1>{count}</h1>
//             <button type="button" className="btn btn-danger m-4" onClick={handleDecrement}>{props.handleDecrement}</button>
//         </div>
//     );
// };