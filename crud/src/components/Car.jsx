import React from 'react'

const Cars = ({ car, deleteCar }) => {
  return (
    <div className='car'>
      <div>{car.brand}</div>
      <button onClick={() => deleteCar(car.id)}>Borrar Carro</button>

    </div>

  )
}

export default Cars