import {StyledButton} from './components/CustomButton';
import './App.css';
import {useState} from 'react';
import phrases from './data/phrases.json';

function App() {

  // Estado para el índice actual, empieza en 0 (la primera posición)
  const [index, setIndex] = useState(0);

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
      <p style={{marginTop: 200}}>{phrases[index]}</p>
      <div className='button-container'>
        <StyledButton onClick={previousPhrase}>Anterior</StyledButton>
        <StyledButton onClick={nextPhrase}>Siguiente</StyledButton>
      </div>

    </div>
  );
}

export default App;
