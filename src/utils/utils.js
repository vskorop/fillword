import wordsList from "./wordsList";

const boardSize = 4;

const minWordLength = 4;

const generateTodaysBoard = () => {
    const board = wordsList;
    return board;
}

const findAllWords = board => {
    const results = [];
    for (const word of wordsList) {
        if (word.length < minWordLength) continue;
    }
    return results;
}

export { boardSize, minWordLength, generateTodaysBoard, findAllWords }