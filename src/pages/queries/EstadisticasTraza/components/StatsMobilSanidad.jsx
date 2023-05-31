import { BarChart } from '@/components/charts';
import { Typography } from '@mui/material';

export const StatsMobilSanidad = ({
  data: { estadoSalud, etapaVida, lianas, ramaCaida },
}) => {
  const configSanidad = {
    labels: ['Etapa de vida', 'Estado de salud', 'Rama caida', 'Lianas'],
    datasets: [
      {
        label: 'Juvenil',
        data: [etapaVida.juvenil],
        backgroundColor: ['#b21700'],
      },
      {
        label: 'Maduro',
        data: [etapaVida.maduro],
        backgroundColor: ['#ff2100'],
      },
      {
        label: 'Sano',
        data: [, estadoSalud.sano],
        backgroundColor: ['#0066cc'],
      },
      {
        label: 'Enfermo',
        data: [, estadoSalud.enfermo],
        backgroundColor: ['#009bfe'],
      },
      {
        label: 'Muerto',
        data: [, estadoSalud.muerto],
        backgroundColor: ['#b3b3b3'],
      },
      {
        label: 'Sí',
        data: [, , ramaCaida.si, lianas.si],
        backgroundColor: ['#b29000'],
      },
      {
        label: 'No',
        data: [, , ramaCaida.no, lianas.no],
        backgroundColor: ['#ffcf00'],
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
        <Typography className="font-semibold text-dark-gray">
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
