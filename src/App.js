import React, { useState } from 'react';
import './App.css';


function App() {
  const [selectedName, setSelectedName] = useState('');

  const handleChange = (event) => {
    setSelectedName(event.target.value);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label>Student List</label>
      <select
        value={selectedName}
        onChange={handleChange}
        style={{ width: "100px" }}>
        <option value="Ram">Ram</option>
        <option value="Ashi">Ashi</option>
        <option value="Steven">Steven</option>
        <option value="Anuja">Anuja</option>
      </select>
      <button
        style={{ width: "100px" }}
        onClick={() => {
          alert("Hi " + selectedName);
        }}
      >
        Submit
      </button>
    </div>
  );
}
export default App;
