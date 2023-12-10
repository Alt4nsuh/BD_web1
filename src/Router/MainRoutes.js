// MainRoutes.js
import React from 'react';
import { useRoutes } from 'react-router-dom';
import Bai from '../Pages/Bai/Bai';
import BaiHuvi from '../Pages/BaiHuvi/BaiHuvi';
import Edit from '../Pages/Edit/Edit';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Sign from '../Pages/Sign/Sign';
import Tetgeleg from '../Pages/Tetgeleg/Tetgeleg';

export const MainRoutes = () => {
  return useRoutes([
    { path: '/', element: <Login /> },
    { path: '/sign', element: <Sign /> },
    { path: '/Bai', element: <Bai /> },
    {
      path: '/BaiHuvi',
      element: <BaiHuvi />,
      children: [
        { path: 'edit', element: <Edit /> },
      ],
    },
    { path: '/Home', element: <Home /> },
    { path: '/Tetgeleg', element: <Tetgeleg /> },
  ]);
