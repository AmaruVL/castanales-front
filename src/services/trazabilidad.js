import axios from 'axios';
import { useUsuario } from '../hooks/useUsuario';

export const GetAll = async () => {
  const { full_path: fullPath } = useUsuario();
  const { data } = await axios.get(`${fullPath}/api/trazabilidad`);
  return data;
};

export const GetById = async (id) => {
  const { full_path: fullPath } = useUsuario();
  const { data } = await axios.get(`${fullPath}/api/trazabilidad/${id}`);
  return data;
};

export const GetStatsById = async (id = '-1') => {
  const { full_path: fullPath } = useUsuario();
  const { data } = await axios.get(
    `${fullPath}/api/trazabilidad/estadisticas/${id}`,
  );
  return data;
};
