import { TextField } from '@mui/material';

export const BarraBusqueda = ({ datos, setResultados }) => {
  const onSearchChange = (e) => {
    if (!e.target.value) return setSearchResults(datos);

    const resultadosArray = datos.filter(
      (dato) => dato.razon_social.includes(e.target.value.toUpperCase()),
      // || dato.body.includes(e.target.value)
    );
    setResultados(resultadosArray);
  };
  return (
    <div>
      <TextField
        label="Buscar por propietario o coordenadas"
        fullWidth
        size="small"
        onChange={onSearchChange}
      />
    </div>
  );
};
