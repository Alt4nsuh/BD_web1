import React from 'react';
import './Bai.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
function Bai() {
  return (
    <div className="mainBai">
      <Header/>

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
