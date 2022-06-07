import { useEffect, useState } from 'react';
import './App.css';
// import axios from 'axios';
import CardWeather from './components/CardWeather';
import IsLoader from './components/IsLoader';
import CardCounter from './components/CardCounter';
import useWeather from './hooks/useWeather';
// import useWeather

function App() {
  const [weather, isLoader] = useWeather();

  return (
    <div className="App">
      {isLoader ? <IsLoader /> : <CardWeather weather={weather} />}
      <CardCounter />
    </div>
  );
}

export default App;
