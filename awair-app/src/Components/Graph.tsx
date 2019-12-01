import React from 'react';
import styled from'styled-components';
import moment from 'moment'

import { ResponsiveContainer, CartesianGrid, XAxis, YAxis, ScatterChart, Scatter, Legend } from 'recharts';

interface GraphProps {
  data: {
    target: string;
    datapoints: TimeSeriesPair[]
  };
  index: number;
}

interface TimeSeriesPair {
  time: number;
  value: number;
}

export function Graph(props: GraphProps) {
  const colors = ['#F8C12D', '#8889DD', '#8DC77B', '#E2CE45', '#469ED6']
  const { datapoints, target } = props.data;
  const { index } = props;

  return (
  <Container style={{marginBottom: '70px'}}>
    <ResponsiveContainer width = {950} height = {250}>
      <ScatterChart>
      <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey = 'time'
          domain = {['auto', 'auto']}
          name = 'Time'
          tickFormatter = {(unixTime) => moment(unixTime).format('HH:mm Do')}
          type = 'number'
        />
        <YAxis dataKey = 'value' name = 'Value' />
        <Legend />
        <Scatter
          data = {datapoints}
          fill={colors[index]}
          name = {target}
        />
      </ScatterChart>
    </ResponsiveContainer>
  </Container>
  );
}

const Container = styled.div`
  margin-bottom: 70px;
`