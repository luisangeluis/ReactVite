import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addProduct } from '../store/slices/products.slice'

const Form = () => {
  const { handleSubmit, reset, register } = useForm()

  const dispatch =useDispatch();

  const submit =(data)=>{
    data.id = Date.now();
    console.log(data);
    dispatch(addProduct(data))
  }

  return (
    <form action="" onSubmit={handleSubmit(submit)}>
      <ul>
        <li>
          <label htmlFor="">Nombre del producto</label>
          <input type="text" id="name" {...register('name')} />
        </li>
        <li>
          <label htmlFor="">Precio</label>
          <input type="text" id="price" {...register('price')} />
        </li>
        <li>
          <label htmlFor="">Disponible</label>
          <input type="checkbox" id="available" {...register('available')} />
        </li>
        <button>Enviar</button>
      </ul>
    </form>
  )
}

export default Form