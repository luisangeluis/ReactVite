import React, { useState } from 'react';
import Lamp from './Components/Lamp.jsx';
import './App.css';

function App() {
  const [onAll, setOnAll] = useState(0);

  const changeValue = () => {
    onAll ? setOnAll(0) : setOnAll(1);
  };

  return (
    <div className="App">
      <Lamp onAll={onAll}></Lamp>
      <Lamp onAll={onAll}></Lamp>
      <Lamp onAll={onAll}></Lamp>
      <Lamp onAll={onAll}></Lamp>
      <button onClick={changeValue}>Todo</button>
    </div>
  );
}

export default App;
