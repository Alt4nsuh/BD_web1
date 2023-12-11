import { PlusCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import Header from "../../Header/Header";
import SideBar from "../../ProfileSideBar/sideBar";
import "./editCV.css";

const EditCV = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <div className="editcv">
        <img src="logo.png" alt="proImg" width="50" height="50" />
        <div className="bigSpans">
          <div className="spans">
            <span>Гадаад хэлний мэдлэг</span>
            <PlusCircleIcon class="icons" />
          </div>
          <div className="spans">
            <span>Туршлага</span>
            <PlusCircleIcon class="icons" />
          </div>
          <div className="spans">
            <span>Нэмэлт боловсрол</span>
            <PlusCircleIcon class="icons" />
          </div>
          <div className="spans">
            <span>Авьяас</span>
            <PlusCircleIcon class="icons" />
          </div>
          <div className="spans">
            <span>Давуу тал</span>
            <PlusCircleIcon class="icons" />
          </div>
          <div className="editbuttons">
            <button>Хадгалах</button>
            <button>Болих</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCV;
