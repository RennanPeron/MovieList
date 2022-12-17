function starting() {
    document.querySelector("body").innerHTML = `
        <div class="container">
        <div class="head">
            <img src="img/logo.svg" alt="Logo">
            <h1>
                Não sabe o que assistir?
            </h1>
        </div>
        <div class="movie">
        </div>
        <div class="find-movie">
            <button>
                <img src="img/logo.svg" alt="Logo">
                Encontrar filme
            </button>
            <p>
                Clique em "Encontrar filme" que traremos <br /> de algum filme para você assistir hoje.
            </p>
        </div>
        </div>
    `
}

starting()


document.querySelector('button').addEventListener("click", () => {
    getMovie()
})