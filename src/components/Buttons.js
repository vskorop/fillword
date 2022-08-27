import React from "react";
import {wordsList, wordList2} from "../utils/wordsList";
import { useDispatch } from 'react-redux';
import actionBoard, { getWord } from '../redux/action/actionBoard'

export default function Button() {
    const dispatch = useDispatch();

    const threeBoard = () => {
        dispatch(getWord(3))
    }
    const fourBoard = () => {
        dispatch(getWord(4))
    }

  return (
    <div>
        <button
        onClick={threeBoard}
        >
          Three
        </button>
        <button
        onClick={fourBoard}
        >
          Four
        </button>
    </div>
  );
}
