import React from 'react';
import useCounter from '../hooks/useCounter';

const CardCounter = () => {
  // const { count: contador, plusOne, minusOne, resetCount } = useCounter();
  const [counter, plusOne, minusOne, resetCount] = useCounter(100);

  // console.log(useCounter());
  return (
    <div className="card">
      <p>{counter}</p>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetCount}>Inicializar</button>
      <button onClick={plusOne}>+1</button>
    </div>
  );
};

export default CardCounter;
