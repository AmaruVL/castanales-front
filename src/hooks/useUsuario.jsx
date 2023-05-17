export const useUsuario = () => {
  const usuario = localStorage.getItem("Usuario");
  const baseURL = import.meta.env.VITE_REACT_APP_API_URL;
  const userComplete = JSON.parse(usuario) || { full_path: baseURL, token: "" };
  return userComplete;
};
