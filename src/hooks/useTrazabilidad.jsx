import { useQuery } from '@tanstack/react-query';
import { GetAll, GetById, GetStatsById } from '../services/trazabilidad';

const key = 'trazabilidad';

export const useGetTrazas = (enabled = true) =>
  useQuery([key], GetAll, {
    enabled, // Realizar solicitud cada cierto tiempo
    retry: 2, // Nro de intentos en peticiones fallidas
  });

export const useGetTrazaByIdArbol = (idArbol, enabled = true) =>
  useQuery([key], async () => await GetById(idArbol), {
    enabled,
    retry: 2,
  });

export const useGetStatsById = (idPersona, enabled = true) =>
  useQuery([key], async () => await GetStatsById(idPersona), {
    enabled,
    retry: 2,
  });
