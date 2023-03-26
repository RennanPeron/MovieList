function getMovieByName(){
    const movieName = document.querySelector('input').value
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=868e39fc014ce3520ee3980839712a65&query=${movieName}&language=pt-BR&adult=false&region=pt-br`
    axios.get(searchUrl)
    .then(res => {
        const data = res.data.results
        const searchList = document.querySelector(".search-list")
        searchList.innerHTML = ''

        for(let movie of data){
            searchList.innerHTML += `
            <div class="search-list-item">
                <div class="search-thumbnail">
                    <img src="https://image.tmdb.org/t/p/original/${movie.backdrop_path}" alt="Movie Poster">
                </div>
                <div class="search-info">
                    <h3>${movie.title}</h3>
                    <p>${movie.release_date}</p>
                </div>
            </div>
            `
        }
    }).catch(err => {
        console.log(err)
    })
}   

function activateSearchList() {
    const searchList = document.querySelector(".search-list")
    const movieName = document.querySelector('input').value
    
    searchList.classList.toggle('onFocus')
    // if(movieName != "") {

    // }  
}