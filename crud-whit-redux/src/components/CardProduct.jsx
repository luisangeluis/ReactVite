import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../store/slices/products.slice';

const CardProduct = ({product}) => {

    const distpatch =useDispatch();

    const delProduct=()=>{
        distpatch(deleteProduct(product.id))
    }
  return (
    <article>
        <h2>*{product.id} {product.name}</h2>
        <ul>
        <li>Precio: ${product.price}</li>
        <li>Status: {product.available ? 'disponible' : 'no disponible'}</li>
        </ul>
        <button onClick={delProduct}>Delete product</button>
    </article>
  )
}

export default CardProduct