const url = "https://api.themoviedb.org/3/movie/popular?api_key=868e39fc014ce3520ee3980839712a65&language=pt-BR&page=1&region=US"

function getMovie() {
    axios.get(url)
    .then(res => {
        const data = res.data.results

        const movie = data[Math.floor(Math.random() * data.length)];

        const elementMovie = document.querySelector('.movie')
 
        elementMovie.innerHTML = `
        <div class="movie-poster">
            <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Poster de ${movie.title}">
        </div>
        <div class="movie-description">
            <h2 class="movie-title">${movie.title}</h2>
            <p class="movie-synopsis">${movie.overview}
            </p>
        </div>
        `

        // elementMovie.className += " animation"
    })
    .catch(err => console.error(err))

}