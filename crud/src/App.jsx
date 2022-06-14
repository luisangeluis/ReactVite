import { useState } from 'react'
import './App.css'
import Car from './components/Car'
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
      .then(response=>console.log(response.data))
      .catch(error=>console.log(error))
      .finally(()=>getAllCars())

  }

  const deleteCar =(id)=>{
    axios.delete(`https://cars-crud.herokuapp.com/cars/${id}/`)
      .then(response=>console.log(response))
      .catch(error=>console.log(error))
      .finally(()=>getAllCars());
      
  }
  
  const getAllCars=()=>{
    axios.get('https://cars-crud.herokuapp.com/cars/')
    .then((response)=>{
      setCars(response.data)
      console.log(response.data)
    })
    .catch(error=>console.log(error))
  }

  return (
    <div className="App">
      <button onClick={create}>Crear</button>
      <button onClick={()=>deleteCar(1095)}>Borrar Carro</button>
      {
        cars?.map(car=>{
          return <Car car={car} key={car.id}/>
        })
      }
    </div>
  )
}

export default App
