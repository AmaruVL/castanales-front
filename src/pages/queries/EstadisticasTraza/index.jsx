import { useEffect, useState } from 'react';
import { useGetPersonas, useGetStatsById } from '@/hooks';
import { ContenidoStats } from './components/ContenidoStats';
import { CircularProgress } from '@mui/material';
import { ErrorMessage, NoDataImage } from '@/components';

export const EstadistiasTraza = () => {
  const { data = [], refetch: refetchPersonas } = useGetPersonas(false);
  const todosObj = { razon_social: 'TODOS', dni_ruc: '-1' };
  const dataPersonas = [todosObj, ...data];
  const [selected, setSelected] = useState([todosObj]);
  const {
    data: dataStats = [],
    refetch: refetchStats,
    isError,
    isSuccess,
    isLoading,
  } = useGetStatsById(selected.dni_ruc, false);

  useEffect(() => {
    refetchPersonas();
  }, [refetchPersonas]);

  useEffect(() => {
    refetchStats();
  }, [refetchStats, selected]);

  return (
    <>
      {isSuccess && dataStats && (
        <ContenidoStats
          dataStats={dataStats}
          dataPersonas={dataPersonas}
          todosObj={todosObj}
          setSelected={setSelected}
        />
      )}
      {(isLoading || !dataStats) && (
        <div className="mt-5 flex h-screen gap-3">
          <CircularProgress size={25} sx={{ color: '#477961' }} />
          <span>Buscando...</span>
        </div>
      )}
      {isError && (
        <div className="flex w-full flex-col">
          <ErrorMessage msg="Algo salió mal, intentelo de nuevo más tarde." />
          <NoDataImage />
        </div>
      )}
    </>
  );
};
