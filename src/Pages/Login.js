import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/Login.css';

function Login() {
  return (
    <div className="mainLog">
      <div className='contextLog'>
        <form className='LogForm'>
          <input className='inputLog' type='text' placeholder='Хэрэглэгч нэр'></input>
          <input className='inputLog' type='text' placeholder='Нууц '></input>
          <a>Нууц үгээ мартсан </a>
          <button><Link to="/Bai">Нэвтрэх</Link></button>
          <p>Бүртгэлгүй бол ..</p> <Link to="/sign">Бүртгүүлэх</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
