// import { lazy } from 'react';

// project import
import MainLayout from 'layout/MainLayout';

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: 'homepage',
      element: <p>main page</p>
    }
  ]
};

export default MainRoutes;
