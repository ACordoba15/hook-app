import React, { useCallback, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';
import '../02-useEffect/effects.css';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  // Si se pasa esta función así como está se seguirá renderizando el componente increment
  // const increment = () => {
  //   setCounter(counter + 1);
  // }

  // El callback funciona cuando se ocupa mandar una función a un componente hijo.
  // Sirve para pasar una versión memorizada de la función,

  // Se envía setCounter como segundo parámetro 

  // Pasarlo de esta forma no resolvería el problema ya que se tiene la dependencia del counter,
  // por lo que haría lo mismo que el ejemplo pasado
  
  // Si se enviara sin el useCallback se genera una nueva versión del componente.

  // const increment = useCallback( () => {
  //   setCounter(counter + 1);
  // }, [setCounter])

  // La forma de resolver es quitar la dependenci del counter "c => c" 

  const increment = useCallback( () => {
    setCounter(c => c + 1);
  }, [setCounter])

  return (
    <div>
      <h1> UseCallback Hook {counter}</h1>
      <hr/>
      
      <ShowIncrement increment={increment} />

    </div>
  )
}
