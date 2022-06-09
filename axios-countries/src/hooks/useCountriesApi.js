import React, { useEffect, useState } from 'react'
import axios from 'axios';
const useCountriesApi = () => {
    const [countries,setCountries] = useState();
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
      axios.get('https://restcountries.com/v3.1/region/south america')
        .then(response=>{
            console.log(response);
            setCountries(response.data);
            setIsLoading(false);
        })
        .catch(error=>console.log(error));
    }, [])
    
    return [countries,isLoading] 
}

export default useCountriesApi