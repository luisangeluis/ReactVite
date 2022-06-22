import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const { name } = useParams();
  const [country, setCountry] = useState();

  useEffect(() => {
    console.log(name);

    axios
      .get(`https://restcountries.com/v3.1/name/${name}`)
      .then((res) => {
        console.log(res.data[0]);
        setCountry(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [name]);
  return (
    <div>
      <p>{country?.name.common}</p>
    </div>
  );
};

export default User;
