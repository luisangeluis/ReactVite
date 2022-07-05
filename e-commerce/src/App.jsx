import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import CartScreen from './components/cart/CartScreen'
import HomeScreen from './components/home/HomeScreen'
import LoginScreen from './components/login/LoginScreen'
import ProtectedRoutes from './components/ProtectedRoutes'
import PurchasesScreen from './components/purchases/PurchasesScreen'
import HeaderScreen from './components/shared/HeaderScreen'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <HeaderScreen />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route element={<ProtectedRoutes isLogged={true} />}>
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/purchases" element={<PurchasesScreen />} />
          </Route>
        </Routes>
    </div>
  )
}

export default App
