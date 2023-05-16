import { Divider, Paper } from "@mui/material";
import qrExample from "../../assets/qrs/qrExample.svg";
import {
  LocationOnRounded,
  PersonRounded,
  ParkRounded,
} from "@mui/icons-material";
import { Title } from "./components/Title";
import { Subtitle } from "./components/Subtitle";

export const ConsultaArbol = () => {
  const dataExample = {
    codigo: "MG-13",
    ubicacion: {
      sector: "CN. Infierno",
      distrito: "Tambopata",
      provincia: "Tambopata",
      departamento: "Madre de Dios",
    },
    nombreAreaCastanera: "Daniela",
    nroContrato: "RGR-N° 019-2020-GOREMAD-GRFFS"
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Paper className="w-4/5 h-4/5 p-5 flex flex-col" elevation={4}>
        <div className="flex justify-between">
          <div>
            <Title value="Datos de la parcela" Icon={LocationOnRounded} />
            <Subtitle subtitle="Código: " value={dataExample.codigo}/>
            <div>
              <Subtitle subtitle="Ubicación"/>
              <div className="ml-3">
                <Subtitle value="Sector:" content={dataExample.ubicacion.sector}/>
                <Subtitle value="Distrito:" content={dataExample.ubicacion.distrito}/>
                <Subtitle value="Provincia:" content={dataExample.ubicacion.provincia}/>
                <Subtitle value="Departamento:" content={dataExample.ubicacion.departamento}/>
              </div>
            </div>
            <Subtitle value="Nombre del área castañera:" content={dataExample.nombreAreaCastanera} />
            <Subtitle value="Nro. de contrato" content={dataExample.nroContrato}/>
          </div>
          <figure className="w-1/5 aspect-square max-md:hidden self-center">
            <img src={qrExample} />
          </figure>
        </div>

        <Divider />
        <Title value="Datos del comunero" Icon={PersonRounded} />
        <Divider />
        <Title value="Datos del árbol" Icon={ParkRounded} />
        <Divider />
        <figure className="w-2/5 aspect-square md:hidden self-center ">
            <img src={qrExample} />
        </figure>
      </Paper>
    </div>
  );
};
