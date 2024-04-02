'use strict'

const API_KEY = '096316ccf97d9bb07f660988be9d01ed'
const GENRES_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
const MOVIES_BY_GENRE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=`
const GENRES_KEY = 'genres_db'

function getGenres(onSuccess) {
    let genres = loadFromStorage(GENRES_KEY) || []
    if (genres.length) {
        onSuccess(genres)
        return
    }

    ajaxGet(GENRES_URL, ({ genres }) => {
        saveToStorage(GENRES_KEY, genres)
        onSuccess(genres)
    })
}

function getMoviesByGenreId(genreId, onSuccess) {
    let genres = loadFromStorage(GENRES_KEY) || []
    let genre = genres.find((genre) => genre.id === genreId)
    if (genre.movies) {
        onSuccess(genre.movies)
        return
    }

    ajaxGet(`${MOVIES_BY_GENRE_URL}${genreId}`, (res) => {
        const movies = processMoviesInGenre(res)
        genres = genres.map((genre) =>
            genre.id === genreId ? { ...genre, movies } : genre
        )
        saveToStorage(GENRES_KEY, genres)
        onSuccess(movies)
    })
}

function processMoviesInGenre({ results }) {
    return results.map(({ title, overview, backdrop_path }) => ({
        title,
        overview,
        backdrop_path,
    }))
}
