import React from 'react';

//Components
import { DateSelection } from './DateSelection'
import { Graph } from './Graph'


interface MeasurmentsProps {
  to: string | Date;
  devices: any;
  measurments: any
  setTo: (to: any) => void;
  fetchMeasurmentsData: () => void;
  setMeasurments: (measurments: any) => void;
}

export function Measurments(props: MeasurmentsProps) {
  const { 
    to,
    setTo,
    devices,
    fetchMeasurmentsData,
    setMeasurments,
    measurments 
  } = props;

  const areDevicesFetched =  devices.length > 0;
  const areMeasurmentsFetched =  devices.length > 0;
  return (
    <>
      {areDevicesFetched && <DateSelection to={to} setTo={setTo} fetchMeasurmentsData={fetchMeasurmentsData} setMeasurments={setMeasurments}/>}
      {areMeasurmentsFetched && measurments.map((measurment: any, idx: any) => <Graph key={idx} data={measurment} index={idx} />)}
    </>
  );
}
