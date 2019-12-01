import React from 'react';
import styled from 'styled-components';

//Assets
import { colors } from '../assets/colors'
import awairImg from '../assets/images/awair.jpg'

interface AwairCardProps {
  deviceType: string;
  deviceId: number;
  activeDevice:  any;
  setActiveDevice: (info: any) => void;
}

export function AwairCard(props: AwairCardProps) {
  const {setActiveDevice, deviceId, deviceType, activeDevice} = props;
  const IsactiveDevice =  activeDevice && activeDevice.deviceId === deviceId && activeDevice.deviceType === deviceType;
  return (
  <Container onClick={() => setActiveDevice({deviceId, deviceType})} >
    <div className={IsactiveDevice ? 'active' : ''}>{deviceType}</div>
    <img alt="Awair device" src={awairImg}/>
  </Container>
  )}

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 20%;
    padding: 10px;
    margin-top: 30px;
    border: 2px solid transparent;
    cursor: pointer;
    :hover {
      div {
        color: ${colors.orange}
      }
    }
    .active {
      color: orange;
    }
    img {
      width: 100%
    }
    div {
      color:${colors.purple};
      
    }

  `

