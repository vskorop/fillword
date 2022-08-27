import styled from 'styled-components';
import PartyIcon from '../icons/PartyIcon';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`;
const Title = styled.h2`
    font-weight: 700;
    font-size: 1.5rem;
    margin: 0;
`;
const P = styled.p`
    font-weight: 400;
    font-size: 1rem;
    margin: 0.25rem;
`;
const IconContainer = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
    flex: 1;
`;
function CongratulationsScreen() {
  return (
    <Container>
      <Title>УРА!</Title>
      <P>Вы нашли все слова!</P>
      <IconContainer>
        <PartyIcon />
      </IconContainer>
    </Container>
  );
}

export default CongratulationsScreen;
