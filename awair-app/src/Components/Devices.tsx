import React from 'react';
import styled from'styled-components';

//Components
import { Button } from './Button'
import { AwairCard } from './AwairCard'

//Types
import { ActiveDevice } from '../types/types'

//Assets
import { texts } from '../assets/texts'

interface DevicesProps {
  devices: any;
  activeDevice: ActiveDevice;
  fetchDevicesData: () => void;
  setActiveDevice: (activeDevice: ActiveDevice) => void;
}

export function Devices(props: DevicesProps) {
  const { devices, fetchDevicesData, activeDevice, setActiveDevice } = props;
  const areDevicesFetched =  devices.length > 0;
  return (
    <>
      {!areDevicesFetched && <Button text={texts.seeDevices} onClick={fetchDevicesData}></Button>}
      <Container>{areDevicesFetched && devices.map((device: any, idx: number) => <AwairCard key={idx} activeDevice={activeDevice} setActiveDevice={setActiveDevice}  deviceType={device.deviceType} deviceId={device.deviceId} />)}</Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`