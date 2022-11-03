import React,{useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {add,remove} from '../store/counterSlice';
import Child1 from './Child1';
import Child2 from './Child2';



function Parent() {
    const dispatch = useDispatch();
    let val = useSelector((state)=>state.counter)
    console.log("val from store",val);
    const addValue=()=>{
        dispatch(add())
    }
    const minusValue=()=>{
        dispatch(remove(1))
    }
    return (
        <div className='bg-warning m-2 p-2'>
            <h1>Parent Comp</h1>
            <button onClick={addValue} className='btn btn-primary'>Add</button>
            {val}
            <button onClick={minusValue} className='btn btn-danger'>Minus</button>
            <hr></hr>
            <Child1></Child1>
        </div>
  )
}

export default Parent
