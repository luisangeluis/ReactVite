import {createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const countriesSlice = createSlice({
    name: 'countries',
    initialState: null,
    //funciones que trabajan con nuestro estado
    reducers:{
       setCountries:(state,action)=>{
        return action.payload;
       }
    }
})
export const {setCountries} =countriesSlice.actions;

export const getCountries = () => (dispatch) => {
    return axios.get('https://restcountries.com/v3.1/region/europe')
        .then(res => dispatch(setCountries(res.data)))
}
export default countriesSlice.reducer;