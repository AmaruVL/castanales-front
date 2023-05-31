import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { ErrorMessage, NoDataImage } from '@/components';
import { useGetTrazaByIdArbol } from '@/hooks/useTrazabilidad';
import { ContenidoTraza } from './components';

export const ConsultaTraza = () => {
  const { idArbol } = useParams();

  // Verificar si es un ID correcto
  const regex = /^[A-Z]+[-]\d+[-][A-Z]+$/;
  const isValidId = regex.test(idArbol);

  if (!isValidId)
    return (
      <div className="flex w-full flex-col">
        <ErrorMessage
          msg="El árbol con ID"
          keyword={idArbol}
          submsg="no es válido"
        />
        <NoDataImage />
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

  return (
    <>
      {isSuccess && <ContenidoTraza data={datosTraza} />}
      {isLoading && (
        <div className="mt-5 flex h-screen gap-3">
          <CircularProgress size={25} sx={{ color: '#477961' }} />
          <span>Buscando...</span>
        </div>
      )}
      {isError &&
        (error?.request?.status === 404 ? (
          <div className="flex w-full flex-col">
            <ErrorMessage
              msg="El árbol con ID"
              keyword={idArbol}
              submsg="no existe"
            />
            <NoDataImage />
          </div>
        ) : (
          <div className="flex w-full flex-col">
            <ErrorMessage msg="Algo salió mal, intentelo de nuevo más tarde." />
            <NoDataImage />
          </div>
        ))}
    </>
  );
};
