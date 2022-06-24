import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    //funciones que trabajan con nuestro estado
    reducers:{
        increment: (state)=>{
            return state+1;
        },
        decrement: (state)=>{
           return state-1;
        },
        setCounterGlobal:(state,action)=>action.payload
    }
})
export const {increment,decrement,setCounterGlobal} =counterSlice.actions;
export default counterSlice.reducer;