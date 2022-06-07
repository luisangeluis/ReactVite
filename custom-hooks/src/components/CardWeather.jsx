import React from 'react';
import { useEffect, useState } from 'react';

const CardWeather = ({weather}) => {
  return (
    <>
      <img
        // La primera vez es undefined pero img necesita una url en todo momento && es igual a renderizado condicional
        src={
          weather &&
          `http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
        }
        alt=""
      />
      <h2>{weather?.name}</h2>
    </>
  );
};

export default CardWeather;
