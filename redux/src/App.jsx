import { useState } from 'react'
import './App.css'
import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment,setCounterGlobal } from './store/slices/counter.slice';

function App() {
  //Para acceder al valor del estado global counter
  const counter =useSelector(state=>state.counter);

  //Sirve para ejecutar los actions del state
  const dispatch =useDispatch();

  const minusOne=()=> dispatch(decrement())
  const plusOne=()=> dispatch(increment())
  
  const resetStateGlobal =()=>dispatch(setCounterGlobal(0))

  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={minusOne}>-1</button>
      <button onClick={resetStateGlobal}>Reset</button>
      <button onClick={plusOne}>+1</button>
    </div>
  )
}

export default App
