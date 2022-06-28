import { useState } from 'react'
import './App.css'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import Products from './components/Products'
import Product from './components/Product'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/">Home</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/contact">Contact</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/products/1">Products</NavLink></li>
          <li><NavLink className={({ isActive }) => isActive ? 'active' : ''} to="/products/sales">Sales</NavLink></li>
        </ul>
      </nav>
      <Routes>
        {/* Rutas protegidas */}
        <Route path="/login" element={<h2>login</h2>} />
        <Route element={<ProtectedRoutes islogged={true}/>}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* forma 1 */}
        {/* <Route  element={<Products />} >
          <Route path="/products/:id" element={<Product />} />
        </Route> */}
        {/* Forma 2 */}
        {/* <Route path="/products" element={<Products />} >
          <Route path=":id" element={<Product />} />
          <Route path="sales" element={<h2>Sales</h2>} />
        </Route> */}
        {/* No usa oulet forma 3 */}
        {/* <Route path="/products" >
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="sales" element={<h2>Sales</h2>} />
        </Route> */}
        {/* El padre puede tener elementos o no forma 4*/}
        {/* <Route path="/products" element={<Products />} >
          <Route index element={<h2>elemento hijo</h2>} />
          <Route path=":id" element={<Product />} />
          <Route path="sales" element={<h2>Sales</h2>} />
        </Route> */}
      </Routes>
    </div>
  )
}

export default App
