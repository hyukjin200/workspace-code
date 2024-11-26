import React, { useState } from 'react'

export default function ContentUseState() {
  console.log('component update!!!!');
  /*
  const returnArray=useState(0);
  const count=returnArray[0];
  const setCount=returnArray[1];
  */
  const [count,setCount]=useState(0);
  const onIncrease=()=>{
    setCount(count+1);
 }
  const onDecrease=()=>{
    setCount(count-1);
 }
  
  return (
    <div className='content'>
      <h3>useState[Hook]</h3>
     
      <h4>{count}</h4>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  )
}
