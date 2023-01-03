const url = "https://api.themoviedb.org/3/movie/popular?api_key=868e39fc014ce3520ee3980839712a65&language=pt-BR&page=1&region=US"
const api = "127.0.0.1:3000/api/"

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

function addNewMovie(location, id, title) {
    const url = `${api}${location}`
    // fetch('url', {
    // method: 'POST',
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({ "id": id, "name": title})
    // })
    // .then(response => response.json())
    // .then(response => console.log(JSON.stringify(response)))
    console.log('Entrei')
    console.log(url)

    axios.post(url, {id: id, name: title})
        .then(res => {
            console.log(res.data)
        }).catch(err => console.log(err))
}