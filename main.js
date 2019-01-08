$(document).ready(initApp);

// const directionCheck = {
//     'up': {'y': -1, 'x': 0},
//     'upRight': {'y': -1, 'x': 1},
//     'right': {'y': 0, 'x': 1},
//     'downRight': {'y': 1, 'x': 1},
//     'down' : {'y': 1, 'x': 0},
//     'downLeft': {'y': 1, 'x': -1},
//     'left' : {'y': 0, 'x': -1},
//     'upLeft': {'y': -1, 'x': -1}
// }
let gameboardArray;

function initApp(){
    gameboardArray = buildGameboardAndArray(gameboardSize);
    const selectedWords = pickRandomWords(wordDB, 'football'); //will change this around later to allow user selected category
    addWordsToGameboard(selectedWords);
    console.log(gameboardArray)
}

function buildGameboardAndArray(gbSize){
    const gameboardArray = [];
    let gameboard = $('.gameboard');
    for(let i = 0; i < gbSize; i++){
        const newArr = [];
        for(let j = 0; j < gbSize; j++){
            newArr.push('');
            let div = $('<div>').addClass('gameboardSquare').attr({y: i, x: j}).css({height: (100/gbSize)+ '%', width: (100/gbSize)+ '%'});
            gameboard.append(div);
        }
        gameboardArray.push(newArr);
    }
    return gameboardArray;
}

function pickRandomWords(wordObj, category){  //will have to determine the ideal amount of words to use, will start with 8
    const wordsFromCategory = wordObj[category].slice();
    let amountToPick = 8;
    const selectedWords = [];
    for(let i = 0; i < amountToPick; i++){
        let ranNum = Math.floor(Math.random() * wordsFromCategory.length-1) + 1
        selectedWords.push(wordsFromCategory[ranNum]);
        wordsFromCategory.splice(ranNum, 1);
    }
    return selectedWords;
}

function addWordsToGameboard(words){
    const selectedWordsCopy = words.slice();
    for(let i = 0; i < selectedWordsCopy.length; i++){
        let randomCord = returnRandomCord(gameboardSize);
        determineWordPlacement(randomCord, selectedWordsCopy[i]);
    }
}

function returnRandomCord(gbSize){
    let randomX = Math.floor(Math.random() * gbSize) + 1;
    let randomY = Math.floor(Math.random() * gbSize) + 1;
    return {'y': randomY, 'x': randomX};
}

function determineWordPlacement(cord, word){
    let directions = Object.keys(directionCheck)
}