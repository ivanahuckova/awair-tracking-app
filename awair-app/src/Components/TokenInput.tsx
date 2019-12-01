import React from 'react';
import styled from 'styled-components';

//Assets
import { colors } from '../assets/colors'

interface TokenInputProps {
  token: string;
  setToken: (token: string) => void;
}

export function TokenInput(props: TokenInputProps) {
  const {setToken, token} = props
  return <StyledInput type="text" value={token} onChange={(e) => setToken(e.target.value)}></StyledInput>
}

const StyledInput = styled.input`
  display: flex;
  color: ${colors.blue};
  padding: 10px;
  width: 70%;
  margin: 20px 10px;
  border-radius: 5px;
  border:  2px solid ${colors.blue};
  cursor: text;
`