import React from 'react';
import { useRoutes } from 'react-router-dom';

import Home from '@/pages/home';
import About from '@/pages/about';
import { Counter } from '@/pages/counter';

export default function App() {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/counter',
      element: <Counter />,
    },
  ]);

  return routes;
}
