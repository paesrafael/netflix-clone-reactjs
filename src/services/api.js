const API_BASE = process.env.REACT_APP_API_BASE
const API_KEY = process.env.REACT_APP_API_KEY
const LANGUAGE = process.env.REACT_APP_LANGUAGE

const apiRequired = `${LANGUAGE}&api_key=${API_KEY}`

async function fetchList(endpoint) {
  const response = await fetch(`${API_BASE}${endpoint}`)
  return response.json()
}

export default {
  getMovieList: async () => {
    return [
      {
        slug: 'trending',
        title: 'Recomendados para você',
        movies: await fetchList(`/trending/all/week?${apiRequired}`),
      },
      {
        slug: 'toprated',
        title: 'Em alta',
        movies: await fetchList(`/movie/top_rated?${apiRequired}`),
      },
      {
        slug: 'originals',
        title: 'Originais Netflix',
        movies: await fetchList(`/discover/tv?with_network=213&${apiRequired}`),
      },
      {
        slug: 'action',
        title: 'Ação',
        movies: await fetchList(
          `/discover/movie?with_genres=28&${apiRequired}`
        ),
      },
      {
        slug: 'comedy',
        title: 'Comédia',
        movies: await fetchList(
          `/discover/movie?with_genres=35&${apiRequired}`
        ),
      },
    ]
  },
}
