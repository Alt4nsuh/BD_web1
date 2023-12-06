import React from 'react';
import './BaiHuvi.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function BaiHuvi() {
  return (
    <div className="mainBaiHuvi">
      <Header/>
      <div>
      <div>
        <h1>Байгууллагын профайл</h1>
        <img src='C:\A_Hicheel\Laravel\bd_web\src\Image\logo.png' alt='Logo' width='200' height='100' />
        <span>Zorig FOUNDATION</span>
        <h5>Утас</h5>
        <span>7272-7272</span>
        <h5>gmail</h5>
        <span>zorig@gmial.com</span>
        <Link to='/BaiHuvi/edit'>Засах</Link>
      </div>
      <div></div>
      </div>
    </div>
  );
}

export default BaiHuvi;
