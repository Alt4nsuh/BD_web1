// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
function Header() {
  return (
    <div className='head'>
      <img src='C:\A_Hicheel\Laravel\bd_web\src\Image\logo.png' alt='Logo' width='200' height='100' />
      
      <Link to='/BaiHuvi'>Хувийн мэдээлэл шинжлэх</Link>
      <Link to='/Bai'>Тэтгэлэг зарлах</Link>
      <Link to='/'>Гарах</Link>
    </div>
  );
}

export default Header;
