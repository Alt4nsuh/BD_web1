import React from 'react';
import { useRoutes } from 'react-router-dom';
import Bai from '../Pages/Bai/Bai';
import BaiHuvi from '../Pages/BaiHuvi/BaiHuvi';
import Edit from '../Pages/Edit/Edit';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Sign from '../Pages/Sign/Sign';
import Tetgeleg from '../Pages/Tetgeleg/Tetgeleg';
import Admin from '../Pages/Admin/Admin';
export const MainRoutes = () => {
  return useRoutes([
    { path: '/Home', element: <Home /> },

    { path: '/sign', element: <Sign /> },
    { path: '/Bai', element: <Bai /> },
    {
      path: '/BaiHuvi', element: <BaiHuvi />,
      children: [
        { path: 'edit', element: <Edit /> },
      ],
    },
    { path: '/login', element: <Login /> },
    { path: '/Tetgeleg', element: <Tetgeleg /> },
    { path: '/admin', element: <Admin /> },
  ]);
}