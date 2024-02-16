
 import React from 'react'
 import Usecustom from './Usecustom'
 import './Child1.css'
 const Child1 = () => {
    const [count,Incriment,Decrement]=Usecustom(10);
   return (
     <div>
        <h1>count:{count}</h1>
        <button onClick={Incriment}>Incriment</button>
       <button onClick={Decrement}>Decrement</button>

     </div>
   )
 }
 
 export default Child1;