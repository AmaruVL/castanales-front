import { Paper, Typography } from '@mui/material';
import { Outlet } from 'react-router-dom';
import waveBottom from '@/assets/waves/waveBottom.svg';

export const LayoutQuery = () => {
  return (
    <div className="h-fit min-h-screen flex flex-col justify-between bg-[#f8fcf6]">
      <header className="flex bg-[#477961] rounded-b-2xl max-md:flex-col text-center drop-shadow-lg">
        <Typography className="md:p-4 max-md:pt-2 pl-5 text-[#fff] font-bold">
          Comunidad Nativa de Infierno
        </Typography>
        <Typography className="md:p-4 md:ml-10 max-md:pb-1 text-[#fff]">
          Consulta de trazabilidad
        </Typography>
      </header>
      <Paper
        className="mt-5 mb-10 p-7 h-fit md:w-5/6 w-full grow self-center drop-shadow-2xl"
        elevation={0}>
        <Outlet />
      </Paper>
      <footer className="relative flex justify-center max-h-[160px]">
        <img className="object-cover object-top w-full" src={waveBottom} />
        <Typography className="text-[#fff] max-md:text-sm absolute bottom-4 max-sm:bottom-2">
          Todos los derechos reservados - 2023
        </Typography>
      </footer>
    </div>
  );
};
