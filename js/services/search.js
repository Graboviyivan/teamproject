import { gameDb } from "../db/game";


function searchGame(titleGame){
    const data = gameDb.find(item => item.title == titleGame)
    return data
    
}