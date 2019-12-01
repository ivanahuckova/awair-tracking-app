import React from 'react';
import styled from 'styled-components';

//Assets
import { colors } from '../assets/colors'

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export function Button(props: ButtonProps) {
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>
}

const StyledButton = styled.button`
  display: flex;
  background-color: ${colors.green};
  color: white;
  padding: 10px 20px;
  margin: 0 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`