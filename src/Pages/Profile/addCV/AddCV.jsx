import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../ProfileSideBar/sideBar";
import "./addCV.css";

const AddCV = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="addcv">
        <img src="logo.png" alt="proImg" width="50" height="50" />
        <div className="bigInput">
          <div className="inputs">
            <b>Нэр :</b>
            <input type="text" />
          </div>
          <div className="inputs">
            <b>Эцэг /эх/-ийн нэр :</b>
            <input type="text" />
          </div>
          <div className="inputs">
            <b>Нас :</b>
            <input type="text" />
          </div>
          <div className="inputs">
            <b>Хүйс :</b>
            <input type="text" />
          </div>
          <div className="inputs">
            <b>Регистр :</b>
            <input type="text" />
          </div>

          <div className="addbuttons">
            <button>Нэмэх</button>
            <button>Болих</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCV;
