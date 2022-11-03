import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

function SecondComp() {
    let val = useSelector((state)=>state.counter);
    let theme = useSelector((state)=>state.theme);
  return (
    <div className={theme?'bg-dark text-light border border-info border-5':'border-5 bg-light text-dark border border-danger'}>
    {/* <div className='bg-dark text-light'> */}
      <h1>SecondComp {val}</h1>
    </div>
  )
}

export default SecondComp;
