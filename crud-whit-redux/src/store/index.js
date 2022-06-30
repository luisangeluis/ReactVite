import { configureStore } from "@reduxjs/toolkit";
import products from './slices/products.slice';
import productActiveSlice from './slices/productActive.slice';

export default configureStore({
    reducer:{
        products,
        productActiveSlice
    }
})