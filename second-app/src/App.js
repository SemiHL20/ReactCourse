import './App.css';

function App() {
  
    const elemento = <h1 className='centrar-titulo'>Hola mundo</h1>
    const resultado = suma(5, 3);
    return <div><div>{elemento}</div><div>{resultado}</div></div>
}

function suma(a, b) {
    return a + b;
}

export default App;
