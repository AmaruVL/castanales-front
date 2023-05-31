import { BarChart } from '@/components/charts';
import { Typography } from '@mui/material';

export const StatsMobilSanidad = ({ data }) => {
  //TODO: Ocurre error, mejorar esta solución
  const estadoSalud = data?.estadoSalud;
  const etapaVida = data?.etapaVida;
  const lianas = data?.lianas;
  const ramaCaida = data?.ramaCaida;

  const configSanidad = {
    labels: ['Etapa de vida', 'Estado de salud', 'Rama caida', 'Lianas'],
    datasets: [
      {
        label: 'Juvenil',
        data: [etapaVida?.juvenil],
        backgroundColor: ['#b91c1c'],
      },
      {
        label: 'Maduro',
        data: [etapaVida?.maduro],
        backgroundColor: ['#ef4444'],
      },
      {
        label: 'Sano',
        data: [, estadoSalud?.sano],
        backgroundColor: ['#1d4ed8'],
      },
      {
        label: 'Enfermo',
        data: [, estadoSalud?.enfermo],
        backgroundColor: ['#3b82f6'],
      },
      {
        label: 'Muerto',
        data: [, estadoSalud?.muerto],
        backgroundColor: ['#93c5fd'],
      },
      {
        label: 'Sí',
        data: [, , ramaCaida?.si, lianas?.si],
        backgroundColor: ['#f97316'],
      },
      {
        label: 'No',
        data: [, , ramaCaida?.no, lianas?.no],
        backgroundColor: ['#fdba74'],
      },
    ],
  };

  const optionsSanidad = {
    // indexAxis: 'y',
    scales: {
      x: {
        stacked: true,
        ticks: {
          maxRotation: 90,
          minRotation: 90,
        },
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
          className="flex h-full w-full justify-center"
          data={configSanidad}
          options={optionsSanidad}
          height="450px"
        />
      </div>
    </>
  );
};
