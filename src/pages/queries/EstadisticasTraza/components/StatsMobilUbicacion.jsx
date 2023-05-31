import { BarChart } from '@/components/charts';
import { Typography } from '@mui/material';

export const StatsMobilUbicacion = ({
  data: {
    cercaAAreaDeforestada,
    cercaACarretera,
    dentroAAreaDeforestada,
    enEstrada,
  },
}) => {
  const configUbicacion = {
    labels: [
      ['Cerca a area', ' deforestada'],
      ['Cerca a', 'carretera'],
      ['Dentro de area', 'deforestada'],
      'En estrada',
    ],
    datasets: [
      {
        label: 'Sí',
        data: [
          cercaAAreaDeforestada.si,
          cercaACarretera.si,
          dentroAAreaDeforestada.si,
          enEstrada.si,
        ],
        backgroundColor: ['#f4b907'],
      },
      {
        label: 'No',
        data: [
          cercaAAreaDeforestada.no,
          cercaACarretera.no,
          dentroAAreaDeforestada.no,
          enEstrada.no,
        ],
        backgroundColor: ['#1871cb'],
      },
    ],
  };

  const optionsUbicacion = {
    scales: {
      x: {
        ticks: {
          maxRotation: 90,
          minRotation: 90,
        },
      },
    },
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <Typography className="font-semibold text-dark-gray">
          Detalles de ubicación
        </Typography>
        <BarChart
          className="flex h-full w-full justify-center"
          data={configUbicacion}
          options={optionsUbicacion}
          height="450px"
        />
      </div>
    </>
  );
};
