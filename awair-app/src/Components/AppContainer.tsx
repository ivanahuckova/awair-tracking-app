import React from 'react';
import styled from'styled-components';

//Components
import { Header } from './Header'
import { TokenInput } from './TokenInput'
import { Devices } from './Devices'
import { Measurments } from './Measurments';

//Types
import { ActiveDevice } from '../types/types'

interface AppContainerProps {
  to: string | Date;
  token: string;
  devices: any;
  activeDevice: ActiveDevice
  measurments: any
  setTo: (to: any) => void;
  fetchDevicesData: () => void;
  fetchMeasurmentsData: () => void;
  setToken: (token: string) => void;
  setMeasurments: (measurments: any) => void;
  setActiveDevice: (activeDevice: ActiveDevice) => void;
}

export function AppContainer(props: AppContainerProps) {
  const { 
    to,
    setTo,
    token,
    setToken,
    devices,
    fetchDevicesData,
    activeDevice,
    setActiveDevice,
    fetchMeasurmentsData,
    setMeasurments,
    measurments 
  } = props;
  
  return (
    <Container>
      <Header />
      <TokenInput token={token} setToken={setToken}></TokenInput>
      <Devices devices={devices} fetchDevicesData={fetchDevicesData} activeDevice={activeDevice} setActiveDevice={setActiveDevice}></Devices>
      <Measurments devices={devices}  to={to} setTo={setTo} fetchMeasurmentsData={fetchMeasurmentsData} measurments={measurments} setMeasurments={setMeasurments}></Measurments>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 65%;
  height: auto;
  flex-direction: column;
  align-items: center;
`
