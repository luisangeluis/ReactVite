import { useState } from 'react'
import './App.css'
import Cars from './components/Cars'
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const [cars, setCars] = useState()

  useEffect(() => {
    getAllCars();
   
  },[])

  const create=()=>{
    const car ={
      brand: 'ejemplo',
      model: 'ejemplo',
      color: 'ejemplos',
      year: 2020,
      price: 1
    }

    axios.post(`https://cars-crud.herokuapp.com/cars/`,car)
      .then(response=>console.log(response))
      .catch(error=>console.log(error))
      .then(()=>getAllCars())

  }
  
  const getAllCars=()=>{
    axios.get('https://cars-crud.herokuapp.com/cars/')
    .then((response)=>{
      setCars(response.data)
      console.log(response)
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className="App">
      <button onClick={create}>Crear</button>
      {
        cars?.map(car=>{
          return <Cars car={car}/>

        })
      }
    </div>
  )
}

export default App
