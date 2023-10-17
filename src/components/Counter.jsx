import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, increment_by_amount } from '../redux/counterSlice'

function Counter() {
    // to access store need a hook useSelector()
    // useSelector((store)=>store.reducer_name.state_name)
    const count=useSelector((state)=>state.counter.count)

    
    //  to access action we need hook useDispatch()
    const dispatch=useDispatch()

    // local stet to store the user enterded value to increment
    const[amount,setAmount]=useState("")
    
    // fn fr increment by amount types
    const handle_incrmnt_by_amount=()=>{
        // alert("handle increment clicked");
        // alert(amount);
        if(amount==""){
            alert("Please Provide the Amount")
        }else{
            // dispatch
            // updating state in store
            // increment_by_amount() from slice
            dispatch(increment_by_amount(Number(amount)))
        }
    }

  return (
    <div className='w-100 d-flex justify-content-center align-items-center' style={{height:"70vh"}}>
      <div className='d-flex justify-content-center align-items-center border rounded p-5 w-25 flex-column' >
        <h1 className='fs-100'>{count}</h1>
        <div className='d-flex justify-content-between mt-5 w-100'>
            <button className='btn btn-warning' onClick={()=>dispatch(decrement())}>Decrement</button>
            <button className='btn btn-danger' onClick={()=>dispatch(reset())}>Reset</button>
            <button className='btn btn-success' onClick={()=>dispatch(increment())}>Increment</button>
        </div>
        <div className='d-flex mt-5 justify-content-around w-100'>
            <input type="text" className="form-control" style={{width:"30%"}} placeholder='Amount' onChange={(e)=>{setAmount(e.target.value)}}></input>
            <button onClick={handle_incrmnt_by_amount} className='btn btn-primary'>Increment By Amount</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
