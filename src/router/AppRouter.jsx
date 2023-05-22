import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Inicio } from '../pages/home/Inicio';
import { Error } from '../pages/error/Error';
import { LayoutQuery, ConsultaTraza, ListadoTraza } from '../pages/queries';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Inicio />,
    errorElement: <Error />,
  },
  {
    path: '/consultatraza',
    element: <LayoutQuery />,
    children: [
      {
        path: '',
        element: <ListadoTraza />,
      },
      {
        path: ':idArbol',
        element: <ConsultaTraza />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
