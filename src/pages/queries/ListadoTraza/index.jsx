import { Paper } from '@mui/material';
import { DataGridStyle } from '../../../components/DataGridStyle';
import {columnsDef} from './components/columnsDef';

const rows = [
  {
    codigo_ant: 'CNI-1-WMHJEM',
    dni_ruc: '04807157',
    razon_social: 'WALTER MARICHI HUANUIRI/ JUAN ELVER MARICHI',
    coordenadas_utm: '466577, 8587489',
    este: '466577',
    norte: '8587489',
    observaciones: '',
  },
  {
    codigo_ant: 'CNI-2-WMHJEM',
    dni_ruc: '04807157',
    razon_social: 'WALTER MARICHI HUANUIRI/ JUAN ELVER MARICHI',
    este: '466539',
    norte: '8587515',
    observaciones: '',
  },
  {
    codigo_ant: 'CNI-3-WMHJEM',
    dni_ruc: '04807157',
    razon_social: 'WALTER MARICHI HUANUIRI/ JUAN ELVER MARICHI',
    este: '466409',
    norte: '8587635',
    observaciones: '',
  },
];

export const ListadoTraza = () => {
  return (
    <Paper className="p-5 drop-shadow-2xl" elevation={0}>
      <DataGridStyle
        rows={rows}
        columns={columnsDef}
        getRowId={(row) => row.codigo_ant}
      />
    </Paper>
  );
};
