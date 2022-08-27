import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { getWord } from '../redux/action/actionBoard';

export default function Button() {
  const But = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    height: 2.25rem;
    width: 4.25rem;
    border-radius: 45%;
`;
  const dispatch = useDispatch();

  const threeBoard = () => {
    dispatch(getWord(3));
  };
  const fourBoard = () => {
    dispatch(getWord(4));
  };

  const repeat = () => {
    document.location.reload();
    localStorage.clear();
  };
  return (
    <div>
      <But
        type="button"
        onClick={threeBoard}
      >
        3х3
      </But>
      <But
        type="button"
        onClick={fourBoard}
      >
        4х4
      </But>
      <But
        type="button"
        onClick={repeat}
      >
        Заново
      </But>
    </div>
  );
}
