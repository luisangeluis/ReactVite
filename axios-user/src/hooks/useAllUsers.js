import { useEffect, useState } from "react"
import  axios from 'axios';

const useAllUsers = (userQuantity) => {
  
    const [users, setUsers] = useState();
    
    useEffect(() => {
        axios.get(`https://randomuser.me/api/?results=${userQuantity}`)
            .then(response=>{
                console.log(response);
                setUsers(response.data.results)
            })
            .catch(error=>{
                console.log(error);
            })
    },[])
    

    return [users];
  
}

export default useAllUsers