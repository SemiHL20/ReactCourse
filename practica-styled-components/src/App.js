import {StyledButton} from './components/CustomButton';
import './App.css';
import {useState, useEffect} from 'react';
import phrases from './data/phrases.json';

function App() {

  // Estado para el índice actual, empieza en 0 (la primera posición)
  const [index, setIndex] = useState(0);

  useEffect(() => {
    console.log("Estás leyendo en párrafo " + (index + 1) + " de " + phrases.length);
  }, [index]);

  useEffect(() => {
    const randomColor = `rgb(
      ${Math.floor(Math.random() * 50)}, 
      ${Math.floor(Math.random() * 50)}, 
      ${Math.floor(Math.random() * 50)})
    `;
    document.body.style.backgroundColor = randomColor;
  }, [index]);

  const nextPhrase = () => {
    if (index === (phrases.length - 1)) {
      // Si ya estamos en la última frase, no hacer nada
      return;
    } else {
      setIndex(index+1);
    }
    
  };

  const previousPhrase = () => {
    if (index === 0) {
      // Si ya estamos en la primera frase, no hacer nada
      return;
    } else {
      setIndex(index-1);
    }
  };

  return (
    <div className="App">
      <h1>Memoriza!</h1>
      <p style={{marginTop: 200, fontSize: 22}}>{phrases[index]}</p>
      <p style={{marginTop: 20, fontSize: 16}}>Párrafo {index + 1} de {phrases.length}</p>
      {/* Botones para navegar entre frases */}
      <div className='button-container'>
        <StyledButton onClick={previousPhrase}>Anterior</StyledButton>
        <StyledButton onClick={nextPhrase}>Siguiente</StyledButton>
      </div>

    </div>
  );
}

export default App;
