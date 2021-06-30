import React from 'react';


// Se utiliza react.memo para que memorice la función mientras que los argumentos no cambien.
export const ShowIncrement = React.memo(({increment}) => {
  console.log('Show increment');
  return (
    <button
      className = "btn btn-primary"
      onClick={ () => {
        increment();
      }}
    >
      +1
    </button>
  )
})
