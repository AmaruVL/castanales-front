import axios from "axios";
import { useUsuario } from "../hooks/useUsuario";

export const GetById = async (id) => {
  const { full_path: fullPath } = useUsuario();
  const { data } = await axios.get(`http://${fullPath}/traza/${id}`);
  return data;
};
