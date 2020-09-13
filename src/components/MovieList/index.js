import React, { useEffect, useState } from 'react'

import api from '~/services/api'

import MovieListCard from '~/components/MovieListCard'
import FeaturedMovie from '~/components/FeaturedMovie'

import './styles.css'

export default function MovieList() {
  const [movieList, setMovieList] = useState(null)
  const [featuredMovie, setFeaturedMovie] = useState(null)

  useEffect(() => {
    async function loadMovieList() {
      const response = await api.getMovieList()

      setMovieList(response)
    }

    loadMovieList()
  }, [])

  useEffect(() => {
    async function loadFeaturedMovie() {
      const movieOriginals = movieList.filter(
        (feature) => feature.slug === 'originals'
      )
      const movieChosenRandom = Math.floor(
        Math.random() * (movieOriginals[0].movies.results.length - 1)
      )
      const movieChosen = movieOriginals[0].movies.results[movieChosenRandom]
      const chosenInformation = await api.getMovieInformation(
        movieChosen.id,
        'tv'
      )

      setFeaturedMovie(chosenInformation)
    }

    if (movieList !== null) {
      loadFeaturedMovie()
    }
  }, [movieList])

  return (
    <>
      {!!featuredMovie && <FeaturedMovie movie={featuredMovie} />}

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
    </>
  )
}
