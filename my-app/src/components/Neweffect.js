import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

  
function Neweffect() 
{
    const [count, setCount] = useState(0);
 
    useEffect(() => 
        {
        document.title = `clicked ${count} times`;
        }, 
        [count]);
 
    return (
        <div className='btn btn-success'>
            <button onClick={() => setCount(count + 1)}>
                Click {count} times{" "}
            </button>
        </div>
    );
}
export default Neweffect;
  
