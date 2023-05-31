import { BarChart } from '@/components/charts';
import { Typography } from '@mui/material';

export const StatsSanidad = ({
  data: { estadoSalud, etapaVida, lianas, ramaCaida },
}) => {
  const configSanidad = {
    labels: ['Etapa de vida', 'Estado de salud', 'Rama caida', 'Lianas'],
    datasets: [
      {
        label: 'Juvenil',
        data: [etapaVida.juvenil],
        backgroundColor: ['#b21700'],
        barPercentage: 0.8,
      },
      {
        label: 'Maduro',
        data: [etapaVida.maduro],
        backgroundColor: ['#ff2100'],
        barPercentage: 0.8,
      },
      {
        label: 'Sano',
        data: [, estadoSalud.sano],
        backgroundColor: ['#0066cc'],
        barPercentage: 0.8,
      },
      {
        label: 'Enfermo',
        data: [, estadoSalud.enfermo],
        backgroundColor: ['#009bfe'],
        barPercentage: 0.8,
      },
      {
        label: 'Muerto',
        data: [, estadoSalud.muerto],
        backgroundColor: ['#b3b3b3'],
        barPercentage: 0.8,
      },
      {
        label: 'Sí',
        data: [, , ramaCaida.si, lianas.si],
        backgroundColor: ['#b29000'],
        barPercentage: 0.8,
      },
      {
        label: 'No',
        data: [, , ramaCaida.no, lianas.no],
        backgroundColor: ['#ffcf00'],
        barPercentage: 0.8,
      },
    ],
  };

  const optionsSanidad = {
    indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  return (
    <>
      <div className="mt-5 flex flex-col items-center">
        <Typography className="mb-3 font-semibold text-dark-gray">
          Condición de fitosanidad
        </Typography>
        <BarChart
          className="flex h-full w-5/6 justify-center"
          data={configSanidad}
          options={optionsSanidad}
          height="100px"
        />
      </div>
    </>
  );
};
