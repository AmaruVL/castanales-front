import axios from "axios";
import { useUsuario } from "../hooks/useUsuario";

export const GetById = async (id) => {
  const { full_path: fullPath } = useUsuario();
  const { data } = await axios.get(`http://${fullPath}/api/trazabilidad/${id}`);
  return data;
};

export const GetAll = async () => {
  const { full_path: fullPath } = useUsuario();
  const { data } = await axios.get(`http://${fullPath}/api/trazabilidad`);
  return data;
};
