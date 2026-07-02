import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TemperatureConverter = () => {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('Celsius');

  const convertTemperature = () => {
    const tempNum = parseFloat(temperature);
    
    // If input is empty or not a valid number, return placeholder dashes
    if (isNaN(tempNum)) {
      return { Celsius: '--', Fahrenheit: '--', Kelvin: '--' };
    }

    let c = 0, f = 0, k = 0;

    if (unit === 'Celsius') {
      c = tempNum;
      f = (tempNum * 9) / 5 + 32;
      k = tempNum + 273.15;
    } else if (unit === 'Fahrenheit') {
      c = ((tempNum - 32) * 5) / 9;
      f = tempNum;
      k = c + 273.15;
    } else if (unit === 'Kelvin') {
      c = tempNum - 273.15;
      f = (c * 9) / 5 + 32;
      k = tempNum;
    }

    // Fixed to 2 decimal places for neat formatting
    return {
      Celsius: c.toFixed(2) + ' °C',
      Fahrenheit: f.toFixed(2) + ' °F',
      Kelvin: k.toFixed(2) + ' K',
    };
  };

  const results = convertTemperature();

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4" style={ {width: '100%' , borderRadius: '15px' }}>
        <h4 className="text-muted mb-4 text-center ">Task 01</h4>
        <h1 className="text-center mb-4 text-primary fw-bold">Temperature Converter</h1>
        
        
        {/* Input Fields Row */}
        <div className="row g-2 mt-4 mb-4">
          <div className="col-7">
            <label className="form-label fw-semibold">Enter Value</label>
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="e.g., 25"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
            />
          </div>
          <div className="col-5">
            <label className="form-label fw-semibold">Original Unit</label>
            <select
              className="form-select form-select-lg"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            >
              <option value="Celsius">Celsius (°C)</option>
              <option value="Fahrenheit">Fahrenheit (°F)</option>
              <option value="Kelvin">Kelvin (K)</option>
            </select>
          </div>
        </div>

        {/* Dynamic Display Results */}
        <div className="bg-light shadow-lg p-3 rounded-3 border">
          <h5 className="mb-3 text-secondary border-bottom pb-2  uppercase fw-bold">Converted Outputs</h5>
          
          {unit !== 'Celsius' && (
            <div className="d-flex justify-content-between my-2">
              <span className="text-muted fw-semibold">Celsius:</span>
              <span className="fw-bold text-dark">{results.Celsius}</span>
            </div>
          )}
          
          {unit !== 'Fahrenheit' && (
            <div className="d-flex justify-content-between my-2">
              <span className="text-muted fw-semibold">Fahrenheit:</span>
              <span className="fw-bold text-dark">{results.Fahrenheit}</span>
            </div>
          )}
          
          {unit !== 'Kelvin' && (
            <div className="d-flex justify-content-between my-2">
              <span className="text-muted fw-semibold">Kelvin:</span>
              <span className="fw-bold text-dark">{results.Kelvin}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TemperatureConverter;