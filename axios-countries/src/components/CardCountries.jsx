import React from 'react'

const CardCountries = ({ country }) => {
  return (
    <div className='card'>
      <img src={country && country.flags.svg} alt="bandera" />
      <div>Pais: <b>{country?.name.common}</b> </div>
      <div>Capital: <b>{country?.capital[0]}</b> </div>
    </div>
  )
}

export default CardCountries;