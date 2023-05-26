import waveBottom from '@/assets/waves/waveBottom2.svg';
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Inicio = () => {
  return (
    <>
      <div className="bg-landing bg-cover w-full h-screen flex flex-col justify-between">
        <div className="h-full flex flex-col justify-center items-center text-center text-white p-5">
          <Typography className="text-5xl max-md:text-4xl font-bold leading-snug">
            Comunidad Nativa de Infierno
          </Typography>
          <Typography className="text-2xl max-md:text-xl font-extralight my-10 leading-normal">
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
        <footer className="w-full max-h-[160px] overflow-hidden">
          <img className="object-cover object-top w-full" src={waveBottom} />
        </footer>
      </div>
    </>
  );
};
