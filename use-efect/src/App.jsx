import { useEffect, useState } from 'react';
import './App.css';
import Password from './Components/Password';

const colors = ['blue', 'red', 'black', 'yellow'];

function App() {
  const [count, setCount] = useState(0);
  const [randomColor, setRandomColor] = useState('');

  const getRandomColor = (array) => {
    setRandomColor(colors[Math.floor(Math.random() * array.length)]);
  };

  const increase = () => {
    //Nos ayuda a obtener en tiempo real el valor de count
    let newCount = count + 1;
    console.log(newCount);
    setCount(newCount);
    console.log(newCount);
  };

  useEffect(() => {
    console.log('Soy app y nací');
    getRandomColor(colors);

    //Cuando el array del useEffect está vacio solo se ejecuta una vez al nacer
    //Cuando tiene algun estado en el array, useEffect se ejecuta cuando hay cambios en ese estado
  }, [count]);

  return (
    <div className="App" style={{ backgroundColor: randomColor }}>
      <div>{count >= 5 ? `5 Es el limite` : count}</div>
      <button onClick={increase}>Aumentar</button>
      <hr />
      <Password randomColor={randomColor} />
    </div>
  );
}

export default App;
