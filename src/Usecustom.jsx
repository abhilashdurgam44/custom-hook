
 import React, { useState } from 'react'

 
 const Usecustom = (intialvalue=0) => {
    const [count, setCount] = useState(intialvalue)
     
    const Incriment=()=>{
       setCount(count+1)
    }

     const Decrement=()=>{
      setCount(count-1)
     }

     return [count,Incriment,Decrement];
 }
 
 export default Usecustom