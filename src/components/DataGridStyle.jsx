import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const DataGridStyle = ({
  height,
  rows,
  columns,
  experimentalFeatures,
  checkboxSelection = false,
  setAlumnosSeleccionados,
  pageSizeOptions = [25,50,100],
  getRowId,
}) => {
  return (
    <Box
      sx={{
        height: height,
        width: '100%',
        '& .super-app-theme--header': {
          backgroundColor: '#fff',
        },
      }}>
      {checkboxSelection ? (
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection={checkboxSelection}
          experimentalFeatures={experimentalFeatures}
          getRowId={getRowId}
          pageSizeOptions={pageSizeOptions}
          onSelectionModelChange={(itm) => {
            setAlumnosSeleccionados(itm);
          }}
        />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          experimentalFeatures={experimentalFeatures}
          pageSizeOptions={pageSizeOptions}
          getRowId={getRowId}
        />
      )}
    </Box>
  );
};
