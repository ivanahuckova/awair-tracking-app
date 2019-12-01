import React, { useState } from 'react';
import styled from'styled-components';

//Components
import { AppContainer } from './Components/AppContainer'

//Utils
import { fetchData } from './utils/fetch'

//Other
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiRFVNTVktSE9CQllJU1QifQ.hzjhIpGljqCZ8vCrOr89POy_ENDPYQXsnzGslP01krI'

export default function App() {
  const [token, setToken] = useState(TOKEN)
  const [to, setTo] = useState(new Date())
  const [loading, setLoading] = useState(false)
  const [measurments, setMeasurments] = useState([])
  const [devices, setDevices] = useState([])
  const [activeDevice, setActiveDevice] = useState({deviceType: '', deviceId: 0})

  const fetchDevicesData = () => {
    fetchData({urlAppendix: 'sensors', setData: setDevices, setLoading, parameters: { token } })
  }

  const fetchMeasurmentsData = () => {
    fetchData({urlAppendix: 'data', setData: setMeasurments, setLoading, parameters: {token, from: '2012-11-29T10:01:30', to: to.toISOString(), activeDevice} })
    
  }

  return (
    <Container>
      <AppContainer
        to={to}
        setTo={setTo}
        token={token}
        setToken={setToken}
        devices={devices}
        fetchDevicesData={fetchDevicesData}
        activeDevice={activeDevice}
        setActiveDevice={setActiveDevice}
        fetchMeasurmentsData={fetchMeasurmentsData}
        measurments={measurments}
        setMeasurments={setMeasurments}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: auto;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px 20px;
`