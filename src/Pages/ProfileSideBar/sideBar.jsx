import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";
import Cookies from "js-cookie";

const sideBar = () => {
  const logout = () => {
    Cookies.set("h_type", "");
    Cookies.set("h_id", "");
  };
  return (
    <div className="sidebar">
      <div className="barPro">
        <img src="logo.png" alt="proImg" width="80" height="80" />
        <div className="protexts">
          <span>Хэрэглэгчийн нэр</span>
          <span>Боловсрол</span>
          <span>Хот</span>
        </div>
      </div>
      <hr />
      <div class="dropdown">
        <a href="#about">Өөрийн CV</a>
        <div id="about" class="dropdown-content">
          <Link to="/Profile/add-cv">CV нэмэх</Link>
          <Link to="/Profile/edit-cv">CV засах</Link>
          <Link to="/Profile/control-cv">CV хянах</Link>
        </div>
        <a href="#services">Тэтгэлэг</a>
        <a href="#clients">Танид зориулав</a>
        <a href="#contact">Тохиргоо</a>
        <div></div>
        </div>

        <Link to={"/login"} onClick={logout}>Гарах</Link>


    </div>
  );
};

export default sideBar;
