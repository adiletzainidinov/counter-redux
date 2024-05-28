import React from 'react';
import Counter from './components/Counter';
import { styled } from 'styled-components';

export default function () {
  return (
    <StyledDiv>
      <Counter />
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90vh;
`