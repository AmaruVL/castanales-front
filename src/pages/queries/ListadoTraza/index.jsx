import { columnsDef } from './components/columnsDef';
import { useGetTrazas } from '@/hooks/useTraza';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { BarraBusqueda } from './components/BarraBusqueda';

export const ListadoTraza = () => {
  const { refetch } = useGetTrazas(false);
  const [trazas, setTrazas] = useState([]);
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  useEffect(() => {
    refetch().then(({ data = [] }) => {
      const newData = data.map(({ este, norte, ...rest }) => ({
        ...rest,
        coordenadas_utm: `${este}, ${norte}`,
      }));
      setTrazas(newData);
      setResultadosBusqueda(newData);
    });
  }, []);

  return (
    <>
      <BarraBusqueda datos={trazas} setResultados={setResultadosBusqueda} />
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
