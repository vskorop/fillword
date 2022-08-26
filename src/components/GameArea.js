import styled from "styled-components";
import Board from "./Board";
import CongratulationsScreen from "./CongratulationsScreen";
import WordInfo from "./WordInfo";


const StyledGameArea = styled.div`
    width: 100%;
    max-width: 60vh;
    flex-grow: 1;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
`

const BoardArea = styled.div`
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
`

const GameArea = () => {
    return (
        <>
            <StyledGameArea>
                <BoardArea>
                    <WordInfo/>
                    <Board/>
                </BoardArea>
            </StyledGameArea>
                <CongratulationsScreen/>
        </>
    );
}

export default GameArea;