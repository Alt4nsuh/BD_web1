import React from 'react';
import { Link } from 'react-router-dom';
import './Sign.css';

function Sign() {
  return (
    <div className="mainSig">
      <div className='contextSig'>
        <form className='LogForm'>
          <input className='inputSig' type='text' placeholder='Хэрэглэгч нэр'></input>
          <input className='inputSig' type='text' placeholder='Майл'></input>
          <input className='inputSig' type='text' placeholder='Нууц '></input>
          <input className='inputSig' type='text' placeholder='Нууц  давтах'></input>
          <button>Бүртгүүлэх</button>
          <p>Бүртгэлтэй бол ..</p> <Link className='aLink'to="/">Нэвтрэх</Link>
        </form>
      </div>
    </div>
  );
}

export default Sign;
