import React, { useState } from 'react';
import Lamp from './Components/Lamp.jsx';
import Lamp2 from './Components/Lamp2.jsx';

import './App.css';

function App() {
  const [on, setOn] = useState(0);

  const changeValue = () => {
    if (on) {
      setOn(0);
    } else {
      setOn(1);
    }
  };

  return (
    <div className="App">
      <Lamp></Lamp>
      <Lamp></Lamp>

      <Lamp2 on={on} onClick={changeValue} />
      <Lamp2 on={on} onClick={changeValue} />
      <Lamp2 on={on} onClick={changeValue} />

      <button onClick={changeValue}>Todo</button>
    </div>
  );
}

export default App;
