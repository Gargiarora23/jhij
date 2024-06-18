import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const ApiCall = () => {
const [data, setData] = useState([]);

useEffect(()=>{
    axios.get("https://fakestoreapi.com/products").then((res)=>{
        console.log("response=>", res.data);
        setData(res.data);
    })
},[])

  return (
    <div>
      
       {data?.map((item ,index)=>{
        console.log("Title=>", item)
        return (
            <>
            <div>{item.title}</div>
            </>
        )
       })
      
       
       }
       
    </div>
  )
}
