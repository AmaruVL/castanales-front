import { useParams } from 'react-router-dom';
import { Divider, Paper } from '@mui/material';
import {
  LocationOnRounded,
  PersonRounded,
  ParkRounded,
  AddCircleRounded,
  VisibilityRounded,
} from '@mui/icons-material';
import qrExample from '../../../assets/qrs/qrExample.svg';
import { Title, Subtitle } from '../components';
import { useGetTrazaByIdArbol } from '../../../hooks/useTraza';
import { DatosParcela } from './components/DatosParcela';
import { DatosComunero } from './components/DatosComunero';
import { DatosArbol } from './components/DatosArbol';
import { InfoComplementaria } from './components/InfoComplementaria';
import { Observaciones } from './components/Observaciones';

export const ConsultaArbol = () => {
  const { idArbol } = useParams();
  const { data = [] } = useGetTrazaByIdArbol(idArbol);

  return (
    <div className="flex justify-center items-center h-screen">
      <Paper className="w-4/5 max-w-4xl h-4/5 p-5 flex flex-col" elevation={4}>
        <div className="flex justify-between">
          <DatosParcela data={data} />
          <figure className="w-1/5 aspect-square max-md:hidden self-center">
            <img src={qrExample} />
          </figure>
        </div>
        <Divider />
        <DatosComunero data={data} />
        <Divider />
        <DatosArbol data={data} />
        <Divider />
        <InfoComplementaria data={data} />
        <Divider />
        <Observaciones data={data} />
        <figure className="w-2/5 aspect-square md:hidden self-center ">
          <img src={qrExample} />
        </figure>
      </Paper>
    </div>
  );
};
