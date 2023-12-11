import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./TetgelegDelgerengui.css";

function TetgelegDelgerengui() {
  const [tetgeleg, setTetgeleg] = useState({
    tetgeleg_zurag: "",
    tetgeleg_ner: "",
    tetgeleg_hugatsaa: "",
    tetgeleg_tuhai: "",
    amrah_huree: [],
    tawigdah_shaardlaga: [],
    burduuleh_material: [],
    holboo_barih: [],
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchTetgelegData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/TetgelegDelgerengui/${id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (response && response.ok) {
          const data = await response.json();
          setTetgeleg(data);
          console.log("hiiii", data);
        } else {
          console.error(
            "Error retrieving Tetgeleg data:",
            response ? response.statusText : "Unknown error"
          );
        }
      } catch (error) {
        console.error("Error submitting form:", error.message);
      }
    };
    if (id) {
      fetchTetgelegData();
    }
  }, [id]);
  return (
    <div className="MainHome">
      <div className="header">
        <img
          src="C:\A_Hicheel\Laravel\bd_web\src\Image\logo.png"
          alt="Logo"
          width="200"
          height="100"
        />
        <Link to="/Home">Нүүр</Link>
        <a href="#">Тэтгэлэг</a>
        <Link to="/Home#our-team">Баг</Link>
        <Link to="/">Нэвтрэх</Link>
      </div>
      <div>
        <div className="scholarship-detail">
          <img
            className="inputAdd"
            src={tetgeleg.tetgeleg_zurag}
            alt={`Image`}
          />
          <br></br>
          <div className="scholarship-name">{tetgeleg.tetgeleg_ner}</div>
          <div className="end-date">{tetgeleg.tetgeleg_hugatsaa}</div>
          <div className="description">{tetgeleg.tetgeleg_tuhai}</div>
          {tetgeleg.hamrah_huree.length > 0 &&
            tetgeleg.hamrah_huree.map((item, index) => (
              <div key={index} className="description">
                {item}
              </div>
            ))}
          {tetgeleg.tawigdah_shaardlaga.length > 0 &&
            tetgeleg.tawigdah_shaardlaga.map((item, index) => (
              <div key={index} className="description">
                {item}
              </div>
            ))}
          {tetgeleg.burduuleh_material.length > 0 &&
            tetgeleg.burduuleh_material.map((item, index) => (
              <div key={index} className="description">
                {item}
              </div>
            ))}
          {tetgeleg.holboo_barih.length > 0 &&
            tetgeleg.holboo_barih.map((item, index) => (
              <div key={index} className="description">
                {item}
              </div>
            ))}
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <h3>Contact Us</h3>
            <p>Email: tohirsontetgeleg@example.com</p>
            <p>Phone: +976 86120536</p>
          </div>

          <div className="footer-content">
            <h3>Follow Us</h3>
            <p>
              <a href="#" target="_blank">
                Facebook
              </a>
            </p>
            <p>
              <a href="#" target="_blank">
                Twitter
              </a>
            </p>
            <p>
              <a href="#" target="_blank">
                Instagram
              </a>
            </p>
          </div>

          <div className="footer-content">
            <h3>Quick Links</h3>
            <p>
              <a href="#">Home</a>
            </p>
            <p>
              <a href="#">Тэтгэлэг</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TetgelegDelgerengui;
