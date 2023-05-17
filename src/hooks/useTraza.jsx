import { useQuery } from "@tanstack/react-query";
import { GetById } from "../services/traza";

const key = "traza";

export const useGetTrazaByIdArbol = (idArbol, enabled = true) =>
  useQuery([key], async () => await GetById(idArbol), {
    enabled, //Realizar solicitud cada cierto tiempo
  });