import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./BaiInsert.css";

function BaiInsert() {
  const [formData, setFormData] = useState({
    h_ner: "",
    h_ovog: "",
    h_huis: "",
    h_utas: "",
    h_gmail: "",
    h_bolovsrol_zereg: "",
    h_mergejil: "",
    password: "",
    password_confirmation: "",
  });
  const navigator = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegistration = async (e) => {
    try {
      e.preventDefault();

      console.log(formData);
      try {
        const response = await fetch("http://127.0.0.1:8000/api/BaiInsert", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        navigator("/login");

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="mainSig">
      <div className="contextSig">
        <form className="LogForm" onSubmit={handleRegistration}>
          <input
            className="inputSig"
            type="text"
            name="h_ner"
            placeholder="Хэрэглэгч нэр"
            value={formData.h_ner}
            onChange={handleChange}
          />
          <input
            className="inputSig"
            type="text"
            name="h_utas"
            placeholder="Утас"
            value={formData.h_utas}
            onChange={handleChange}
          />
          <input
            className="inputSig"
            type="email"
            name="h_gmail"
            placeholder="Майл"
            value={formData.h_gmail}
            onChange={handleChange}
          />
          <input
            className="inputSig"
            type="password"
            name="password"
            placeholder="Нууц"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            className="inputSig"
            type="password"
            name="password_confirmation"
            placeholder="Нууц давтах"
            value={formData.pass_confirmation}
            onChange={handleChange}
          />
          <button type="submit">Бүртгүүлэх</button>
          <p>Бүртгэлтэй бол ..</p>{" "}
          <Link className="aLink" to="/login">
            Нэвтрэх
          </Link>
        </form>
      </div>
    </div>
  );
}

export default BaiInsert;
