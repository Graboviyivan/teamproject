const searchGameInput = document.getElementById("game-search-input")
const searchGameBtn = document.getElementById("game-search-btn")

function onClicked(e){
    e.preventDefault();
    const titleGame = searchGameInput.value;
    const gameData = searchGame(titleGame);
}



btn.addEventListener("onclick", onClcked)