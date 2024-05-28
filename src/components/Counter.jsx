import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/action/CounterAcrtion';
import { styled } from 'styled-components';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state);
  return (
    <StyledDiv>
      <Button onClick={() => dispatch(increment())} variant="outlined">
        +
      </Button>
      <span>{count}</span>
      <Button onClick={() => dispatch(decrement())} variant="outlined">
        -
      </Button>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    span {
        font-size: 35px;
    }
`