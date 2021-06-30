import React, { useEffect, useState } from 'react'
import './effects.css'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '', email: ''
  })

  const {name, email} = formState;

  // Cada que se detecte un cambio se ejecutará el useEffect
  // Lo que se quiere es que se ejecute ya sea una vez, para esto se envía como segundo parametro una array vacío
  // o bien, cuando se detecte en el state, por ejemplo el nombre.

  // useEffect( () => {
  //   console.log('hola mundo');
  // });
  
  useEffect( () => {
    console.log('hola mundo');
  }, []);

  useEffect( () => {
    console.log(`cambió el nombre: ${name}`);
  }, [name]);

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  }

  return (
    <>
      <h1> useEffect</h1>  
      <hr/>

      <div className = "form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
          autoComplete="off"
          value={name}
          onChange={ handleInputChange }
        />
      </div>

      <div className = "form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Email"
          autoComplete="off"
          value={email}
          onChange={ handleInputChange }
        />
      </div>
    </>
  )
}
