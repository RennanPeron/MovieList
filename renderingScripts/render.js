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

const movies = [
    {
        title: "Os Caça-Fantasmas",
        synopsis: "Em Nova York Peter Venkman, Ray Stantz e Egon Spengler são três cientistas do departamento de psicologia da Columbia University, que se dedicam ao estudo de casos paranormais. Quando a subvenção termina eles são despedidos e Venkman sugere que abram um negócio próprio, a exterminadora de fantasmas Ghostbusters. Inicialmente eles só têm despesas e nenhum cliente, mas eis que surge Dana Barrett, uma violoncelista que teve uma experiência assustadora em seu apartamento.",
        poster: "img/Poster.png"
    },
    {
        title: "Os Caça-Fantasmas 2: O inimigo agora é outro",
        synopsis: "Em Nova York Peter Venkman, Ray Stantz e Egon Spengler são três cientistas do departamento de psicologia da Columbia University, que se dedicam ao estudo de casos paranormais. Quando a subvenção termina eles são despedidos e Venkman sugere que abram um negócio próprio, a exterminadora de fantasmas Ghostbusters. Inicialmente eles só têm despesas e nenhum cliente, mas eis que surge um novo inimigo, que é totalmente diferente de tudo.",
        poster: "img/Poster.png"
    }
]


document.querySelector('button').addEventListener("click", () => {
    const randomElement = movies[Math.floor(Math.random() * movies.length)]

    document.querySelector('.movie').innerHTML = `
    <div class="movie-poster">
        <img src="${randomElement.poster}" alt="Poster de ${randomElement.title}">
    </div>
    <div class="movie-description">
        <h2 class="movie-title">${randomElement.title}</h2>
        <p class="movie-synopsis">${randomElement.synopsis}
        </p>
    </div>
    `
})