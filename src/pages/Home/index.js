import React, { useState, useEffect } from 'react'

import Header from '~/components/Header'
import MovieList from '~/components/MovieList'

// import './styles.css'

export default function Home() {
  const [pageScroll, setPageScroll] = useState(false)

  useEffect(() => {
    function scrollListener() {
      if (window.scrollY > 10) {
        setPageScroll(true)
      } else {
        setPageScroll(false)
      }
    }

    window.addEventListener('scroll', scrollListener)

    return () => {
      window.removeEventListener('scroll', scrollListener)
    }
  }, [])

  return (
    <>
      <Header scroll={pageScroll} />

      <MovieList />
    </>
  )
}
