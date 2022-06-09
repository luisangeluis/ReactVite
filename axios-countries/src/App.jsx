// import { useState } from 'react'
import './App.css'
import CardCountries from './components/CardCountries'
import Loader from './components/Loader';
import useCountriesApi from './hooks/useCountriesApi';


function App() {
  const [countries, isLoading] = useCountriesApi();

  return (
    <div className="App">
      {
        isLoading ? <Loader /> : countries?.map((country,i) =><CardCountries country={country} key={i}/>)
      }
    </div>
  )
}

export default App
