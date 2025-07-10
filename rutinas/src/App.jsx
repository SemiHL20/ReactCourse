import rutinas from './data/rutinas';
import './App.css'
import { useEffect, useState } from 'react';
import {Row, ImagenSeleccionada} from './styled.js';

function App() {
  const [trabajoActual, setTrabajoActual] = useState(0);
  const [ejercicioActual, setEjercicioActual] = useState(0);

  const trabajo = rutinas[trabajoActual];

  const [contador, setContador] = useState(5);
  const [crono, setCrono] = useState(false);

  useEffect(() => {

    if(!crono) return;   // Si el cronómetro no está activo, no hacemos nada
    const temporizador = setTimeout(() => {   // Usamos setTimeout para crear un temporizador
      if(contador > 0) setContador((prev)=>prev - 1)
      else {
        if(ejercicioActual < trabajo.rutina.length -1){  // Si no hemos llegado al último ejercicio
          setEjercicioActual((prev)=>prev + 1);
          setContador(5);
        } else {  // Si hemos llegado al último ejercicio de la rutina
          if(trabajoActual < rutinas.length - 1){ // Si no hemos llegado al último trabajo
            setTrabajoActual((prev)=>prev + 1);
            setEjercicioActual(0);
            setContador(5);
          } else {
            setCrono(false); // Detenemos el cronómetro si hemos llegado al final de las rutinas
            alert('¡Rutina completada!');
          }
        }
      }
    },1000);
    // Limpieza: si `crono` cambia o se desmonta, cancelamos el timeout
    return () => clearTimeout(temporizador);

  },[crono, contador, trabajoActual, ejercicioActual]);

  return (
    <div className='App'>
      <h1>Rutinas</h1>
      <div className='selector'>
        <button onClick={() => setTrabajoActual((prev) => (prev > 0 ? prev - 1 : rutinas.length - 1))}>Anterior</button>
        <h2>{trabajo.titulo}</h2>
        <button onClick={() => setTrabajoActual((prev) => (prev + 1) % rutinas.length)}>Siguiente</button> {/*(prev + 1) % rutinas.length => rotación circular*/}
      </div>
      <div className='cronometro'>
        <button className='Start-button' onClick={() => setCrono(!crono)}> {crono ? 'Pause' : 'Start'}</button>
        <button className='Reset-button' onClick={() => {
          setCrono(false);
          setContador(5);
          setTrabajoActual(0);
          setEjercicioActual(0);
        }}>Reset</button>
      </div>
      
      <h3>Contador: {contador} segundos</h3>

      <Row>
        {trabajo.rutina.map((ejercicio, indice) => 
          <img 
            src={ejercicio.imagen} 
            onClick={()=>{setEjercicioActual(indice); setContador(5)}}>
          </img>)
        }
      </Row>
      <ImagenSeleccionada>
        <img 
          src={trabajo.rutina[ejercicioActual].imagen} 
          alt={trabajo.rutina[ejercicioActual].nombre} 
        />
        <div className='info'>
          <h3>{trabajo.rutina[ejercicioActual].nombre}</h3>
          <p>Repeticiones: {trabajo.rutina[ejercicioActual].repeticiones}</p>
        </div>
      </ImagenSeleccionada>
    </div>
  )
}
export default App
