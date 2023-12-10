import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import Cookies from "js-cookie";

function Login() {
  const [formData, setFormData] = useState({
    h_gmail: "",
    password: "",
  });

  const navigator = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      Cookies.set("h_id", data.id);
      Cookies.set("h_type", data.h_type);
      navigator("/");
      if (response.ok) {
        // if (formData.h_ner === 'admin' && formData.pass === 'adminPassword') {
        //   navigator('/admin');
        // } else if (formData.h_ner === 'b' && formData.pass === 's') {
        //   navigator('/Bai');
        // } else {
        //   navigator('/Home');
        // }
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="mainLog">
      <div className="contextLog">
        <form className="LogForm" onSubmit={handleLogin}>
          <input
            className="inputLog"
            type="text"
            name="h_gmail"
            placeholder="Хэрэглэгч нэр"
            value={formData.h_gmail}
            onChange={handleChange}
          />
          <input
            className="inputLog"
            type="password"
            name="password"
            placeholder="Нууц"
            value={formData.pass}
            onChange={handleChange}
          />
          <a href="#">Нууц үгээ мартсан</a>
          <button type="submit">Нэвтрэх</button>
          <p>Бүртгэлгүй бол ..</p> <Link to="/sign">Бүртгүүлэх</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
