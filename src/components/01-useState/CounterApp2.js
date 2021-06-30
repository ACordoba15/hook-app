import React, { useState } from 'react';
import './counter.css';

export const CounterApp2 = () => {

  const [counter, setCounter] = useState({ counter1 :50, counter2: 100});

  const {counter1, counter2} = counter;
  return (
    <>
      <h1>Counter1: { counter1 }</h1>
      <h1>Counter2: { counter2 }</h1>
      <hr/>

      <button 
        className="btn btn-primary"
        onClick={ () => {
          setCounter({ ...counter, counter1 : counter1 + 1});
          //setCounter({ counter1 : counter1 + 1, counter2 : counter2 });
        }}
      > +1 </button>
      
      <button 
        className="btn btn-primary"
        onClick={ () => { // operador spread 
          setCounter({ ...counter, counter2 : counter2 - 1
          });
        }}
      > -1 </button>
    </>
  )
}
