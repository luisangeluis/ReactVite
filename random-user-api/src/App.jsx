import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'


function App() {
  const [user, setUser] = useState({})
  const [counter, setCounter] = useState(0)

  useEffect(() => {

    axios.get('https://randomuser.me/api/')
      .then(res => {
        console.log(res);
        setUser(res.data.results[0])
      })
      .catch(err => console.log(err))

  }, [counter])
  /*Cuando el arreglo de dependencias está vacío se renderiza una sola vez*/

  console.log(user);
  return (
    <div className="App">
      {/* Se le pone ? porque en el primer render es undefined y tienes que entrar a mas de un nivel .name.first */}
      {/* <h1>{user.name?.first}</h1> */}

      <ul>
        <li >{user.name?.first}</li>
        <li >{user.email}</li>
        <li >{user.location?.country}</li>
      </ul>
    </div>
  )
}

export default App
