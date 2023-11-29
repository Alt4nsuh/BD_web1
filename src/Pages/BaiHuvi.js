import React from 'react';
import '../Style/BaiHuvi.css';
import { Link } from 'react-router-dom';

function BaiHuvi() {
  return (
    <div className="mainBaiHuvi">
       <div className='head'>
        <img src='/bd_web/src/Image/logo.png' alt='Logo' width='200' height='100' />
        
        {/* Use Link to navigate to /Bai */}
        <Link to='/BaiHuvi'>Хувийн мэдээлэл шинжлэх</Link>
        
        {/* Use Link to navigate to /Bai */}
        <Link to='/Bai'>Тэтгэлэг зарлах</Link>
        
        {/* Use Link to navigate to /Login */}
        <Link to='/'>Гарах</Link>
      </div>
      <div>
      <div></div>
      <div></div>
      </div>
    </div>
  );
}

export default BaiHuvi;
