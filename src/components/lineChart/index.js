import React from "react";
import { Line } from '@ant-design/charts';

const LineChart = () => {
  const data = [
    { time: '02:30 AM', value: 4.9 },
    { time: '05:30 AM', value: 6 },
    { time: '08:30 AM', value: 3 },
    { time: '11:30 AM', value: 9 },
    { time: '02:30 PM', value: 4 },
    { time: '05:30 PM', value: 4 },
    { time: '10:02 AM', value: 7 },
  ];
  const config = {
    data,
    height: 300,
    xField: 'time',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
  };
  return(
    <Line {...config} />
  )
}
export default LineChart;