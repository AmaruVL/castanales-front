import { Title, Subtitle } from '../../components';
import { ParkRounded } from '@mui/icons-material';

export const DatosArbol = ({ data }) => {
  return (
    <Title value="Datos del árbol" Icon={ParkRounded}>
      <Subtitle value="Nombre científico:" content={data.nombre_cientifico} />
      <Subtitle value="Nro. de árbol:" content={data.nro_de_arbol} />
      <Subtitle value="Nro. de estrada:" content={data.nro_de_estrada} />
      <Subtitle value="Parámetros dasométricos">
        <Subtitle value="DAP:" content={data.dap} />
        <Subtitle value="HT:" content={data.ht} />
      </Subtitle>
      <Subtitle value="Coordenadas UTM:">
        <Subtitle value="Este:" content={data.este} />
        <Subtitle value="Norte:" content={data.norte} />
      </Subtitle>
      <Subtitle value="Condición de árbol:">
        <Subtitle value="Productivo:" content={data.productivo} />
        <Subtitle value="Semillero:" content={data.semillero} />
      </Subtitle>
      <Subtitle value="Producción castaña:">
        <Subtitle value="Producción latas:" content={data.produccion_latas} />
      </Subtitle>
      <Subtitle value="Condición del árbol:">
        <Subtitle value="Juvenil o maduro:" content={data.juvenil_o_maduro} />
        <Subtitle value="Sano o enfermo:" content={data.sano_o_enfermo} />
        <Subtitle value="Rama caída:" content={data.rama_caida} />
        <Subtitle value="Lianas:" content={data.lianas} />
      </Subtitle>
      <Subtitle value="Ubicación del árbol a un area deforestada:">
        <Subtitle
          value="Cerca a area deforestada:"
          content={data.cerca_a_area_deforestada}
        />
        <Subtitle
          value="Dentro de area deforestada:"
          content={data.dentro_de_area_deforestada}
        />
        <Subtitle value="Cerca a carretera:" content={data.cerca_a_carretera} />
        <Subtitle value="En estrada:" content={data.en_estrada} />
      </Subtitle>
    </Title>
  );
};
