import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sign.css';

function Sign() {
  const [formData, setFormData] = useState({
    h_ner: '',
    h_ovog: '', 
    h_huis: '', 
    h_utas: '', 
    h_gmail: '',
    h_bolovsrol_zereg: '', 
    h_mergejil: '', 
    password: '',
    password_confirmation: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    try {
      e.preventDefault();

      try {
        const response = await fetch('http://127.0.0.1:8000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="mainSig">
      <div className='contextSig'>
        <form className='LogForm'>
          <input
            className='inputSig'
            type='text'
            name='h_ner'
            placeholder='Хэрэглэгч нэр'
            value={formData.h_ner}
            onChange={handleChange}
          />
          <input
            className='inputSig'
            type='text'
            name='h_ovog'
            placeholder='Овог'
            value={formData.h_ovog}
            onChange={handleChange}
          />
          <input
            className='inputSig'
            type='text'
            name='h_huis'
            placeholder='Хүйс'
            value={formData.h_huis}
            onChange={handleChange}
          />
          <input
            className='inputSig'
            type='text'
            name='h_utas'
            placeholder='Утас'
            value={formData.h_utas}
            onChange={handleChange}
          />
          <input
            className='inputSig'
            type='email'
            name='h_gmail'
            placeholder='Майл'
            value={formData.h_gmail}
            onChange={handleChange}
          />
          <input
            className='inputSig'
            type='text'
            name='h_bolovsrol_zereg'
            placeholder='Боловсрол зэрэг'
            value={formData.h_bolovsrol_zereg}
            onChange={handleChange}
          />
          <input
            className='inputSig'
            type='text'
            name='h_mergejil'
            placeholder='Мэргэжил'
            value={formData.h_mergejil}
            onChange={handleChange}
          />
          <input
            className='inputSig'
            type='password'
            name='password'
            placeholder='Нууц'
            value={formData.pass}
            onChange={handleChange}
          />
          <input
            className='inputSig'
            type='password'
            name='password_confirmation'
            placeholder='Нууц давтах'
            value={formData.pass_confirmation}
            onChange={handleChange}
          />
          <button type="button" onClick={handleRegistration}>Бүртгүүлэх</button>
          <p>Бүртгэлтэй бол ..</p> <Link className='aLink' to="/">Нэвтрэх</Link>
        </form>
      </div>
    </div>
  );
}

export default Sign;
