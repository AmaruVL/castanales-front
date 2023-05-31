import { BarChart } from '@/components/charts';
import { Typography } from '@mui/material';

export const StatsMobilUbicacion = ({ data }) => {
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
        <Typography className="my-3 font-semibold text-dark-gray">
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
