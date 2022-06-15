import React from 'react'

const  Movie= ({movie,deleteMovie}) => {
  return (
    <section className='movie'>
        <p>{movie.name}</p>
        <p>{movie.genre}</p>
        <p>{movie.duration}</p>
        <button onClick={()=>deleteMovie(movie.id)}>Borrar</button>
    </section>
  )
}

export default Movie;