import { useState } from 'react'
import './App.css'

function App() {
  const [type,setType] = useState(true);

  const changeInput=()=>setType(!type);
  
  return (
    <div className="App">
      <h1>Input</h1>
      <input type={type?'password':'text'}/>
      <button onClick={changeInput}>{type?'show':'hide'}</button>
      {
        type ?
          <img src="https://st1.uvnimg.com/dims4/default/0102b2f/2147483647/resize/1093x820%3E/quality/75/?url=http%3A%2F%2Fuvn-brightspot.s3.amazonaws.com%2Fd4%2F4a%2F006304a74db4902c0b4d8d8026c8%2Fchevrolet-corvette-c8-stingray-2020-1280-08.jpg" alt="" />
          :
          null
      }
    </div>
  )
}

export default App
