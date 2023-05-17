import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Inicio } from '../pages/home/Inicio';
import { Error } from '../pages/error/Error';
import { ConsultaTraza } from '../pages/queries/ConsultaTraza';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
    errorElement: <Error />,
  },
  {
    path: '/consultatraza/:idArbol',
    element: <ConsultaTraza />,
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
