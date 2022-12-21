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
                movieClass.style = `
                opacity: 1;
                `
            }, 600);
        } else {
            getMovie()
        }
    })
    .catch(err => console.error(err))

}