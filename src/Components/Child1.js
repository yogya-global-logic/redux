import React from 'react'

import {useDispatch, useSelector} from 'react-redux';

import {add,remove} from '../store/counterSlice';
import { toggle } from '../store/themeSlice';

import Child2 from './Child2';

function Child1() {
    const dispatch = useDispatch();
    let val = useSelector((state)=>state.counter);
    // let theme = useSelector((state)=>state.theme);
    const themechanger = ()=>{
        dispatch(toggle())
    }
    return (
        <div className='bg-info m-auto w-75'>
        <h1>Child 1 </h1>
        <h2>Value = {val}</h2>
        <button onClick={themechanger} className='btn btn-dark text-light'>Toggle Theme</button>
        <Child2></Child2>
        </div>
    )
}

export default Child1
