function constructPage() {
    const baseURL = 'http://localhost:3000/api/favorites/'
    
    axios.get(baseURL)
    .then(res => {
        const data = res.data[0]

        console.log(data)
        renderFavorites(data)
    })
}

function renderFavorites(movie) {
    document.querySelector("html").style = `
        background: #0f0f0f;
    `
    document.querySelector("body").innerHTML = `
    <header>
        <img src="icons/arrow_back_FILL0_wght400_GRAD0_opsz48.svg" style="height: 40px" alt="Voltar">
        <div class="search-bar">
            <input class="search-box" type="text" placeholder="Procure por um filme ou série...">
            <button class="search-button"></button>
        </div>
    </header>
    <aside>
        <ul>
            <li> <span class="material-symbols-outlined active">favorite</span> Favoritos </li>
            <li> <span class="material-symbols-outlined">star</span> Hype </li>
            <li onclick="renderIndex()"> <img class="material-symbols-outlined" style="width: 24px;" src="img/logo.svg" alt="Aleatório"> Aleatório </li>
        </ul>
    </aside>
    <div class="favorites-container">
        <div class="main" style="background-image: url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')">
            <div class="tile"><h2>${movie.title}</h2></div>
            <div class="description">
                <div class="informations">
                    <p>${movie.vote_average}</p>
                    <p>${movie.release_date}</p>
                </div>
                <div class="synopsis">
                    ${movie.overview}
                </div>
            </div>
        </div>
        <div class="open-list">
            <h3>Seus favoritos</h3>
            <div class="list">
                <div class="list-item"></div>
            </div>
        </div>
    </div>
    `
}

// constructPage()