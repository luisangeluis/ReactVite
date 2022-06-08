import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useRandomUser = () => {

    const [user,setUser]=useState();
    
    useEffect(() => {

        axios.get('https://randomuser.me/api/')
            .then(response=>{
                console.log(response.data.results[0]);
                let user = response.data.results[0];
                setUser(user);
            })
            .catch(error=>{

            });

    },[])

  return [user]
}

export default useRandomUser