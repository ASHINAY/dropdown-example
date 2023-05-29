import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedName, setSelectedName] = useState('');

  const handleChange = (event) => {
    setSelectedName(event.target.value);
};
 function App() {
    return (
      <div className="App">
        <div> Student List</div>
        <label htmlFor="dropdown">Select a name:</label>
        <select id="dropdown" value={selectedName} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Ram">Ram</option>
          <option value="Ashi">Ashi</option>
          <option value="Steven">Steven</option>
          <option value="Anuja">Anuja</option>
        </select>
        <p>Selected name: {selectedName}</p>
      </div>
    );
  }
}
export default App;
