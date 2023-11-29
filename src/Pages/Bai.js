import React from 'react';
import '../Style/Bai.css';
import { Link } from 'react-router-dom';

function Bai() {
  return (
    <div className="mainBai">
       <div className='head'>
        <img src='/bd_web/src/Image/logo.png' alt='Logo' width='200' height='100' />
        
        {/* Use Link to navigate to /Bai */}
        <Link to='/BaiHuvi'>Хувийн мэдээлэл шинжлэх</Link>
        
        {/* Use Link to navigate to /Bai */}
        <Link to='/Bai'>Тэтгэлэг зарлах</Link>
        
        {/* Use Link to navigate to /Login */}
        <Link to='/'>Гарах</Link>
      </div>
      <div className='secHead'>
        <a href='#TetEronhii'>Тэтгэлгийн <br></br>ерөнхий <br></br>мэдээлэл</a>
        <a href='#TetShaardlaga'>Тэтгэлэгт <br></br>тавигдах <br></br>шаардлага</a>
        <a href='#TetMateral'>Бүрдүүлэх <br></br>материал</a>
        <a href='#TetHolboo'>Холбоо <br></br>барих</a>
      </div>

      <div className='BaiBody'>
        <div id='TetEronhii' className='TetEronhii'>
        <h1>Тэтгэлгийн 
ерөнхий
 мэдээлэл</h1>
        </div>
        <div id='TetShaardlaga' className='TetShaardlaga'>
        <h1>Тэтгэлэгт 
тавигдах 
шаардлага</h1>
        </div>
        <div id='TetMateral' className='TetMateral'>
        <h1>Бүрдүүлэх 
материал</h1>
        </div>
        <div id='TetHolboo' className='TetHolboo'>
        <h1>Холбоо барих</h1>
        </div>
      </div>
    </div>
  );
}

export default Bai;
