import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale, //y axis
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

// ChartJS.defaults.datasets.bar.barThickness = 33;

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale, //y axis
  Tooltip,
  Legend,
);

export const BarChart = ({
  data,
  options = {},
  className = '',
  width = '',
  height = '',
}) => {
  return (
    <div className={className}>
      <Bar data={data} options={options} width={width} height={height} />
    </div>
  );
};
