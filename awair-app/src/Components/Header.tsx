import React from 'react';
import styled from 'styled-components';

//Assets
import { colors } from '../assets/colors';
import { texts } from '../assets/texts';

interface HeadingProps {
  text: string
}

interface InfoProps {
  text: string
}

const Heading = (props: HeadingProps) => {
  return <StyledHeading>{props.text}</StyledHeading>
}


const Info = (props: InfoProps) => {
  return <StyledInfo>{props.text}</StyledInfo>
}

export function Header() {
  return  (
    <StyledHeader>
      <Heading text={texts.mainHeading}/>
      <Info text={texts.connectAwair}/>
    </StyledHeader>
  )
}

const StyledHeading = styled.div`
  color: ${colors.blue};
  text-align: center;
  font-size: 3em;
`

const StyledInfo = styled.div`
  color: ${colors.purple};
  margin: 50px 0 30px 0;
  line-height: 1.8;
  text-align: center;
`
const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
