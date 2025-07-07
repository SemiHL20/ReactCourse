import logo from './logo.svg';
import './App.css';
import { StyledButton } from './styled';
import { StyledLongButton } from './styled2';
import { StyledBox } from './styled3';

function App() {
  return (
    <div className="App">
      <StyledButton entrar={true}>Entrar</StyledButton>
      <StyledButton entrar={false}>Salir</StyledButton>
      <StyledLongButton>Salir</StyledLongButton>
      <StyledBox>Box</StyledBox>
    </div>
  );
}

export default App;
