import { useState,useEffect} from 'react'
import './App.css'
import CardUser from './components/CardUser'
import axios from 'axios';

function App() {
  const [user, setUser] = useState()
  

  useEffect(() => {

    axios
      .get('https://randomuser.me/api/')
      .then((res) => {
        console.log(res.data.results[0]);
        setUser(res.data.results[0]);
      })
      .catch((error) => {
        console.log(error);
      });
    
  }, [])

  
  
  return (
    <div className="App">
      <CardUser user ={user}></CardUser>
      <CardUser user ={user}></CardUser>
      <CardUser user ={user}></CardUser>
    </div>
  )
}

export default App
