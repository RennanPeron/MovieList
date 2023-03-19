function renderIndex() {
    document.querySelector("html").style = `
        background: linear-gradient(67.08deg, #1E46A3 0%, #000000 48.94%, #C12A23 99.97%) no-repeat;
        min-height: 100vh;
        color: #FFFCF9;
    `

    document.querySelector("body").innerHTML = `
        <div class="container">
        <div class="head">
            <img src="img/logo.svg" alt="Logo">
            <h1>
                Não sabe o que assistir?
            </h1>
        </div>
        <div class="movie" style="opacity: 0">
        </div>
        <div class="find-movie">
            <button class="button" onClick="getMovie()">
                <img src="img/logo.svg" alt="Logo">
                Encontrar filme
            </button>
            <p>
                Clique em "Encontrar filme" que traremos <br /> de algum filme para você assistir hoje.
            </p>
        </div>
        </div>
    `
}

function renderResults (movie) {
    // POSSÍVEL ERRO: QUANDO TIVER UMA -> ' <- NO TITULO OU NA DESCRIÇÃO, SALVAR SÓ O ID E FAZER UMA CHAMADA AO TMDB BUSCANDO AS INFORMAÇÕES CORRIGIRIA ISSO
    document.querySelector('.movie').innerHTML = `
        <div class="movie-poster">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Poster de ${movie.title}">
        </div>
        <div class="movie-description">
            <h2 class="movie-title">${movie.title}</h2>
            <p class="movie-synopsis">${movie.overview}</p>
            <div class="buttonList">
                <button class="button" onclick="checkMovieList('favorites',  '${movie.id}', '${movie.title}', '${movie.overview}', '${movie.backdrop_path}', '${movie.poster_path}', '${movie.release_date}', '${movie.vote_average}')"> ❤️ Favoritar! </button>
                <button class="button" onclick="checkMovieList('hype', '${movie.id}', '${movie.title}', '${movie.overview}', '${movie.backdrop_path}', '${movie.poster_path}', '${movie.release_date}', '${movie.vote_average}')"> 🚂 HYPE! </button>
                <button class="button" onclick="loadFavorites()">Ver seus favoritos</button>
            </div>
        </div>
    `
}

function renderError () {
    document.querySelector('.movie').innerHTML = `
        <div class="movie-poster">
            <img src="../img/erro.png" alt="Foi encontrado um erro :(">
        </div>
        <div class="movie-description erro">
            <h2 class="movie-title">Ops, hoje não é dia de assistir filme.
            Bora codar! 🚀</h2>
        </div>
        `
}

renderIndex()
