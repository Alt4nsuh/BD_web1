import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    h_ner: '',
    pass: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Use fetch or Axios to send a POST request to your login endpoint
      // and handle the authentication logic
      console.log('Login logic here');
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className="mainLog">
      <div className='contextLog'>
        <form className='LogForm' onSubmit={handleLogin}>
          <input
            className='inputLog'
            type='text'
            name='h_ner'
            placeholder='Хэрэглэгч нэр'
            value={formData.h_ner}
            onChange={handleChange}
          />
          <input
            className='inputLog'
            type='password'
            name='pass'
            placeholder='Нууц'
            value={formData.pass}
            onChange={handleChange}
          />
          <a href="#">Нууц үгээ мартсан</a>
          <button type="submit">Нэвтрэх</button>
          <button><Link to="/Home">Home</Link></button>
          <p>Бүртгэлгүй бол ..</p> <Link to="/sign">Бүртгүүлэх</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
