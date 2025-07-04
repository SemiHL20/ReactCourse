import logo from './logo.svg';
import './App.css';
import Form from './components/Form.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='padding' style={{color: 'yellow'}}>Descuentos del 15% para servicios de 7+ días</p>
        <Form/>
      </header>
    </div>
  );
}

export default App;
