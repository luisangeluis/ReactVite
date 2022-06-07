import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [coords, setCoords] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  }, []);

  useEffect(() => {
    if (coords != null) {
      console.log(coords);
      axios.get(
        'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}'
      );
    }
  }, [coords]);

  const success = (pos) => {
    let latitude = pos.coords.latitud;
    let longitude = pos.coords.longitude;
    console.log(crd);
    setCoords({ latitude, longitude });
  };

  return <div className="App">{}</div>;
}

export default App;
