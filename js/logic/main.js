const url = "https://api.themoviedb.org/3/movie/popular?api_key=868e39fc014ce3520ee3980839712a65&language=pt-BR&page=1&region=US"

let ids = [
]

function getMovie() {
    axios.get(url)
    .then(res => {
        const data = res.data.results
        const movieClass = document.querySelector('.movie')
        
        const movie = data[Math.floor(Math.random() * data.length)];

        
        if (ids.find(element => element == movie.id) === undefined) {
            ids.push(movie.id)

            
            movieClass.style = `
            opacity: 0
            `
            
            setTimeout(() => {
                renderResults(movie)
                
                movieClass.style = `
                opacity: 1;
                `
            }, 500);
        }
        else {
            if (ids.length < 20){
                getMovie()
            } 
        }
    })
    .catch(err => {
        renderError()
        console.error(err)})

}

function renderResults (movie) {
    document.querySelector('.movie').innerHTML = `
        <div class="movie-poster">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Poster de ${movie.title}">
        </div>
        <div class="movie-description">
        <h2 class="movie-title">${movie.title}</h2>
        <p class="movie-synopsis">${movie.overview}
        </p>
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