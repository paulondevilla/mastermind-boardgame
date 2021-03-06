import { useContext } from 'react';
import { GameContext } from '../providers/gameProvider';
import styled from 'styled-components';
import BoardRow from './BoardRow';
import ActiveRow from './ActiveRow';

export default function Board() {
  const { guesses, dummyRef } = useContext(GameContext);

  return (
    <Container>
      {guesses && guesses.map((guess, i) => <BoardRow key={i} guess={guess} />)}
      {guesses.length < 12 && <ActiveRow />}
      <div ref={dummyRef}></div>
      {Array.from({ length: 11 - guesses.length }, (_, i) => (
        <BoardRow key={i} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: min(100%, 460px);
  padding: 2em;
  border-radius: 2em;
  margin-bottom: 1em;
  box-shadow: inset 8px 8px 16px var(--shadowBg),
    inset -8px -8px 16px var(--highlightBg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
