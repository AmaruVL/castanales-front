import { Avatar, CircularProgress, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ContenidoTraza } from './components';
import { useGetTrazaByIdArbol } from '../../../hooks/useTraza';
import { CloseRounded } from '@mui/icons-material';

export const ConsultaTraza = () => {
  const { idArbol } = useParams();

  // Verificar si es un ID correcto
  const regex = /^[A-Z]+[-]\d+[-][A-Z]+$/;
  const isValidId = regex.test(idArbol);
  if (!isValidId)
    return (
      <div className="flex items-center max-md:justify-center gap-4">
        <Avatar className="bg-[#f67273]">
          <CloseRounded />
        </Avatar>
        {/* <Typography>El Id no es válido</Typography> */}

        <Typography className="text-base">
          El Id <code className="font-semibold text-[#f67273]">{idArbol}</code> no es válido
        </Typography>
      </div>
    );

  let {
    data: datosTraza = [],
    error,
    refetch,
    isLoading,
    isSuccess,
    isError,
  } = useGetTrazaByIdArbol(idArbol, false);

  useEffect(() => {
    refetch();
  }, []);

  console.log({ isValidId, isLoading, isSuccess, isError, error });

  return (
    <>
      {isSuccess && <ContenidoTraza data={datosTraza} />}
      {isLoading && (
        <div className="mt-5 flex gap-3 h-screen">
          <CircularProgress size={25} sx={{ color: '#477961' }} />
          <span>Buscando...</span>
        </div>
      )}
      {isError && <h1 className="mt-5 h-screen">No se encontró información</h1>}
    </>
  );
};
