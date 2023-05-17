import { useQuery } from "@tanstack/react-query";
import { GetById } from "../services/traza";

const key = "traza";

export const useGetByIdArbol = (idArbol, enabled = true) =>
  useQuery([key], GetById(idArbol), {
    enabled, //Realizar solicitud cada cierto tiempo
  });
