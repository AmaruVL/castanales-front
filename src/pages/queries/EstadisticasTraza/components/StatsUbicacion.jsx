import { BarChart } from '@/components/charts';
import { Typography } from '@mui/material';

export const StatsUbicacion = ({
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

  return (
    <>
      <div className="flex h-full flex-col items-center">
        <Typography className="font-semibold">Detalles de ubicación</Typography>
        <BarChart
          className="flex h-full w-full justify-center"
          data={configUbicacion}
        />
      </div>
    </>
  );
};
