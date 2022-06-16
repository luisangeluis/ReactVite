import React from 'react'

const  Movie= ({movie,deleteMovie,changeMovie}) => {
  return (
    <section className='movie'>
        <p>{movie.name}</p>
        <p>{movie.genre}</p>
        <p>{movie.duration}</p>
        <button onClick={()=>deleteMovie(movie.id)}>Borrar</button>
        <button onClick={()=>changeMovie(movie.id)}>Cambiar</button>

    </section>
  )
}

export default Movie;