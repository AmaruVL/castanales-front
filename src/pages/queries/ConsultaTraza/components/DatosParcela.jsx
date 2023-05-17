import { Title, Subtitle } from '../../components';
import { LocationOnRounded } from '@mui/icons-material';

export const DatosParcela = ({ data }) => {
  return (
    <Title value="Datos de la parcela" Icon={LocationOnRounded}>
      <Subtitle
        value="Código de parcela:"
        content={data.codigo_de_la_parcela}
      />
      <Subtitle value="Ubicación">
        <Subtitle value="Sector:" content={data.sector} />
        <Subtitle value="Distrito:" content={data.distrito} />
        <Subtitle value="Provincia:" content={data.provincia} />
        <Subtitle value="Departamento:" content={data.departamento} />
      </Subtitle>
      <Subtitle
        value="Nombre del área castañera:"
        content={data.nombre_del_area_castanera}
      />
      <Subtitle value="Nro. de contrato:" content={data.nro_de_contrato} />
    </Title>
  );
};
