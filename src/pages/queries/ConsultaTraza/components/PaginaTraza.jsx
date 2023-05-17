import { Divider, Paper } from '@mui/material';
import qrExample from '../../../../assets/qrs/qrExample.svg';
import {
  DatosParcela,
  DatosComunero,
  DatosArbol,
  InfoComplementaria,
  Observaciones,
} from './';
import { useGetTrazaByIdArbol } from '../../../../hooks/useTraza';
import { useParams } from 'react-router-dom';

export const PaginaTraza = () => {
  const { idArbol } = useParams();
  const { data = [] } = useGetTrazaByIdArbol(idArbol);
  // const currentURL = window.location.href
  // console.log(currentURL)
  return (
    <Paper className="p-5 flex flex-col drop-shadow-2xl" elevation={0}>
      <div className="flex justify-between">
        <DatosParcela data={data} />
        <figure className="w-1/5 mr-5 aspect-square max-md:hidden self-center">
          <img src={qrExample} />
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
        <img src={qrExample} />
      </figure>
    </Paper>
  );
};
