import { createContext, useContext, useEffect, useState } from "react";
import { useStateTrigger, useStateRef, useLocalStorageRef } from "../hooks/hooks";
import { minWordLength } from "../utils/utils";
import { useSelector } from 'react-redux';
import { wordsList, wordsList2 } from "../utils/wordsList";
const GameContext = createContext();

const GameProvider = ({children}) => {
    const size = useSelector((store) => store.word);
    // state
    // anything accessed from the 'mouseup' event handler needs to use a ref
    const [currentWord, currentWordRef, setCurrentWord] = useStateRef("");
    const [foundWords, foundWordsRef, setFoundWords] = useLocalStorageRef("foundWords", []);
    const [wordActive, setWordActive] = useState(false);
    const [path, setPath] = useState([]);
    const [wordInfo, wordInfoTrigger, setWordInfo] = useStateTrigger(null);
    // const board = useMemo(() => generateTodaysBoard(), []);
    const board = (size === 4)? (wordsList): (wordsList2)
    const submitWord = () => {
        const words =(size===4)? ["МОРЖ","ОГУРЕЦ", "АЗБУКА"]: ["МЕНЮ", "УКСУС"];
        const newWord = currentWordRef.current;
        if (!newWord) return;
        if (newWord.length === 1)
            setWordInfo(null);
        else if (newWord.length < minWordLength)
            setWordInfo("слишком короткое слово");
        else if (words.includes(newWord))
            setWordInfo("уже есть такое слово");
        else if (!words.includes(newWord))
            setWordInfo("нет такого слова");
        else {
            const foundWordsCopy = [...foundWordsRef.current];
            foundWordsCopy.push(newWord);
            setFoundWords(foundWordsCopy);
            setWordInfo(newWord);
        }
        console.log(wordInfo, wordInfoTrigger);
        setWordActive(false);
        setCurrentWord("");
        setPath([]);
    }

    // add global event listener to submit the current word when the mouse is released
    const handleMouseUp = e => {
        if (e.button !== 0) return;
        submitWord();
    }

    useEffect(() => {
        window.addEventListener("mouseup", handleMouseUp);
        return () => window.removeEventListener("mouseup", handleMouseUp);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // handle the word info popup
    useEffect(() => {
        if (wordInfo === null) return;
        const timeout = setTimeout(() => setWordInfo(null), 1500);
        return () => clearTimeout(timeout);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wordInfoTrigger]);

    // allow a square to retrieve its necessary information
    const getSquareInfo = (x, y) => {
        let active = false;
        let lineDirection = null;

        for (let i = 0; i < path.length; i++) {
            if (path[i].x === x && path[i].y === y) {
                active = true;
                if (i < path.length - 1) {
                    lineDirection = {
                        x: path[i + 1].x - path[i].x,
                        y: path[i + 1].y - path[i].y,
                    }
                }
            }
        }

        return {
            letter: board[x][y],
            active: active,
            lineDirection: lineDirection,
        }
    }

    // helper functions
    const addToPath = (x, y) => {
        const pathCopy = [...path];
        pathCopy.push({x, y});
        setPath(pathCopy);
        const newLetter = board[x][y];
        setCurrentWord(currentWord + newLetter);
    }

    const removeFromPath = () => {
        const pathCopy = [...path];
        pathCopy.pop();
        setPath(pathCopy);
        setCurrentWord(currentWord.slice(0, -1));
    }

    // updating current word
    const squareClicked = (x, y) => {
        setWordActive(true);
        addToPath(x, y);
    }

    const squareEntered = (x, y) => {
        if (!wordActive) return;
        for (let i = 0; i < path.length; i++) {
            if (path[i].x === x && path[i].y === y) {
                if (i === path.length - 2) removeFromPath();
                return;
            }
        }
        const {x: pathEndX, y: pathEndY} = path[path.length - 1];
        if (Math.abs(x - pathEndX) > 1 || Math.abs(y - pathEndY) > 1) return;
        addToPath(x, y);
    }

    return (
        <GameContext.Provider value={{
            currentWord,
            getSquareInfo,
            squareClicked,
            squareEntered,
            submitWord,
            foundWords,
            wordInfo,
        }}>
            {children}
        </GameContext.Provider>
    );
}

const useGame = () => {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error("useGame must be used inside a GameProvider");
    }
    return context;
}

export default GameProvider;
export { useGame };