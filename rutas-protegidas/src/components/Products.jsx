import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <p>Products</p>
      <Outlet />
    </div>
  )
}

export default Products