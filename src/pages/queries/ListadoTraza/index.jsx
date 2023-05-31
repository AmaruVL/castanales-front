import { columnsDef } from './components/columnsDef';
import { useGetTrazas } from '@/hooks/useTrazabilidad';
import { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { BarraBusqueda } from './components/BarraBusqueda';

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
      <BarraBusqueda datos={trazas} setResultados={setResultadosBusqueda} />
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
