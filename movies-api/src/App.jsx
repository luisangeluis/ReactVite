import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Movie from './components/Movie';
function App() {
  const [movies, setMovies] = useState()
  const {register,handleSumit} = useForm();

  useEffect(() => {
    getAllMovies();
  }, [])

  const getAllMovies=()=>{
    axios.get('https://movies-crud-academlo.herokuapp.com/movies/')
      .then(res=>{
        console.log(res.data);
        setMovies(res.data)
      })
      .catch(error=>console.log(error))
  }

  const createMovie=()=>{
    const movie ={
      name: 'pelicula',
      genre: 'terror',
      duration:'1hora',
      release_date:'2018-08-20'
    }

    axios.post(`https://movies-crud-academlo.herokuapp.com/movies/`,movie)
      .then(res=>console.log(res))
      .catch(error=>console.log(error))
      .finally(()=>getAllMovies())
  }

  const deleteMovie=(id)=>{
    
    axios.delete(`https://movies-crud-academlo.herokuapp.com/movies/${id}/`)
      .then(res=>console.log(res))
      .catch(error=>console.log(error))
      .finally(()=>getAllMovies())
  }

  const changeMovie=(id)=>{
    const movie ={
      name:'nombre de la pelicula'
    }
    axios.patch(`https://movies-crud-academlo.herokuapp.com/movies/${id}/`,movie)
      .then(res=>{
        console.log(res)
        getAllMovies();
      })
      .catch(error=>console.log(error));
  }

  return (
    <div className="App">
      <button onClick={createMovie}>Crear pelicula</button>
      {
        movies?.map(movie=>{
          return <Movie movie={movie} key={movie.id} deleteMovie={deleteMovie} changeMovie={changeMovie}/>
        })

      }
    </div>
  )
}

export default App
