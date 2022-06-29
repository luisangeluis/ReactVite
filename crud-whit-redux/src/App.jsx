import { useState } from 'react'
import './App.css'
import {useSelector} from 'react-redux'
import CardProduct from './components/CardProduct'
import Form from './components/Form'

function App() {
  const products =useSelector(state=>state.products)
  return (
    <div className="App">
      <h1>hola</h1>
      <Form />
      {products.map((product,i)=><CardProduct key={product.id} product={product}/>)}
    </div>
  )
}

export default App
