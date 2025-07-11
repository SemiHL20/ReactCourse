import { useState, useEffect } from 'react'
import './App.css'
import preguntas from './data/preguntas'
import { Row, TextoPregunta, Box } from './styled';

//Función para desordenar las preguntas (algoritmo Fisher-Yates)
const mezclarPreguntas = (array) => {
  const copia = [...array]; //spread operator hace copia sin referenciar el original

  for (let i=copia.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1)); //en j guardamos un valor aleatório comprendido en los índices del array
    [copia[i], copia[j]] = [copia[j], copia[i]] //swap
  }

  return copia;
}

function App() {

  const [preguntasMezcladas, setPreguntasMezcladas] = useState([]); 
  const [preguntaActual, setPreguntaActual] = useState(0);

  //Mezcla las preguntas al cargar la App
  useEffect(()=>{
    setPreguntasMezcladas(mezclarPreguntas(preguntas));
  },[]);

  if(preguntasMezcladas.length==0) return <div>Cargando...</div>

  const pregunta = preguntasMezcladas[preguntaActual];
  const respuestas = pregunta.respuestas;

  const respuestaPulsada = (correcta) => 
    setPreguntaActual(correcta ? 
      ((preguntaActual < preguntasMezcladas.length - 1) ? preguntaActual + 1 : 0)
      : preguntaActual> 0 ? preguntaActual - 1 : 0);
  
  const imagenesCategoría = {
    Arte: 'img/art.jpg',
    Ciencia: 'img/cien.jpg',
    Deporte: 'img/dep.jpg',
    Geografia: 'img/geo.jpg',
    Historia: 'img/hist.jpg',
    Naturaleza: 'img/nat.jpg',
  }

  const imagenCategoria = imagenesCategoría[pregunta.categoria]

  return (
    <div>
      <h1>TriviApp</h1>
      <h2>Categoría: {pregunta.categoria}</h2>
      <Row>
        <TextoPregunta>{pregunta.pregunta}</TextoPregunta>
        <br />
        <img src={imagenCategoria} alt={pregunta.categoria} style={{ width: '300px', marginLeft: 50}} />
        <Box>
          {respuestas.map(obj => <p><button onClick={()=>respuestaPulsada(obj.correcta)}>O</button>{obj.respuesta}</p>)}
        </Box>
      </Row>
      <p style={{marginTop: 40, fontWeight: 'bold'}}>Pregunta {preguntaActual + 1} de {preguntas.length}</p>
    </div>
    
  )
}

export default App
