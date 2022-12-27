function renderFavorites() {
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
        <div class="main">
            <div class="tile"><h2>Endgame</h2></div>
            <div class="description">
                <div class="genre">
                    <p>Adventure/Action</p>
                    <p>10/10</p>
                    <p>2018</p>
                </div>
                <div class="synopsis">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, sequi fugiat impedit vitae molestias iusto ab recusandae vel omnis quasi libero a et nobis, obcaecati molestiae itaque repudiandae, doloribus voluptatum.
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

renderFavorites()
