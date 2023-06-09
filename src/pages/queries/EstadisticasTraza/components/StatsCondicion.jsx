import { DoughnutChart } from '@/components/charts';
import { Typography } from '@mui/material';

export const StatsCondicion = ({ data }) => {
  //TODO: Mejorar solución
  const productivo = data?.productivo;
  const semillero = data?.semillero;

  const configProductivo = {
    labels: ['Sí', 'No'],
    datasets: [
      {
        data: [productivo?.si, productivo?.no],
        backgroundColor: ['#3b82f6', '#5d9f7f'],
      },
    ],
  };

  const configSemillero = {
    labels: ['Sí', 'No'],
    datasets: [
      {
        data: [semillero?.si, semillero?.no],
        backgroundColor: ['#3b82f6', '#5d9f7f'],
      },
    ],
  };

  return (
    <div className="flex w-full flex-col items-center justify-start">
      <Typography className="mb-3 font-semibold text-dark-gray">
        Condición de los árboles
      </Typography>
      <section className="grid gap-4 min-[680px]:grid-cols-2">
        <div className="flex w-full flex-col items-center">
          <Typography className="text-sm text-light-gray">
            Productivo
          </Typography>
          <DoughnutChart
            className="h-full max-h-[260px] w-full"
            data={configProductivo}
          />
        </div>
        <div className="flex w-full flex-col items-center">
          <Typography className="text-sm text-light-gray">Semillero</Typography>
          <DoughnutChart
            className="h-full max-h-[260px] w-full"
            data={configSemillero}
          />
        </div>
      </section>
    </div>
  );
};
