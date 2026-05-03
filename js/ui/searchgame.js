import {searchGame} from "../services/search.js"

const searchGameInput = document.getElementById("game-search-input")
const searchGameBtn = document.getElementById("game-search-btn")
const searchResult = document.getElementById("game-search-section")

function onClicked(e){
    e.preventDefault();
    console.log('clicked')
    const titleGame = searchGameInput.value;
    const gameData = searchGame(titleGame);
    if(gameData){
        searchResult.innerHTML = `
            <img class="result__img" src="${gameData.img}" alt="">
            <h2 class="result__title" >${gameData.title}</h2>
            <p class="result__text">${gameData.info}</p>
        `
    }
}



searchGameBtn.addEventListener("click", onClicked)