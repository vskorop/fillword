import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useGame } from '../providers/GameProvider';

const StyledSquare = styled.div`
    background-color: ${(props) => (props.active ? 'var(--clr-square-active)' : 'var(--clr-square)')};
    border: 0.25rem solid ${(props) => (props.active ? 'var(--clr-primary)' : 'var(--clr-border)')};
    border-radius: 7%;
    position: relative;
    touch-action: none;
`;

const Inner = styled.div.attrs((props) => ({
  style: {
    fontSize: props.fontSize,
  }
}))`
    color: ${(props) => (props.active ? 'var(--clr-primary)' : 'var(--clr-text)')};
    font-weight: 700;
    width: 100%;
    height: 100%;
    border-radius: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
`;
function Square({ x, y }) {
  const [fontSize, setFontSize] = useState(0);
  const squareRef = useRef(null);

  const {
    getSquareInfo, squareClicked, squareEntered, submitWord
  } = useGame();
  const { letter, active } = getSquareInfo(x, y);
  const calcFontSize = () => {
    if (squareRef.current) {
      const rect = squareRef.current.getBoundingClientRect();
      setFontSize(rect.width * 0.5);
    }
  };

  useEffect(() => {
    calcFontSize();
    window.addEventListener('resize', calcFontSize);
    return () => window.removeEventListener('resize', calcFontSize);
  }, []);

  // handle mouse events
  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    squareClicked(x, y);
  };

  const handleMouseMove = () => {
    squareEntered(x, y);
  };

  // convert touch events into mouse events
  const handleTouchStart = (e) => {
    const touch = e.changedTouches[0];
    const simulatedEvent = new MouseEvent('mousedown', {
      bubbles: true,
      cancelable: true,
      view: window,
      detail: 1,
      screenX: touch.screenX,
      screenY: touch.screenY,
      clientX: touch.clientX,
      clientY: touch.clientY,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      button: 0,
      relatedTarget: null
    });
    touch.target.dispatchEvent(simulatedEvent);
  };

  const handleTouchMove = (e) => {
    const touch = e.changedTouches[0];
    const simulatedEvent = new MouseEvent('mousemove', {
      bubbles: true,
      cancelable: true,
      view: window,
      detail: 1,
      screenX: touch.screenX,
      screenY: touch.screenY,
      clientX: touch.clientX,
      clientY: touch.clientY,
      ctrlKey: false,
      altKey: false,
      shiftKey: false,
      metaKey: false,
      button: 0,
      relatedTarget: null
    });
    const element = document.elementFromPoint(touch.clientX, touch.clientY);
    if (element) {
      element.dispatchEvent(simulatedEvent);
    }
  };
  return (
    <StyledSquare
      ref={squareRef}
      active={active}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={submitWord}
      onMouseDown={handleMouseDown}
    >
      <Inner active={active} fontSize={fontSize} onMouseMove={handleMouseMove}>
        {letter}
      </Inner>
    </StyledSquare>
  );
}

export default Square;
