function getMovieByName(){
    const movieName = document.querySelector('input').value
    if (movieName != "") {
        const searchList = document.querySelector(".search-list")
        searchList.classList.remove("onFocus")

        const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=868e39fc014ce3520ee3980839712a65&query=${movieName}&language=pt-BR&adult=false&region=pt-br`
        axios.get(searchUrl)
        .then(res => {
            const data = res.data.results
            searchList.innerHTML = ''
    
            for(let i = 0; i < 4; i++){
                let movie = data[i]
                let movieYear = movie.release_date.split("-")[0]
                searchList.innerHTML += `
                <div class="search-list-item">
                    <div class="search-thumbnail">
                        <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="Movie Poster">
                    </div>
                    <div class="search-info">
                        <h3>${movie.title}</h3>
                        <div class="search-content">
                            <p>${movieYear}</p>
                            <div class="search-buttons">
                                <button onclick="checkMovieList('favorites',  '${movie.id}', '${movie.title}', '${movie.overview}', '${movie.backdrop_path}', '${movie.poster_path}', '${movie.release_date}', '${movie.vote_average}'), loadFavorites()"> ❤️ </button>
                                <button onclick="checkMovieList('hype', '${movie.id}', '${movie.title}', '${movie.overview}', '${movie.backdrop_path}', '${movie.poster_path}', '${movie.release_date}', '${movie.vote_average}')"> 🚂 </button>
                            </div>
                        </div>
                    </div>
                </div>
                `
            }
        }).catch(err => {
            console.log(err)
        })
    }
}   

function deactivateSearchList() {
    const searchList = document.querySelector(".search-list")
    let timer = 3000;
    setTimeout(()=> {
        searchList.classList.add('onFocus')
    }, timer)
}