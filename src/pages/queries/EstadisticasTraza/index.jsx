import { useEffect, useState } from 'react';
import { Divider } from '@mui/material';
import { ForestRounded, OpacityRounded } from '@mui/icons-material';
import { Autocomplete } from '@/components/mui/Autocomplete';
import { useGetPersonas, useGetStatsById } from '@/hooks';
import {
  CardStats,
  StatsCondicion,
  StatsMobilSanidad,
  StatsMobilUbicacion,
  StatsSanidad,
  StatsUbicacion,
} from './components';

export const EstadistiasTraza = () => {
  const { data = [], refetch: refetchPersonas } = useGetPersonas(false);
  const todosObj = { razon_social: 'TODOS', dni_ruc: '-1' };
  const dataPersonas = [todosObj, ...data];
  const [selected, setSelected] = useState([todosObj]);
  let { data: dataStats, refetch: refetchStats } = useGetStatsById(
    selected.dni_ruc,
    false,
  );
  useEffect(() => {
    refetchPersonas();
  }, []);

  useEffect(() => {
    refetchStats();
  }, [selected]);

  return (
    <>
      <div className="flex w-full justify-center">
        <Autocomplete
          className="w-full max-w-[600px]"
          data={dataPersonas}
          propShow="razon_social"
          label="Comunero"
          setSelected={setSelected}
          defaultValue={todosObj}
        />
      </div>
      <Divider className="my-5 max-md:my-3" />
      {!dataStats ? (
        <h1>Cargando</h1>
      ) : (
        <>
          <div className="mb-5 grid gap-5 md:grid-cols-2">
            <CardStats
              value={dataStats.totalArboles}
              text="Total de árboles"
              Icon={ForestRounded}
            />
            <CardStats
              value={dataStats.totalProduccionCastanas}
              text="Total producción de castañas (latas)"
              Icon={OpacityRounded}
            />
          </div>
          <Divider className="my-6 max-md:my-3" />

          <div className="grid gap-5 gap-x-10 min-[1025px]:grid-cols-2">
            <StatsCondicion data={dataStats.condicionArboles} />
            <div className="max-md:hidden">
              <StatsUbicacion data={dataStats.detallesUbicacion} />
            </div>
            <div className="md:hidden">
              <Divider className="my-8 max-md:my-3" />
              <StatsMobilUbicacion data={dataStats.detallesUbicacion} />
            </div>
          </div>
          <Divider className="my-6 max-md:my-3" />
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
