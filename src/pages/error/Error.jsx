import { Link, useRouteError } from 'react-router-dom';
import notFoundBackground from '@/assets/images/notFound.svg';
import { Typography } from '@mui/material';

export const Error = () => {
  // const error = useRouteError();
  return (
    <>
      {/* <h1>Error</h1> */}
      {/* <p>{error.statusText || error.message}</p> */}
      <div className="flex flex-col items-center justify-center gap-6 h-screen text-center p-5">
        <img src={notFoundBackground} alt="404 Not Found" className="w-1/3 max-md:w-4/5" />
        <Typography className="font-bold text-5xl max-md:text-3xl text-[#3f3d56] mt-4">
          PÁGINA NO ENCONTRADA
        </Typography>
        <Typography className='text-lg text-dark-gray'>La página que está buscando no existe</Typography>
        <Link
          className="bg-primary hover:bg-dark-gray duration-300 rounded-lg mt-4"
          to="/">
          <Typography className="text-white hover:text-white font-bold text-lg px-9 py-4">
            Volver al inicio
          </Typography>
        </Link>
      </div>
    </>
  );
};
