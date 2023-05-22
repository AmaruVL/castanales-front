import { Paper } from '@mui/material';
import { DataGridStyle } from '../../../components/DataGridStyle';
import { columnsDef } from './components/columnsDef';
import { useGetTrazas } from '../../../hooks/useTraza';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { BarraBusqueda } from './components/BarraBusqueda';

export const ListadoTraza = () => {
  const { refetch } = useGetTrazas(false);
  const [trazas, setTrazas] = useState([]);
  const [resultadosBusqueda, setResultadosBusqueda] = useState([]);

  useEffect(() => {
    refetch().then(({ data }) => {
      setTrazas(data);
      setResultadosBusqueda(data);
    });
  }, []);

  return (
    <Paper className="drop-shadow-2xl p-7 pb-16 h-screen w-full" elevation={0}>
      <BarraBusqueda
        datos={trazas}
        setResultados={setResultadosBusqueda}
      />
      <DataGrid
        rows={resultadosBusqueda || []}
        columns={columnsDef}
        initialState={{
          pagination: { paginationModel: { pageSize: 15 } },
        }}
        pageSizeOptions={[15, 25, 50]}
        rowHeight={40}
        getRowId={(row) => row.codigo_ant}
      />
    </Paper>
  );
};
