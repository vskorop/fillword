import styled from 'styled-components';
import { useSelector } from 'react-redux';
import Square from './Square';

function Board() {
  const size = useSelector((store) => store.word);
  const Container = styled.div`
    width: 100%;
    height: 0;
    padding-top: 100%;
    position: relative;
`;
  const StyledBoard = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(${size}, 1fr);
    grid-gap: 0.3rem;
`;
  return (
    <Container>
      <StyledBoard>
        {[...Array(size * size)].map((_, index) => (
          <Square
            key={index}
            x={index % size}
            y={size - Math.floor(index / size) - 1}
          />
        ))}
      </StyledBoard>
    </Container>
  );
}

export default Board;
