import './App.css';
import React, {useState} from 'react';

function App() {
    //Definir el estado para almacear el resultado de la suma
    const [resultado, setResultado] = useState(null);
  
    const elemento = <h1 className='centrar-titulo'>Hola mundo</h1>
    const elemento2 = <h3>{suma(5, 3)}{/*Para mostrarlo directamente*/}</h3>

    const botonPulsado = () => {
        const resultadoSuma = suma(5, 3);
        setResultado(resultadoSuma);
    };

    return <div>
        <button onClick={botonPulsado} style={{marginTop: "10px", marginLeft: "10px"}}>Suma</button>
        <div>{elemento}</div>
        {/*<div>{elemento2}</div>*/}
        <div style={{marginLeft: "10px"}}>{resultado!=null && <h3>El resultado es: {resultado}</h3>}</div>
    </div>
}

// Función para manejar el evento del botón y mostrar resultado en un alert, 
// ahora no funciona porque estamos utilizando el estado de React
const botonPulsado = () => {
    alert(suma(5, 3));
}

function suma(a, b) {
    return a + b;
}

export default App;
