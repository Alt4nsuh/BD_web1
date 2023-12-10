import React from "react";
import "./BaiHuvi.css";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import logo from "../Image/logo.png";

function BaiHuvi() {
  return (
    <div>
      <div className="Bai-body">
        <Header></Header>
        <div className="leftBar">
          <h1>Байгууллагын профайл</h1>
          <img src={logo} alt="Logo" width="200" height="100" />{" "}
        </div>
        <div className="rightBar">
          <span>Zorig FOUNDATION</span>
          <h5>Утас</h5>
          <span>7272-7272</span>
          <h5>gmail</h5>
          <span>zorig@gmial.com</span>
          <Link to="/BaiHuvi/edit">Засах</Link>
          <button></button>
        </div>
      </div>
      <div className="horizontal-section">
        <div className="ImgDev"></div>
        <div className="ImgDev"></div>
        <div className="ImgDev"></div>
        <div className="ImgDev"></div>
      </div>
    </div>
  );
}

export default BaiHuvi;
