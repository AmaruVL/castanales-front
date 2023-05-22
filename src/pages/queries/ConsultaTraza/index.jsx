import { CircularProgress, Divider, Paper } from '@mui/material';
import {
  DatosParcela,
  DatosComunero,
  DatosArbol,
  InfoComplementaria,
  Observaciones,
} from './components';
import { useParams } from 'react-router-dom';
import { useGetTrazaByIdArbol } from '../../../hooks/useTraza';
import { generateQR } from '../../../helpers/qrCode';

export const ConsultaTraza = () => {
  const { idArbol } = useParams();
  const { data = [], isLoading, isSuccess } = useGetTrazaByIdArbol(idArbol);

  if (isLoading) {
    return (
      <div className="mt-5 flex gap-3 h-screen">
        <CircularProgress size={25} sx={{ color: '#477961' }} />
        <span>Buscando...</span>
      </div>
    );
  }
  if (!isSuccess) {
    return <h1 className="mt-5 h-screen">No se encontró información </h1>;
  }

  // Generar codigo QR
  const currentURL = window.location.href.replace(/^https?:\/\//, '');
  const qrCode = generateQR(currentURL);

  return (
    <Paper className="p-5 flex flex-col drop-shadow-2xl" elevation={0}>
      <div className="flex justify-between">
        <DatosParcela data={data} />
        <figure className="w-1/5 mr-5 aspect-square max-md:hidden self-center">
          <img src={qrCode} />
        </figure>
      </div>
      <Divider className="my-3" />
      <DatosComunero data={data} />
      <Divider className="my-3" />
      <DatosArbol data={data} />
      <Divider className="my-3" />
      <InfoComplementaria data={data} />
      <Divider className="my-3" />
      <Observaciones data={data} />
      <figure className="w-2/5 max-w-[150px] aspect-square md:hidden self-center ">
        <img src={qrCode} />
      </figure>
    </Paper>
  );
};
