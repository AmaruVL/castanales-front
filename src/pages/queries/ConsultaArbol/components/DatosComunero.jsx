import { Title, Subtitle } from '../../components';
import { PersonRounded } from '@mui/icons-material';

export const DatosComunero = ({ data }) => {
  return (
    <Title value="Datos del comunero" Icon={PersonRounded}>
      <Subtitle value="DNI o RUC:" content={data.dni_ruc} />
      <Subtitle value="Razón Social:" content={data.razon_social} />
      <Subtitle value="Edad:" content={data.edad} />
      <Subtitle value="Nro. de celular" content={data.nro_celular} />
    </Title>
  );
};
