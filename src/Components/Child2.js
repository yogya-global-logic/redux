import React from 'react'

import {useDispatch, useSelector} from 'react-redux';

import {add,remove,setZero} from '../store/counterSlice';

function Child2() {
    let val = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
    const setValueZero=()=>{
        dispatch(setZero())
    } 
  return (
    <div className='w-50 m-auto bg-light'>
      <h1>Child 2 </h1>
      <h2>Value = {val}</h2>
      <button onClick={setValueZero} className='btn btn-success'>Set to Zero</button>
    </div>
  )
}

export default Child2
