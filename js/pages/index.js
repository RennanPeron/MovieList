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
            <button class="button" onclick="getMovie()">
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


// document.querySelector('#selectMovie').addEventListener("click", () => {
//     getMovie()
// })


function renderResults (movie) {
    document.querySelector('.movie').innerHTML = `
        <div class="movie-poster">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Poster de ${movie.title}">
        </div>
        <div class="movie-description">
            <h2 class="movie-title">${movie.title}</h2>
            <p class="movie-synopsis">${movie.overview}</p>
            <div class="buttonList">
                <button class="button"> ❤️ Favoritar! </button>
                <button class="button"> 🚂 HYPE! </button>
                <button class="button" onclick="renderFavorites()">Ver seus favoritos</button>
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