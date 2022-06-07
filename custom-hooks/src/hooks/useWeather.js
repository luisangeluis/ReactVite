import axios from 'axios';
import { useEffect, useState } from 'react';

const useWeather = () => {
  const [coords, setCoords] = useState();
  const [weather, setWeather] = useState();
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    const success = (pos) => {
      let latitude = pos.coords.latitude;
      let longitude = pos.coords.longitude;
      setCoords({ latitude, longitude });
    };
    
    navigator.geolocation.getCurrentPosition(success);

    setTimeout(() => {
      const latitude = 47.7510741;
      const longitude = -120.7401386;
      setCoords({ latitude, longitude });
    }, 4000);
  }, []);

  useEffect(() => {
    if (coords != undefined) {
      console.log(coords);

      const apiKey = 'f8d624cf63d74360f148597cefd37ba3';
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coords?.latitude}&lon=${coords?.longitude}&appid=${apiKey}`
        )
        .then((response) => {
          let data = response.data;
          setWeather(data);
          console.log(data);
          setIsLoader(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [coords]);

  console.log(weather);

  return [weather, isLoader];
};

export default useWeather;
