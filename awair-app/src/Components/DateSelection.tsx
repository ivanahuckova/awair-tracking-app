import React from 'react';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';

//Components
import { Button } from './Button';

//Assets
import "react-datepicker/dist/react-datepicker.css";
import { colors } from '../assets/colors'
import { texts } from '../assets/texts';

interface DateSelectionProps {
  to: any;
  setTo: any;
  fetchMeasurmentsData: any;
  setMeasurments: (data: any) => void
}

export function DateSelection(props: DateSelectionProps) {

  const { fetchMeasurmentsData, to, setTo } = props;

  return (
    <Container>
      <Button onClick={fetchMeasurmentsData} text={texts.showMeasurments}></Button>
      <DatePicker className="datepicker" selected={to} onChange={date => setTo(date)} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 50px 0;
  .react-datepicker__header {
    background-color: ${colors.purple};
    color: white;
  }
  .react-datepicker__current-month {
    color: white;
  }
  .react-datepicker__day-name {
    color: white;
    
  }
  .react-datepicker__day--selected {
    background-color: ${colors.purple};
    color: white;
  }
  `