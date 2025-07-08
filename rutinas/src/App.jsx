import rutinas from './data/rutinas';
import './App.css'
import { useState } from 'react';
import {Row, ImagenSeleccionada} from './styled.js';

function App() {
  const [trabajoActual, setTrabajoActual] = useState(0);
  const [ejercicioActual, setEjercicioActual] = useState(0);

  const trabajo = rutinas[trabajoActual];

  return (
    <div className='App'>
      <h1>Rutinas</h1>
      <h2>{trabajo.titulo}</h2>
      <Row>
        {trabajo.rutina.map((ejercicio, indice) => <img src={ejercicio.imagen} onClick={()=>setEjercicioActual(indice)}></img>)}
      </Row>
      <ImagenSeleccionada>
        <img 
          src={trabajo.rutina[ejercicioActual].imagen} 
          alt={trabajo.rutina[ejercicioActual].nombre} 
        />
      </ImagenSeleccionada> 
    </div>
  )
}
export default App
