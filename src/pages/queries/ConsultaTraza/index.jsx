import { Typography } from '@mui/material';
import { PaginaTraza } from './components';
import waveBottom from '../../../assets/waves/waveBottom.svg';

export const ConsultaTraza = () => {
  return (
    <div className="h-fit flex flex-col bg-[#f8fcf6]">
      <div className="flex bg-[#477961] rounded-b-2xl max-md:flex-col text-center drop-shadow-lg">
        <Typography className="md:p-4 max-md:pt-2 pl-5 text-[#fff] font-bold">
          Comunidad Nativa de Infierno
        </Typography>
        <Typography className="md:p-4 md:ml-10 max-md:pb-1 text-[#fff]">
          Consulta de traza
        </Typography>
      </div>
      <div className="mt-4 mb-8 md:w-4/5 self-center">
        <PaginaTraza />
      </div>
      <div className="relative flex justify-center max-h-[160px]">
        <img className="object-cover object-top w-full" src={waveBottom} />
        <Typography className="text-[#fff] max-md:text-sm absolute bottom-4 max-sm:bottom-2">
          Todos los derechos reservados - 2023
        </Typography>
      </div>
    </div>
  );
};
