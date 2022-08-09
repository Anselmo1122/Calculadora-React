import React from 'react';
import '../hojas-de-estilo/Boton.css'

function Boton (props) {

  /* Todo lo que esté dentro de la etiqueta de apertura 
    y de cierre de "Boton" se va a considerar como 
    "chidren" y se pude usar en el componente.*/

  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '0');
  };

  return (
    <div 
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );

}

export default Boton;