import { Divider } from '@mui/material';
import {
  DatosArbol,
  DatosComunero,
  DatosParcela,
  InfoComplementaria,
  Observaciones,
} from '../components';
import { getQRFromLink } from '@/helpers/qrCode';

export const ContenidoTraza = ({ data }) => {
  // Generar codigo QR
  const currentURL = window.location.href;
  const qrCode = getQRFromLink(currentURL);

  return (
    <div className="flex flex-col">
      <section className="flex justify-between">
        <DatosParcela data={data} />
        <figure className="mr-5 aspect-square w-1/5 self-center max-md:hidden">
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
      <figure className="mt-5 aspect-square w-2/5 max-w-[150px] self-center md:hidden ">
        <img src={qrCode} />
      </figure>
    </div>
  );
};
