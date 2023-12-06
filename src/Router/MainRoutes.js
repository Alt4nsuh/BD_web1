import React from 'react';
import { useRoutes } from 'react-router-dom';
import Sign from '../Pages/Sign/Sign';
import Login from '../Pages/Login/Login';
import Bai from '../Pages/Bai/Bai'
import BaiHuvi from '../Pages/BaiHuvi/BaiHuvi'
export const MainRoutes = () => {
    return useRoutes([

        { path: '/', element: <Login /> },
        { path: '/sign', element: <Sign /> },
        { path: '/Bai', element: <Bai /> },
        { path: '/BaiHuvi', element: <BaiHuvi /> },


    ]);
};
