import { Paper, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';
import waveBottom from '@/assets/waves/waveBottom.svg';

export const LayoutQuery = () => {
  return (
    <div className="flex h-fit min-h-screen flex-col justify-between bg-white2">
      <header className="flex rounded-b-2xl bg-primary text-center text-[white] drop-shadow-lg max-md:flex-col">
        <Link
          className="rounded-b-2xl font-bold duration-300 hover:bg-dark-gray max-md:pt-2 md:rounded-tr-2xl md:p-4 "
          to="/"
        >
          Comunidad Nativa de Infierno
        </Link>
        <Typography className="max-md:pb-1 md:absolute md:right-[42%] md:p-4">
          Consulta de trazabilidad
        </Typography>
      </header>
      <Paper
        className="mb-10 mt-5 h-fit w-full grow self-center p-10 drop-shadow-2xl max-md:p-5 md:w-5/6"
        elevation={0}
      >
        <Outlet />
      </Paper>
      <footer className="relative flex max-h-[160px] justify-center">
        <img className="w-full object-cover object-top" src={waveBottom} />
        <Typography className="absolute bottom-4 text-[white] max-md:text-sm max-sm:bottom-2">
          Todos los derechos reservados - 2023
        </Typography>
      </footer>
    </div>
  );
};
