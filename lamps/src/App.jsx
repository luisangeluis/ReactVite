import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Lamp from './components/Lamp';

function App() {
  const [count, setCount] = useState(0);
  const [switc, setSwitc] = useState(false);

  const changeSwitch = () => setSwitc(!switc);

  return (
    <div className="App">
      <button onClick={changeSwitch}>{switc ? 'Apagar' : 'Encender'}</button>
      <Lamp switc={switc} />
      <Lamp switc={switc} />
      <Lamp switc={switc} />
      <Lamp switc={switc} />
      <Lamp switc={switc} />
    </div>
  );
}

export default App;
