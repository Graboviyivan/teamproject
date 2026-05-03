import { gameDb } from "../db/game.js";


export function searchGame(titleGame){
    const data = gameDb.find(item => item.title == titleGame)
    return data
    
}