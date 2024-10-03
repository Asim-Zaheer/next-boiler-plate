"use client"
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '@/_redux/slices/testSlice';

const tester = () => {
    const dispatch=useDispatch()
    const counter = useSelector((state)=>state.counter.value)
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-red-500">Counter: {counter}</h1>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded" 
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
    </div>
  )
}

export default tester
