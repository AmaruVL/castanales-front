import { columnsDef } from './components/columnsDef';
import { useGetTrazas } from '@/hooks/useTrazabilidad';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { BarraBusqueda } from './components/BarraBusqueda';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { QueryStatsRounded } from '@mui/icons-material';

export const ListadoTraza = () => {
  const { refetch } = useGetTrazas(false);
  const [trazas, setTrazas] = useState([]);
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  const getDataTraza = async () => {
    // Obtener datos de sessionStorage
    const datosString = sessionStorage.getItem('datosTraza');
    if (datosString) {
      return JSON.parse(datosString);
    }
    // Obtener datos del servidor
    const { data } = await refetch();
    const datosTraza = data.map(({ este, norte, ...rest }) => ({
      ...rest,
      coordenadas_utm: `${este}, ${norte}`,
    }));
    // Guardar datos en sessionStorage
    sessionStorage.setItem('datosTraza', JSON.stringify(datosTraza));
    return datosTraza;
  };

  useEffect(() => {
    getDataTraza().then((data) => {
      setTrazas(data);
      setResultadosBusqueda(data);
    });
  }, []);

  return (
    <>
      <div className="mb-5 flex gap-3 max-md:flex-col">
        <BarraBusqueda
          className="max-md:order-1"
          datos={trazas}
          setResultados={setResultadosBusqueda}
        />
        <Link
          className="flex h-[40px] min-w-[200px] items-center justify-between gap-3 rounded-lg bg-primary px-4 text-white duration-300 hover:bg-dark-gray"
          to="estadisticas"
        >
          <Typography>Ver estadísticas</Typography>
          <QueryStatsRounded />
        </Link>
      </div>
      {/* TODO: Mostrar spin cuando carga al inicio y cambiar color header*/}
      <DataGrid
        className="h-[80vh]"
        rows={resultadosBusqueda || []}
        columns={columnsDef}
        rowHeight={40}
        initialState={{
          pagination: { paginationModel: { pageSize: 50 } },
        }}
        getRowId={(row) => row.codigo_ant}
      />
    </>
  );
};
