function loadFavorites() {
    const baseURL = 'http://localhost:3000/api/favorites/'
    const currentPage = "favorites"
    
    constructPage(baseURL, currentPage)
}
function loadHype() {
    const baseURL = 'http://localhost:3000/api/hype/'
    const pageType = "hype"

    constructPage(baseURL, pageType)
}

function constructPage(baseURL, pageType) {
    renderPage(pageType)
    
    axios.get(baseURL)
    .then(res => {
        const data = res.data
        console.log(data[0]);
       if(data[0] == undefined) {
            console.log("Lista Vazia!");
            renderEmptyMovieList()
        } else {
            console.log("Lista Preenchida!");
            renderMainSection(data[0], pageType)
       }

        data.forEach((data) => {
            renderFavorites(data)
        })
    })
}

function renderPage(pageType) {
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
    <nav>
        <ul>
            <li onclick="loadFavorites()"> <span class="material-symbols-outlined ${pageType=="favorites"? "active": ""}">favorite</span> Favoritos </li>
            <li onclick="loadHype()"> <span class="material-symbols-outlined ${pageType=="hype"? "active": ""}">star</span> Hype </li>
            <li onclick="renderIndex()"> <img class="material-symbols-outlined" style="width: 24px;" src="img/logo.svg" alt="Aleatório"> Aleatório </li>
        </ul>
    </nav>
    <div class="favorites-container">
    </div>
    `
}

function renderEmptyMovieList() {
    document.querySelector(".favorites-container").innerHTML = `
    <div class="no-movies">
        <h2>Nenhum filme encontrado</h2>
        <p>Utilize a barra de pesquisa ou adicione-os aleatoriamente e comece agora a sua lista!</p>
    </div>
    `
}

function renderMainSection(movie, pageType) {
    document.querySelector(".favorites-container").innerHTML = `
    <main style="background-image: url('https://image.tmdb.org/t/p/original/${movie.backdrop_path}')">
        <div class="movie-info">
            <div class="tile"><h2>${movie.title}</h2></div>
            <div class="description">
                <div class="informations">
                    <p>${movie.vote_average} <span class="material-symbols-outlined active" style="font-size: 15px">star</span></p> 
                    <p>${movie.release_date}</p>
                </div>
                <div class="synopsis">
                    ${movie.overview}
                </div>
            </div>
        </div>
    </main>
    <section class="open-list">
        <h3>${pageType=="favorites"? "Seus favoritos": "Os mais aguardados"}</h3>
        <div class="list"></div>
    </section>
    `
}

function renderFavorites(movie) {
    console.log("Renderiza os favoritos");
    document.querySelector('.list').innerHTML += `
        <div class="list-item" style="background-image: url('https://image.tmdb.org/t/p/original/${movie.poster_path}')">      
        </div>
    `
}