import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useLocalStorageRef } from '../hooks/hooks';
import Board from './Board';
import CongratulationsScreen from './CongratulationsScreen';
import Popup from './Popup';
import WordInfo from './WordInfo';

const StyledGameArea = styled.div`
    width: 100%;
    max-width: 60vh;
    flex-grow: 1;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
`;

const BoardArea = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
`;

function GameArea() {
  const words = useSelector((store) => store.arr);
  return (
    <>
      <StyledGameArea>
        <BoardArea>
          <WordInfo />
          <Board />
        </BoardArea>
      </StyledGameArea>
      { words.includes('МОРЖ') && words.includes('ОГУРЕЦ') && words.includes('АЗБУКА') ? <CongratulationsScreen /> : null}
      { words.includes('МЕНЮ') && words.includes('УКСУС') ? <CongratulationsScreen /> : null}
    </>
  );
}

export default GameArea;
