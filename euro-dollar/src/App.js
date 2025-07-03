import { useRef, useState, useEffect } from 'react';
import backgroundImage from './assets/elephants.jpg';
import './App.css';

function App() {

  const [valorCambio, setValorCambio] = useState(null); 
  const eurosRef = useRef();
  const resultRef = useRef();

  useEffect(() => {
    const llamaApi = async () => {
      try {
        const response = await fetch('https://v6.exchangerate-api.com/v6/21564fc91e7da60a7154fb2e/latest/EUR');
        const data = await response.json();
        console.log(data);
        setValorCambio(data.conversion_rates.USD);
      } catch (error) {
        console.error("Error fetching exchange rate:", error);
      }
    }
    llamaApi();
  },[]);

  function calculate() {
    const euros = parseFloat(eurosRef.current.value);
    if (isNaN(euros) || euros <= 0) {
      resultRef.current.innerHTML = "Please enter a valid amount in Euros.";
      return;
    }
    if (valorCambio === null) {
      resultRef.current.innerHTML = "Loading exchange rate...";
      return;
    }

    const dollars = (euros * valorCambio).toFixed(2) + "$"; 
    resultRef.current.innerHTML = dollars;
  }


  return (
    <div className='center' style={{ 
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
      }}>
      <h1>Euro to Dollar Converter</h1>
      <div>
        <input type="number" ref={eurosRef} placeholder="Enter amount in Euros" />
        <button onClick={calculate}>Convert</button>
      </div>
      <div className="result" ref={resultRef}></div>
      <p>Conversion Rate: 1 Euro = {valorCambio + " USD"}</p>
      <p>Note: Data retrieved from ExchangeRate-API.</p>
    </div>
  );
}

export default App;
