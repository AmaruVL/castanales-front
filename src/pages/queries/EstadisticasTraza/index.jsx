import { useEffect, useState } from 'react';
import { useGetPersonas, useGetStatsById } from '@/hooks';
import { Autocomplete } from '@/components/mui/Autocomplete';
import { ForestRounded, OpacityRounded } from '@mui/icons-material';
import {
  CardStats,
  StatsCondicion,
  StatsMobilSanidad,
  StatsMobilUbicacion,
  StatsSanidad,
  StatsUbicacion,
} from './components';
import { Divider } from '@mui/material';

export const EstadistiasTraza = () => {
  const [selected, setSelected] = useState([]);
  const { data: dataPersonas = [], refetch: refetchPersonas } =
    useGetPersonas(false);
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
      <div className="flex w-full justify-center">
        <Autocomplete
          className="w-full max-w-[600px]"
          data={dataPersonas}
          propShow="razon_social"
          label="Comunero"
          setSelected={setSelected}
        />
      </div>
      <Divider className="my-8 max-md:my-3" />
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
          <Divider className="my-8 max-md:my-3" />

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
          <Divider className="my-8 max-md:my-3" />
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
