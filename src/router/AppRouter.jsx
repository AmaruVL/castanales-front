import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { Inicio } from "../pages/home/Inicio";
import { Error } from "../pages/error/Error";
import { ConsultaArbol } from "../pages/queries/ConsultaArbol";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Inicio/> ,
    errorElement: <Error/>,
  },
  {
    path: "/consultatraza/:idArbol",
    element: <ConsultaArbol/>
  }
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
