import { useParams } from "react-router-dom";
import { Divider, Paper } from "@mui/material";
import {
  LocationOnRounded,
  PersonRounded,
  ParkRounded,
  AddCircleRounded,
  VisibilityRounded
} from "@mui/icons-material";
import qrExample from "../../assets/qrs/qrExample.svg";
import { Title, Subtitle } from "./components";
import { useGetTrazaByIdArbol } from "../../hooks/useTraza";
import { useEffect } from "react";

export const ConsultaArbol = () => {
  const { idArbol } = useParams();
  const { data } = useGetTrazaByIdArbol(idArbol);
  const dataExample = data ? data : []
  console.log({ dataExample });

  // const dataExample = {
  //   codigo: "MG-13",
  //   ubicacion: {
  //     sector: "CN. Infierno",
  //     distrito: "Tambopata",
  //     provincia: "Tambopata",
  //     departamento: "Madre de Dios",
  //   },
  //   nombreAreaCastanera: "Daniela",
  //   nroContrato: "RGR-N° 019-2020-GOREMAD-GRFFS",
  // };

  const dataExample1 = {
    banho: "Si",
    campamento: "Si",
    cerca_a_area_deforestada: "No",
    cerca_a_carretera: "No",
    codigo_ant: "CNI-14-LSG",
    codigo_de_la_parcela: "LS14",
    combustible_para_transporte: "Si",
    dap: "1.32",
    dentro_de_area_deforestada: "No",
    departamento: "Madre de Dios",
    distrito: "Tambopata",
    dni_ruc: "04803949",
    edad: 71,
    en_estrada: "Si",
    este: "468070",
    ht: "32.00",
    juvenil_o_maduro: "Maduro",
    lianas: "No",
    nombre_cientifico: "Bertholletia Excelsa",
    nombre_del_area_castanera: "Luis",
    norte: "8589688",
    nro_celular: "913761451",
    nro_de_arbol: 14,
    nro_de_contrato: "RGR-N 019-2020-GOREMAD-GRFFS",
    nro_de_estrada: 1,
    observaciones: "Arbol nuevo, falta tarjeta QR",
    produccion_latas: "2.00",
    productivo: "Si",
    provincia: "Tambopata",
    rama_caida: "No",
    razon_social: "LUIS SEHUE GUZMAN",
    realiza_quemas: "No",
    sano_o_enfermo: "Sano",
    sector: "CN. INFIERNO",
    semillero: "No",
  };

  return (
    <div className="flex justify-center items-center h-screen">
      {/* <Paper className="w-4/5 h-4/5 p-5 flex flex-col" elevation={4}> */}
      <Paper className="w-3/5 h-screen mt-20 p-5 flex flex-col" elevation={4}>
        <div className="flex justify-between">
          <div>
            <Title value="Datos de la parcela" Icon={LocationOnRounded} />
            <Subtitle
              value="Código de parcela:"
              content={dataExample.codigo_de_la_parcela}
            />
            <Subtitle
              value="Código de árbol:"
              content={dataExample.codigo_ant}
            />
            <div>
              <Subtitle value="Ubicación" />
              <div className="ml-3">
                <Subtitle value="Sector:" content={dataExample.sector} />
                <Subtitle value="Distrito:" content={dataExample.distrito} />
                <Subtitle value="Provincia:" content={dataExample.provincia} />
                <Subtitle
                  value="Departamento:"
                  content={dataExample.departamento}
                />
              </div>
            </div>
            <Subtitle
              value="Nombre del área castañera:"
              content={dataExample.nombre_del_area_castanera}
            />
            <Subtitle
              value="Nro. de contrato:"
              content={dataExample.nro_de_contrato}
            />
          </div>
          <figure className="w-1/5 aspect-square max-md:hidden self-center">
            <img src={qrExample} />
          </figure>
        </div>

        <Divider />
        <div>
          <Title value="Datos del comunero" Icon={PersonRounded} />
          <Subtitle value="DNI:" content={dataExample.dni_ruc} />
          <Subtitle value="Razón Social:" content={dataExample.razon_social} />
          <Subtitle value="Edad:" content={dataExample.edad} />
          <Subtitle value="Nro. de celular" content={dataExample.nro_celular} />
        </div>
        <Divider />
        <div>
          <Title value="Datos del árbol" Icon={ParkRounded} />
          <Subtitle
            value="Nombre científico:"
            content={dataExample.nombre_cientifico}
          />
          <Subtitle value="Nro. de árbol:" content={dataExample.nro_de_arbol} />
          <Subtitle
            value="Nro. de estrada:"
            content={dataExample.nro_de_estrada}
          />
          <Subtitle value="Parámetros dasométricos" />
          <div>
            <Subtitle value="DAP:" content={dataExample.dap} />
            <Subtitle value="HT:" content={dataExample.ht} />
          </div>
          <Subtitle value="Coordenadas UTM:" />
          <div>
            <Subtitle value="Este:" content={dataExample.este} />
            <Subtitle value="Norte:" content={dataExample.norte} />
          </div>
          <Subtitle value="Condición de árbol:" />
          <div>
            <Subtitle value="Productivo:" content={dataExample.productivo} />
            <Subtitle value="Semillero:" content={dataExample.semillero} />
          </div>
          <Subtitle value="Producción castaña:" />
          <div>
            <Subtitle
              value="Producción latas:"
              content={dataExample.produccion_latas}
            />
          </div>
          <Subtitle value="Condición del árbol:" />
          <div>
            <Subtitle
              value="Juvenil o maduro:"
              content={dataExample.juvenil_o_maduro}
            />
            <Subtitle
              value="Sano o enfermo:"
              content={dataExample.sano_o_enfermo}
            />
            <Subtitle value="Rama caída:" content={dataExample.rama_caida} />
            <Subtitle value="Lianas:" content={dataExample.lianas} />
          </div>
          <Subtitle value="Ubicación del árbol a un area deforestada:" />
          <div>
            <Subtitle
              value="Cerca a area deforestada:"
              content={dataExample.cerca_a_area_deforestada}
            />
            <Subtitle
              value="Dentro de area deforestada:"
              content={dataExample.dentro_de_area_deforestada}
            />
            <Subtitle
              value="Cerca a carretera:"
              content={dataExample.cerca_a_carretera}
            />
            <Subtitle value="En estrada:" content={dataExample.en_estrada} />
          </div>
        </div>
        <Divider />
        <div>
          <Title value="Información complementaria" Icon={AddCircleRounded}/>
        </div>
        <Divider />
        <div>
          <Title value="Observaciones" Icon={VisibilityRounded}/>
        </div>
        <figure className="w-2/5 aspect-square md:hidden self-center ">
          <img src={qrExample} />
        </figure>
      </Paper>
    </div>
  );
};
