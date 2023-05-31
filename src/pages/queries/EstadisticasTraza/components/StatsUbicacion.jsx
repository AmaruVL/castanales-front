import { BarChart } from '@/components/charts';
import { Typography } from '@mui/material';

export const StatsUbicacion = ({ data }) => {
  //TODO: Mejorar solución
  const cercaAAreaDeforestada = data?.cercaAAreaDeforestada;
  const cercaACarretera = data?.cercaACarretera;
  const dentroAAreaDeforestada = data?.dentroAAreaDeforestada;
  const enEstrada = data?.enEstrada;

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
          cercaAAreaDeforestada?.si,
          cercaACarretera?.si,
          dentroAAreaDeforestada?.si,
          enEstrada?.si,
        ],
        backgroundColor: ['#fdba74'],
      },
      {
        label: 'No',
        data: [
          cercaAAreaDeforestada?.no,
          cercaACarretera?.no,
          dentroAAreaDeforestada?.no,
          enEstrada?.no,
        ],
        backgroundColor: ['#3b82f6'],
      },
    ],
  };

  return (
    <>
      <div className="flex h-full flex-col items-center">
        <Typography className="mb-3 font-semibold text-dark-gray">
          Detalles de ubicación
        </Typography>
        <BarChart
          className="flex h-full w-full justify-center"
          data={configUbicacion}
        />
      </div>
    </>
  );
};
