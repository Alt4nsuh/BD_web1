import React from "react";
import { useRoutes } from "react-router-dom";
import Admin from "../Pages/Admin/Admin";
import Bai from "../Pages/Bai/Bai";
import BaiHuvi from "../Pages/BaiHuvi/BaiHuvi";
import Edit from "../Pages/Edit/Edit";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile/Profile";
import AddCV from "../Pages/Profile/addCV/AddCV";
import ControlCV from "../Pages/Profile/controlCV/ControlCV";
import EditCV from "../Pages/Profile/editCV/EditCV";
import Sign from "../Pages/Sign/Sign";
import Tetgeleg from "../Pages/Tetgeleg/Tetgeleg";
import TetgelegDelgerengui from "../Pages/TetgelegDelgerengui/TetgelegDelgerengui";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/Home", element: <Home /> },

    { path: "/sign", element: <Sign /> },
    { path: "/Bai", element: <Bai /> },
    {
      path: "/BaiHuvi",
      element: <BaiHuvi />,
      children: [{ path: "edit", element: <Edit /> }],
    },
    { path: "/login", element: <Login /> },
    { path: "/Tetgeleg", element: <Tetgeleg /> },
    { path: "/admin", element: <Admin /> },
    { path: "/TetgelegDelgerengui/:id", element: <TetgelegDelgerengui /> },
    { path: "/Profile", element: <Profile /> },
    { path: "/Profile/add-cv", element: <AddCV /> },
    { path: "/Profile/control-cv", element: <ControlCV /> },
    { path: "/Profile/edit-cv", element: <EditCV /> },
  ]);
};
