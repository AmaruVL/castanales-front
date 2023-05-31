import { DoughnutChart } from '@/components/charts';
import { Typography } from '@mui/material';

export const StatsCondicion = ({ data: { productivo, semillero } }) => {
  const configProductivo = {
    labels: ['Sí', 'No'],
    datasets: [
      {
        data: [productivo.si, productivo.no],
        backgroundColor: ['#1871cb', '#49a94d'],
      },
    ],
  };

  const configSemillero = {
    labels: ['Sí', 'No'],
    datasets: [
      {
        data: [semillero.si, semillero.no],
        backgroundColor: ['#1871cb', '#49a94d'],
      },
    ],
  };

  return (
    <div className="flex h-max w-full flex-col items-center justify-start">
      <Typography className="font-semibold">
        Condición de los árboles
      </Typography>
      <section className="grid min-[680px]:grid-cols-2">
        <div className="flex w-full flex-col items-center">
          <Typography className="text-light-gray">Productivo</Typography>
          <DoughnutChart className="h-full w-full" data={configProductivo} />
        </div>
        <div className="flex w-full flex-col items-center">
          <Typography className="text-light-gray">Semillero</Typography>
          <DoughnutChart className="h-full w-full" data={configSemillero} />
        </div>
      </section>
    </div>
  );
};
