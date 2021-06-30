import React, { useRef } from 'react'
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
  
  // hace la referencia a algun elemento, en este caso al input
  const inputRef = useRef();

  // le hará focus y seleccionará el texto.
  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  }

  return (
    <div>
      <h1> FocusScreen</h1>
      <hr/>

      <input
        ref = {inputRef}
        className="form-control"
        placeholder="Nombre"
      />
      
      <button className="btn btn-outline-primary"
        onClick={ handleClick }
      >
        Focus
      </button>
    </div>
  )
}
