import { useEffect } from 'react';
import styled from 'styled-components';
import Button from './Buttons';
import Popup, { usePopupTransition } from './Popup';

const StyledTopBar = styled.div`
    width: 100%;
    background-color: var(--clr-square);
    border-bottom: 1px solid var(--clr-border);
    display: flex;
    align-items: center;
    padding: 0.375rem 0.75rem;
    gap: 0.625rem;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 1.375rem;
    font-weight: 700;
    flex: 1;
`;

const Buttons = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    height: 1.25rem;
    width: 1.25rem;
`;

function TopBar({ darkMode, setDarkMode }) {
  const [helpState, toggleHelp] = usePopupTransition();
  const [yesterdayState, toggleYesterday] = usePopupTransition();
  const [shareState, toggleShare] = usePopupTransition();

  useEffect(() => {
    const visitedFlag = window.localStorage.getItem('visitedFlag');
    if (!visitedFlag) {
      toggleHelp(true);
      window.localStorage.setItem('visitedFlag', 1);
    }
  }, [toggleHelp]);

  return (
    <StyledTopBar>
      <Title>fillword_test</Title>
      <Button />
    </StyledTopBar>
  );
}

export default TopBar;
