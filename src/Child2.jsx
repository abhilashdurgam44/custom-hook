
 import React from 'react'
 import Usecustom from './Usecustom'
 
 const Child2 = () => {
    const [count,Incriment,Decrement]=Usecustom();
   return (
     <div>
          <h1>count:{count}</h1>
     <button onClick={Incriment}>Incriment</button>
     <button onClick={Decrement}>Decrement</button>

     </div>
   )
 }
 
 export default Child2