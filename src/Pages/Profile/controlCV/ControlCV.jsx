import {
  AcademicCapIcon,
  DocumentIcon,
  InboxArrowDownIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../ProfileSideBar/sideBar";
import "./ControlCV.css";
import Card from "./card/Card";

const ControlCV = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="controlcv">
        <Card icon={DocumentIcon} parameter="+ 0%" title="CV бүрдэлт" />
        <Card icon={InboxArrowDownIcon} parameter="+ 0" title="CV таталт" />
        <Card icon={AcademicCapIcon} parameter="0.0xp" title="XP оноо" />
      </div>
    </div>
  );
};

export default ControlCV;
