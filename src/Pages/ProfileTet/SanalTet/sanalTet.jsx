import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../ProfileSideBar/sideBar";
import "./sanalTet.css";

const sanalTet = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="sanalTet">
        <div className="sanalHeader">Бүгд</div>
        <div className="sanalContents">
          Танид зориулсан хөнгөлөлтүүд :
          <div className="hongololt">Одоогоор утга алга байна...</div>
          Танид зориулав :
          <div className="zoriulaw">Одоогоор утга алга байна...</div>
        </div>
      </div>
    </div>
  );
};

export default sanalTet;
