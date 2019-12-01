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
    <div>
      <Heading text={texts.mainHeading}/>
      <Info text={texts.connectAwair}/>
    </div>
  )
}

const StyledHeading = styled.div`
  display: flex;
  color: ${colors.blue};
  font-size: 3em;
`

const StyledInfo = styled.div`
  display: flex;
  color: ${colors.purple};
  margin: 50px 0 30px 0;
  line-height: 1.8;
  text-align: center;
`