import React, { useState } from 'react';
import './App.css';


function App() {
  const [selectedName, setSelectedName] = useState('');
  const [selectCondition, setSelectCondition] = useState('');

  const handleChange = (event) => {
    setSelectedName(event.target.value);
  };

  const onStatusValueChange = (event) => {
    setSelectCondition(event.target.value);
  };
  const handleClear = () => {
    setSelectedName('');
    setSelectCondition('');
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <label>Student List</label>
      <select value={selectedName} onChange={handleChange} style={{ width: "100px" }}>
        <option value="Ram">Ram</option>
        <option value="Ashi">Ashi</option>
        <option value="Steven">Steven</option>
        <option value="Anuja">Anuja</option>
      </select>
      <label>Status</label>
      <select value={selectCondition} onChange={onStatusValueChange} style={{ width: "100px" }}>
        <option value="Pass">Pass</option>
        <option value="Fail">Fail</option>
      </select>
      <button
        style={{ width: "100px" }}
        onClick={() => {
          alert("Hi " + selectedName);
        }}
      >
        Submit
      </button>
      <button style={{ width: "100px" }} onClick={handleClear}>Clear</button>
    </div>
  );
}
export default App;
