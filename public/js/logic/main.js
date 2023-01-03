const url = "https://api.themoviedb.org/3/movie/popular?api_key=868e39fc014ce3520ee3980839712a65&language=pt-BR&page=1&region=US"
const api = "http://localhost:3000/api/"

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
    
    function addNewMovie(location, id, title, overview, backdrop_path, poster_path, release_date, vote_average) {
        const baseURL = `${api}${location}/`
        console.log('Entrei')
        console.log(baseURL)
        
        axios.post(baseURL, {id: id, title: title, overview: overview, backdrop_path: backdrop_path, poster_path: poster_path, release_date: release_date, vote_average: vote_average})
        .then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
}