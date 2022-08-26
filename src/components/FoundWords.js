import styled from "styled-components";

const StyledFoundWords = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`

const Title = styled.h2`
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
`

const FoundWords = () => {

    return (
        <StyledFoundWords>
            <Title>Found words</Title>
        </StyledFoundWords>
    );
}

export default FoundWords;