import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Tetgeleg.css';




function Tetgeleg() {
    const [tetgeleg,setTetgeleg] = useState([]);

    useEffect(() => {
        const fetchTetgelegData = async () => {
          try {
            const response = await fetch(
              `http://localhost:3001/tetgelegShow`,
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
          fetchTetgelegData();
        
      }, []);
    return (
        <div className='MainHome'>
            <div className='header'>
                <img src='C:\A_Hicheel\Laravel\bd_web\src\Image\logo.png' alt='Logo' width='200' height='100' />
                <Link to='/Home'>Нүүр</Link>
                <a href='#'>Тэтгэлэг</a>
                <Link to='/Home#our-team'>Баг</Link>
                <Link to='/'>Нэвтрэх</Link>
            </div>

            <div className="scholarship-container">
            {tetgeleg.map((item, index) => (

                <div className="scholarship-box">
                    <img className="inputAdd" src={item.tetgeleg_zurag} alt={`Image ${index}`} />
                    <div className="scholarship-name">{item.tetgeleg_ner}</div>
                    <div className="end-date">{item.tetgeleg_hugatsaa}</div>
                    <div className="description">{item.tetgeleg_tuhai}</div>
                </div>
            ))}
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
                        <p><a href="#" target="_blank">Facebook</a></p>
                        <p><a href="#" target="_blank">Twitter</a></p>
                        <p><a href="#" target="_blank">Instagram</a></p>
                    </div>

                    <div className="footer-content">
                        <h3>Quick Links</h3>
                        <p><a href="#">Home</a></p>
                        <p><a href="#">Тэтгэлэг</a></p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Tetgeleg;
