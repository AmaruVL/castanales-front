import { useQuery } from '@tanstack/react-query';
import { GetAll, GetById } from '../services/traza';

const key = 'traza';

export const useGetTrazaByIdArbol = (idArbol, enabled = true) =>
  useQuery([key], async () => await GetById(idArbol), {
    enabled, //Realizar solicitud cada cierto tiempo
  });

export const useGetTrazas = (enabled = true) =>
  useQuery([key], GetAll, {
    enabled, //Realizar peticiones cada cierto tiempo automaticamente
    retry: 2, //Nro de intentos en peticiones fallidas
  });
