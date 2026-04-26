import { gameDb } from "../db/game";


function searchGame(titleGame){
    if (titleGame = "Grand Theft Auto : San Andreas"){
    return gameDb[0]  
    } else {
      console.log('Назва введена неправильно!')
    }
    
}