import React, { useEffect, useState } from 'react'

import api from '~/services/api'

import MovieListCard from '~/components/MovieListCard'

import './styles.css'

export default function MovieList() {
  const [movieList, setMovieList] = useState([])

  useEffect(() => {
    async function loadMovieList() {
      const response = await api.getMovieList()

      setMovieList(response)
    }

    loadMovieList()
  }, [])

  return (
    <section className="movie-list-section">
      {!!movieList &&
        movieList.map((item, key) => (
          <div key={key} className="movie-list-card">
            <MovieListCard
              title={item.title}
              movies={item.movies}
              slug={item.slug}
            />
          </div>
        ))}
    </section>
  )
}
