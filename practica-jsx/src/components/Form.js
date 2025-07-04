import React, { useState, useEffect } from 'react';
import '../App.css';

function Form() {

    function calculateResult(props) {

        var { selectedService, numberOfDays } = props;
        const valorNoche = 74; // Cost per night in hotel
        const valorCoche = 45; // Cost per day for car rental

        const hasDiscount = numberOfDays >= 7; // Check if the number of days qualifies for a discount
        const discountRate = hasDiscount ? 0.85 : 1; // Apply a 15% discount if applicable

        if (isNaN(numberOfDays) || numberOfDays <= 0) {
            numberOfDays = 0; // Ensure number of days is a valid positive number
        }

        if (selectedService === 1) {
            return `Coste estancia hotel:  ${valorNoche * numberOfDays * discountRate}€`;
        } else {
            return `Coste alquiler coche: ${valorCoche * numberOfDays * discountRate}€`;
        } 
    }

    var [selectedService, setSelectedService] = useState(1); // Default value for selected service
    var [numberOfDays, setNumberOfDays] = useState(0); // Default value for number of days
    var [resultText, setResultText] = useState('Coste estancia hotel: 0€'); // Default result text

    const props = {
        selectedService,
        numberOfDays
    };

    useEffect(() => {
        setResultText(calculateResult(props));
    }, [selectedService, numberOfDays]); // Update result text when selected service or number of days changes

  
    return (
      <form className='form'>
        <p className='padding'>¿Qué servicio necesitas?</p>
        <select className='selector' onChange={(e) => setSelectedService(parseInt(e.target.value))}>
          <option value='1'>Hotel</option>
          <option value='2'>Coche</option>
        </select>
        <input className='selector' type='text' placeholder='Introduce el número de días' onChange={(e) => setNumberOfDays(parseInt(e.target.value))} />
        <p className='padding'>{resultText}</p>
      </form>
    );
  }

export default Form;