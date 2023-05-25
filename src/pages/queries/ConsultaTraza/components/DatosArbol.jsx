import { ParkRounded } from '@mui/icons-material';
import { GoogleMap } from '@/components/GoogleMap';
import { Title, Subtitle } from '../../components';

export const DatosArbol = ({ data }) => {
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
          <div className="h-[18rem] rounded-xl overflow-hidden md:hidden my-3 -ml-5">
            <GoogleMap
              latitude={-12.799697963628589}
              longitude={-69.2989824303493}
            />
          </div>
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
          <Subtitle value="Condición del árbol">
            <section className="grid min-[1220px]:grid-cols-2">
              <Subtitle
                value="Juvenil o maduro:"
                content={data.juvenil_o_maduro}
              />
              <Subtitle value="Sano o enfermo:" content={data.sano_o_enfermo} />
              <Subtitle value="Rama caída:" content={data.rama_caida} />
              <Subtitle value="Lianas:" content={data.lianas} />
            </section>
          </Subtitle>
        </div>
        <div className="w-full h-[21rem] rounded-xl overflow-hidden max-md:hidden">
          <GoogleMap
            latitude={-12.799697963628589}
            longitude={-69.2989824303493}
          />
        </div>
      </section>
      <Subtitle value="Ubicación del árbol a un area deforestada">
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
