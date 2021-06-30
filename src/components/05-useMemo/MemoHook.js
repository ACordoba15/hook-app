import React, { useMemo, useState } from 'react'
import { useCounter } from '../04-useCounter/hooks/useCounter'
import '../02-useEffect/effects.css';

export const MemoHook = () => {
  const {counter, increment} = useCounter(10);
  const [show, setShow] = useState(true);

  const procesoPesado = (iteraciones) => {
    for (let i = 0 ; i < iteraciones; i++){
      console.log("Haciendo iteraciones");
    }

    return `${iteraciones} iteraciones realizadas`;
  }

  // Lo que viene a resolver este hook useMemo, es que memorice un valor, y si este valor no cambia mientra se ejecuten las funcionalidades en pantalla, no se volverá a ejecutar la función del counter.

  const memoProcesoPesado =  useMemo( 
    () => procesoPesado(counter), [counter])

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>Counter: { counter }</h3>
      <hr/>

      <p> {memoProcesoPesado}</p>

      {/* <p> {procesoPesado(counter)}</p> */}

      <button className="btn btn-primary"
        onClick={increment}
      >
        +1
      </button>

      <button className="btn btn-primary"
        onClick={ () => { setShow(!show); }}
      >
        Show/hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
