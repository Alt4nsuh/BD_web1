// Header.js
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "../Home/Home.css";

import logo from "../Image/logo.png";
import Cookies from "js-cookie";
function Header() {
  const h_type = Cookies.get("h_type");
  console.log(h_type)
  const logout = () => {
    Cookies.set("h_type", "");
    Cookies.set("h_id", "");
  };
  return (
    <div>
      {h_type === "baiguullaga" ? (
        <div className="head">
          <img src={logo} alt="Logo" width="200" height="100" />

          <Link to="/BaiHuvi">Хувийн мэдээлэл шинжлэх</Link>
          <Link to="/Bai">Тэтгэлэг зарлах</Link>
          <div onClick={logout}><Link to="/login">Гарах</Link></div>
        </div>
      ) : (
        <div className="header">
          <img src={logo} alt="Logo" width="200" height="100" />
          <a href="#zorilgo">Нүүр</a>
          <Link to="/Tetgeleg">Тэтгэлэг</Link>
          <a href="#our-team">Баг</a>
          {h_type === "hereglegch" && <Link to="/Profile">Хэрэглэгч</Link>}
          {h_type === "admin" && <Link to="/admin">Админ</Link> }
          {h_type === "admin" && <div onClick={logout}><Link to="/login">Гарах</Link></div>}
          {h_type === "" &&           <div onClick={logout}><Link to="/login">Нэвтрэх</Link></div>
}
        </div>
      )}
    </div>
  );
}

export default Header;
