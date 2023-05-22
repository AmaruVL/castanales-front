import { Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import waveBottom from '../../../assets/waves/waveBottom.svg';

export const LayoutQuery = () => {
  return (
    <div className="h-fit flex flex-col justify-between bg-[#f8fcf6]">
      <header className="flex bg-[#477961] rounded-b-2xl max-md:flex-col text-center drop-shadow-lg">
        <Typography className="md:p-4 max-md:pt-2 pl-5 text-[#fff] font-bold">
          Comunidad Nativa de Infierno
        </Typography>
        <Typography className="md:p-4 md:ml-10 max-md:pb-1 text-[#fff]">
          Consulta de trazabilidad
        </Typography>
      </header>
      <section className="mt-5 mb-10 h-full w-full md:w-5/6 self-center">
        <Outlet />
      </section>
      <footer className="relative flex justify-center max-h-[160px]">
        <img className="object-cover object-top w-full" src={waveBottom} />
        <Typography className="text-[#fff] max-md:text-sm absolute bottom-4 max-sm:bottom-2">
          Todos los derechos reservados - 2023
        </Typography>
      </footer>
    </div>
  );
};
