import { useEffect, useState } from 'react';
import { Autocomplete } from '@/components/mui/Autocomplete';
import { useGetPersonas, useGetStatsById } from '@/hooks';
import {
  StatsCondicion,
  StatsMobilSanidad,
  StatsMobilUbicacion,
  StatsSanidad,
  StatsUbicacion,
} from './components';

export const EstadistiasTraza = () => {
  const [selected, setSelected] = useState([]);
  const { data: dataPersonas = [], refetch: refetchPersonas } =
    useGetPersonas(false);
  // const {
  //   data: {
  //     totalArboles,
  //     totalProduccionCastanas,
  //   } = [],
  // } = useGetStatsById('-1', true);
  const { data: dataStats, refetch: refetchStats } = useGetStatsById(
    '-1',
    false,
  );

  useEffect(() => {
    refetchPersonas();
    refetchStats();
  }, []);

  return (
    <>
      <Autocomplete
        data={dataPersonas}
        propShow="razon_social"
        label="Comunero"
        setSelected={setSelected}
      />
      {!dataStats ? (
        <h1>Cargando</h1>
      ) : (
        <>
          <div className="grid gap-5 min-[1025px]:grid-cols-2">
            <StatsCondicion data={dataStats.condicionArboles} />
            <div className="max-md:hidden">
              <StatsUbicacion data={dataStats.detallesUbicacion} />
            </div>
            <div className="md:hidden">
              <StatsMobilUbicacion data={dataStats.detallesUbicacion} />
            </div>
          </div>
          <div className="max-md:hidden">
            <StatsSanidad data={dataStats.condicionFitosanitaria} />
          </div>
          <div className="md:hidden">
            <StatsMobilSanidad data={dataStats.condicionFitosanitaria} />
          </div>
        </>
      )}
    </>
  );
};
