import { ParkRounded } from '@mui/icons-material';
import { GoogleMap } from '@/components/GoogleMap';
import { convertUTM2LngLat } from '@/helpers/coordinates';
import { Title, Subtitle } from '../../components';

export const DatosArbol = ({ data }) => {
  // Convetir de UTM a Latitud/Longitud
  const { lat, lng } = convertUTM2LngLat(data.este, data.norte, 19, 'l');
  return (
    <Title value="Datos del árbol" Icon={ParkRounded}>
      <section className="grid md:grid-cols-2">
        <Subtitle value="Código de árbol:" content={data.codigo_ant} />
        <Subtitle value="Nombre científico:" content={data.nombre_cientifico} />
        <Subtitle value="Nro. de árbol:" content={data.nro_de_arbol} />
        <Subtitle value="Nro. de estrada:" content={data.nro_de_estrada} />
      </section>
      <section className="flex items-center justify-stretch">
        <div className="w-full">
          <Subtitle value="Parámetros dasométricos">
            <section className="grid md:grid-cols-2">
              <Subtitle value="DAP:" content={data.dap} />
              <Subtitle value="HT:" content={data.ht} />
            </section>
          </Subtitle>
          <Subtitle value="Coordenadas UTM">
            <section className="grid md:grid-cols-2">
              <Subtitle value="Este:" content={data.este} />
              <Subtitle value="Norte:" content={data.norte} />
            </section>
          </Subtitle>
          <GoogleMap
            className="my-3 -ml-5 h-[18rem] overflow-hidden rounded-xl md:hidden"
            latitude={lat}
            longitude={lng}
          />
          <Subtitle value="Condición de árbol">
            <section className="grid md:grid-cols-2">
              <Subtitle value="Productivo:" content={data.productivo} />
              <Subtitle value="Semillero:" content={data.semillero} />
            </section>
          </Subtitle>
          <Subtitle value="Producción castaña">
            <Subtitle
              value="Producción latas:"
              content={data.produccion_latas}
            />
          </Subtitle>
          <Subtitle value="Condición del árbol (fitosanitaria)">
            <section className="grid min-[1220px]:grid-cols-2">
              <Subtitle
                value="Etapa de vida:"
                content={data.juvenil_o_maduro}
              />
              <Subtitle
                value="Estado de salud:"
                content={data.sano_o_enfermo}
              />
              <Subtitle value="Rama caída:" content={data.rama_caida} />
              <Subtitle value="Lianas:" content={data.lianas} />
            </section>
          </Subtitle>
        </div>
        <GoogleMap
          className="h-[21rem] w-full overflow-hidden rounded-xl max-md:hidden"
          latitude={lat}
          longitude={lng}
        />
      </section>
      <Subtitle value="Detalles de la ubicación del árbol">
        <section className="grid md:grid-cols-2">
          <Subtitle
            value="Cerca a area deforestada:"
            content={data.cerca_a_area_deforestada}
          />
          <Subtitle
            value="Dentro de area deforestada:"
            content={data.dentro_de_area_deforestada}
          />
          <Subtitle
            value="Cerca a carretera:"
            content={data.cerca_a_carretera}
          />
          <Subtitle value="En estrada:" content={data.en_estrada} />
        </section>
      </Subtitle>
    </Title>
  );
};
