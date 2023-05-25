import { Paper, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import waveBottom from '@/assets/waves/waveBottom.svg';

export const LayoutQuery = () => {
  return (
    <div className="h-fit min-h-screen flex flex-col justify-between bg-white2">
      <header className="flex bg-primary text-[white] rounded-b-2xl max-md:flex-col text-center drop-shadow-lg">
        <Link
          className="md:p-4 max-md:pt-2 font-bold hover:bg-dark-gray rounded-b-2xl md:rounded-tr-2xl duration-300 "
          to="/">
          Comunidad Nativa de Infierno
        </Link>
        <Typography className="md:absolute md:p-4 md:right-[42%] max-md:pb-1">
          Consulta de trazabilidad
        </Typography>
      </header>
      <Paper
        className="mt-5 mb-10 p-10 max-md:p-5 h-fit md:w-5/6 w-full grow self-center drop-shadow-2xl"
        elevation={0}>
        <Outlet />
      </Paper>
      <footer className="relative flex justify-center max-h-[160px]">
        <img className="object-cover object-top w-full" src={waveBottom} />
        <Typography className="text-[white] max-md:text-sm absolute bottom-4 max-sm:bottom-2">
          Todos los derechos reservados - 2023
        </Typography>
      </footer>
    </div>
  );
};
