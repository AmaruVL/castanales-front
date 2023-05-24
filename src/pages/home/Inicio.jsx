import waveBottom from '@/assets/waves/waveBottom2.svg';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <>
      <div className="bg-landing bg-cover w-full h-screen flex justify-center">
        <div className="text-[white] absolute top-48 flex flex-col items-center justify-between text-center px-5 h-52 max-md:h-72">
          <Typography className="text-5xl font-bold leading-snug">
            Comunidad Nativa de Infierno
          </Typography>
          <Typography className="text-2xl font-extralight my-10 leading-normal">
            Ordenamiento Castañero de la Comunidad Nativa de Infierno
          </Typography>
          <Link
            className="bg-[white] hover:bg-dark-gray duration-300 rounded-lg mt-4"
            to="/consultatraza">
            <Typography className="text-primary hover:text-[white] font-bold text-lg px-10 py-4">
              Consultar
            </Typography>
          </Link>
        </div>
        <footer className="absolute bottom-0 w-full max-h-[160px] overflow-hidden">
          <img className="object-cover object-top w-full" src={waveBottom} />
        </footer>
      </div>
    </>
  );
};
