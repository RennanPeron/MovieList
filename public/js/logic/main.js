const url = "https://api.themoviedb.org/3/movie/top_rated?api_key=868e39fc014ce3520ee3980839712a65&language=pt-BR&page=1&region=US&primary_release_year=2023&primary_release_year=2022&sort_by=vote_average.desc"
const api = "http://localhost:3000/api/"

// Depois posso adicionar uma condição em que se chegar a 20 filmes, reseta a lista e avança para a página 2.

let ids = [
]

function getMovie() {
    axios.get(url)
    .then(res => {
        const data = res.data.results
        const movieClass = document.querySelector('.movie')
        
        const movie = data[Math.floor(Math.random() * data.length)];
        
        if (ids.find(element => element == movie.id) === undefined) {
            if(ids.length === 0) {
                renderResults(movie)
                movieClass.style = `
                opacity: 1;
                `
            } else {
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
            
            ids.push(movie.id)
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

    function checkMovieList(location, id, title, overview, backdrop_path, poster_path, release_date, vote_average) {
        const baseURL = `${api}${location}/`

        let isOnTheList = false;

        axios.get(baseURL)
        .then(res => {
            const movies = res.data
            let isOnTheList = false
            console.log('Checando se o filme já está na lista')
            movies.forEach((movie) => {
                if(movie.id == id){
                    isOnTheList = true
                }
            });
            if(isOnTheList){
                console.log("Já existe na lista!");
            } else {
                console.log("Não tá na lista!")
                addNewMovie(location, id, title, overview, backdrop_path, poster_path, release_date, vote_average, baseURL)
            }
        })
    }
    
    function addNewMovie(location, id, title, overview, backdrop_path, poster_path, release_date, vote_average, baseURL) {
        axios.post(baseURL, {id: id, title: title, overview: overview, backdrop_path: backdrop_path, poster_path: poster_path, release_date: release_date, vote_average: vote_average})
        .then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
}