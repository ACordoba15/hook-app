import React from 'react'
import { useCounter } from './hooks/useCounter';
import '../02-useEffect/effects.css';


export const CounterCustomHook = () => {
  const {state, increment, decrement} = useCounter();

  return (
    <>
      <h1>Counter Custom Hook: {state}</h1>
      <hr/>

      <button onClick={increment} className="btn btn-primary">+1</button>

      <button onClick={decrement} className="btn btn-primary">-1</button>
    </>
  )
}
