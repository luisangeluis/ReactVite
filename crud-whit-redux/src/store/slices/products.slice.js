import {createSlice} from '@reduxjs/toolkit';

export const productsSlice =createSlice({
    name: 'products',
    initialState:[
        {
            id:1,
            name:'television',
            price: 1000,
            avaible: true
        },
        {
            id:2,
            name:'celular',
            price: 500,
            avaible: false
        }

    ],
    reducers:{
        addProduct:(state,action)=>{
            state.push(action.payload)
        },
        deleteProduct:(state,action)=>{
            // OTRA OPCION
            const index =state.findIndex(e=>e.id===action.payload)
            state.splice(index,1)
            // return state.filter(e=>e.id!==action.payload);
        },
        updateProduct:(state,action)=>{
            
        }
    }
})

export const {addProduct,deleteProduct}  = productsSlice.actions
export default productsSlice.reducer;