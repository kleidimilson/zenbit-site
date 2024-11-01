import { Home } from '@/pages/Home';
import { HomeTeresina } from '@/pages/HomeTeresina';
import { createBrowserRouter } from 'react-router-dom';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/criacao-de-site-em/teresina-pi/',
    element: <HomeTeresina />,
  },
]);

export { routes };
