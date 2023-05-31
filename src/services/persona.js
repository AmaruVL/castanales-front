import axios from 'axios';
import { useUsuario } from '../hooks/useUsuario';

export const GetAll = async () => {
  const { full_path: fullPath } = useUsuario();
  const { data } = await axios.get(`${fullPath}/api/razonSocial`);
  return data;
};
