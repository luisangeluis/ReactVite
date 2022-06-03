import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    //Peticion axios
    axios
      .get('https://randomuser.me/api/')
      .then((res) => {
        console.log(res.data.results[0]);
        setUser(res.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });

    //Use effect se ejecuta al nacer debido a que el array de dependencias esta vacio
  }, []);

  return (
    <div className="App">
      {/* {El signo de interrogacion es por que la primera vez que se renderiza aun no contiene la informacion necesaria} */}
      <h2>{user?.name.first}</h2>
    </div>
  );
}

export default App;
