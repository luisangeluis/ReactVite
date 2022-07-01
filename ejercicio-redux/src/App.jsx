import './App.css'
import {useDispatch, useSelector} from 'react-redux';
import {getCountries} from './store/slices/countries.slice'
import { useEffect } from 'react';

function App() {
  const countries = useSelector(state=>state.countries);

  const dispatch =useDispatch(); 

  useEffect(() => {
    dispatch(getCountries());
  }, [])
  
  // console.log(countries);

  return (
    <div className="App">
      {
        countries?.map((country,i)=><h2 key={i}>{country.name.common}</h2>)
      }
    </div>
  )
}

export default App
