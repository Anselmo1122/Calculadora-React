import './App.css';
import Boton from './componentes/Boton'
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear'
import { useState } from 'react';
import { evaluate } from 'mathjs'
 
function App() {

  const [input, setInput] = useState('');

  const agregrarInput =val=> {
    setInput(input + val);
  }

  const calcularInput =()=> {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar una operación.");
    }
  }

  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregrarInput}>1</Boton>
          <Boton manejarClic={agregrarInput}>2</Boton>
          <Boton manejarClic={agregrarInput}>3</Boton>
          <Boton manejarClic={agregrarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregrarInput}>4</Boton>
          <Boton manejarClic={agregrarInput}>5</Boton>
          <Boton manejarClic={agregrarInput}>6</Boton>
          <Boton manejarClic={agregrarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregrarInput}>7</Boton>
          <Boton manejarClic={agregrarInput}>8</Boton>
          <Boton manejarClic={agregrarInput}>9</Boton>
          <Boton manejarClic={agregrarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularInput}>=</Boton>
          <Boton manejarClic={agregrarInput}>0</Boton>
          <Boton manejarClic={agregrarInput}>.</Boton>
          <Boton manejarClic={agregrarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={()=>setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
