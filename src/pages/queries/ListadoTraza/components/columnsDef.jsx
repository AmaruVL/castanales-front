import { Link } from 'react-router-dom';
import { LaunchRounded } from '@mui/icons-material';

//Definición de las columas del datagrid
export const columnsDef = [
  {
    field: 'codigo_ant',
    headerName: 'Cod. Árbol',
    headerClassName: 'super-app-theme--header',
    flex: 0.2,
    minWidth: 140,
    align: 'center',
    headerAlign: 'center',
    disableColumnMenu: true,
  },
  {
    field: 'dni_ruc',
    headerName: 'DNI/RUC',
    headerClassName: 'super-app-theme--header',
    flex: 0.2,
    minWidth: 130,
    align: 'center',
    headerAlign: 'center',
    disableColumnMenu: true,
  },
  {
    field: 'razon_social',
    headerName: 'Razón Social',
    headerClassName: 'super-app-theme--header',
    flex: 0.4,
    minWidth: 250,
    align: 'center',
    headerAlign: 'center',
    disableColumnMenu: true,
  },
  {
    field: 'coordenadas_utm',
    headerClassName: 'super-app-theme--header',
    width: 170,
    align: 'center',
    headerAlign: 'center',
    disableColumnMenu: true,
    renderHeader: () => (
      <div className="flex items-center flex-col font-medium">
        <span className="-mb-4">Coordenadas UTM</span>
        <span className="-mt-4">(Este, Norte)</span>
      </div>
    ),
  },
  {
    field: 'observaciones',
    headerName: 'Observaciones',
    headerClassName: 'super-app-theme--header',
    flex: 0.4,
    minWidth: 250,
    align: 'center',
    headerAlign: 'center',
    disableColumnMenu: true,
  },
  {
    field: 'enlace',
    headerName: 'Enlace',
    headerClassName: 'super-app-theme--header',
    width: 100,
    align: 'center',
    headerAlign: 'center',
    disableColumnMenu: true,
    sortable: false,
    renderCell: ({ id }) => (
      <Link to={id}>
        <LaunchRounded color="primary" />
      </Link>
    ),
  },
];
