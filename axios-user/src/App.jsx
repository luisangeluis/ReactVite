import { useState } from 'react'
import './App.css'
import UserCard from './components/UserCard'
import useAllUsers from './hooks/useAllUsers'

function App() {
  const [users] =useAllUsers(20);

  console.log(users);
  return (
    <div className="App">
      { 
        users?.map(user=>{
          return <UserCard user={user}/>
        })
      }
    </div>
  )
}

export default App
