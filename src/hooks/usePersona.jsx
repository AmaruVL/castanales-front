import { useQuery } from '@tanstack/react-query';
import { GetAll } from '../services/persona';

const key = 'persona';

export const useGetPersonas = (enabled = true) =>
  useQuery([key], GetAll, {
    enabled, //Realizar solicitud cada cierto tiempo
    retry: 2, //Nro de intentos en peticiones fallidas
  });
