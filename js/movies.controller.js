'use strict'

function onInit() {
    getGenres(renderGenres)
}

function onReloadClick() {
    document.querySelector('.movies').innerHTML = ''
}

function renderGenres(genres) {
    console.log('render genres', genres)
    const strHTMLs = genres.map(
        ({ name, id }) => `
      <button onclick="onGenreClick(${id})" class="btn">${name}</button>
      `
    )
    document.querySelector('.btn-group').innerHTML = strHTMLs.join('')
}

function onGenreClick(genreId) {
    getMoviesByGenreId(genreId, renderMoviesByGenre)
}

function renderMoviesByGenre(movies) {
    console.log(movies)
    const strHTMLs = movies
        .map(
            ({ title, overview, backdrop_path }) => `
    <article class="card">
    <div class="card-img-con">
    <img src="https://image.tmdb.org/t/p/w500${backdrop_path}" alt="${title} poster"/>
    </div>
        <div class="venue">${title}</div>
        <div class="location">${overview}</div>
    </article>`
        )
        .join('')
    document.querySelector('.movies').innerHTML = strHTMLs
}
