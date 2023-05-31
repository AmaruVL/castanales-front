import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughnutChart = ({ data, options = {}, className = '' }) => {
  return (
    <div className={className}>
      <Doughnut data={data} options={options} />
    </div>
  );
};
