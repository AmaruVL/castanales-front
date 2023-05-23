import { Divider } from '@mui/material';
import {
  DatosArbol,
  DatosComunero,
  DatosParcela,
  InfoComplementaria,
  Observaciones,
} from '../components';
import { generateQR } from '@/helpers/qrCode';

export const ContenidoTraza = ({ data }) => {
  // Generar codigo QR
  const currentURL = window.location.href.replace(/^https?:\/\//, '');
  const qrCode = generateQR(currentURL);

  return (
    <div className="flex flex-col">
      <section className="flex justify-between">
        <DatosParcela data={data} />
        <figure className="w-1/5 mr-5 aspect-square max-md:hidden self-center">
          <img src={qrCode} />
        </figure>
      </section>
      <Divider className="my-3" />
      <DatosComunero data={data} />
      <Divider className="my-3" />
      <DatosArbol data={data} />
      <Divider className="my-3" />
      <InfoComplementaria data={data} />
      <Divider className="my-3" />
      <Observaciones data={data} />
      <figure className="w-2/5 mt-5 max-w-[150px] aspect-square md:hidden self-center ">
        <img src={qrCode} />
      </figure>
    </div>
  );
};
