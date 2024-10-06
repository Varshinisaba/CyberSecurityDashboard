// src/ChartComponent.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartComponent = () => {
  const data = {
    labels: ['Threat A', 'Threat B', 'Threat C'],
    datasets: [
      {
        label: 'Threat Levels',
        data: [65, 59, 80],
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return <Bar data={data} />;

};

export default ChartComponent;
