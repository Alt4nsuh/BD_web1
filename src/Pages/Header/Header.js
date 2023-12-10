// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

import logo from '../Image/logo.png'; 
function Header() {
  return (
    <div className='head'>
      
      <img src={logo} alt='Logo' width='200' height='100' />
      
      <Link to='/BaiHuvi'>Хувийн мэдээлэл шинжлэх</Link>
      <Link to='/Bai'>Тэтгэлэг зарлах</Link>
      <Link to='/'>Гарах</Link>
    </div>
  );
}

export default Header;
