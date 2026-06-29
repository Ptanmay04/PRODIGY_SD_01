import React from 'react';
import TemperatureConverter from './tempConverter.jsx';

function App() {
  return (
    <div className="min-vh-100 bg-dark text-light py-5">
      <div className="container">
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold text-gradient">Internship Project Dashboard</h1>
          <p className="lead text-light">Prodigy Infotech — Software Development Track</p>
        </header>

        <main>
          {/* Task 01 Component */}
          <TemperatureConverter />
          
        </main>
      </div>
    </div>
  );
}

export default App;