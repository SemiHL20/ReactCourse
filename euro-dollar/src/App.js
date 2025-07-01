import { useRef } from 'react';

import './App.css';

function App() {

  const eurosRef = useRef();
  const resultRef = useRef();

  function calculate() {
    const euros = eurosRef.current.value;
    const dollars = (euros * 1.18).toFixed(2) + "$"; // Assuming 1 Euro = 1.18 Dollars
    resultRef.current.innerHTML = dollars;
  }


  return (
    <div className='center'>
      <h1>Euro to Dollar Converter</h1>
      <div>
        <input type="number" ref={eurosRef} placeholder="Enter amount in Euros" />
        <button onClick={calculate}>Convert</button>
      </div>
      <div className="result" ref={resultRef}></div>
      <p>Exchange rate: 1 Euro = 1.18 Dollars</p>
      <p>Note: This is a static conversion rate for demonstration purposes.</p>
    </div>
  );
}

export default App;
