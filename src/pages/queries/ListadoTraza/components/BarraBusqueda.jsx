import { SearchRounded } from '@mui/icons-material';
import { InputAdornment, TextField } from '@mui/material';

export const BarraBusqueda = ({ datos, setResultados, className = '' }) => {
  const onSearchChange = (event) => {
    const searchValue = event.target.value.trim();
    if (!searchValue) return setResultados(datos);

    const resultadosArray = datos.filter(
      (dato) =>
        dato.razon_social.includes(searchValue.toUpperCase()) ||
        dato.dni_ruc.includes(searchValue) ||
        dato.coordenadas_utm.includes(searchValue),
    );
    setResultados(resultadosArray);
  };
  return (
    <TextField
      className={className}
      label="Buscar por DNI/RUC, razón social o coordenadas"
      fullWidth
      size="small"
      onChange={onSearchChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchRounded />
          </InputAdornment>
        ),
      }}
    />
  );
};
