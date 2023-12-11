import React from 'react';
import { Link } from 'react-router-dom';
import './TetgelegDelgerengui.css';

function TetgelegDelgerengui() {
    return (
        <div className='MainHome'>
            <div className='header'>
                <img src='C:\A_Hicheel\Laravel\bd_web\src\Image\logo.png' alt='Logo' width='200' height='100' />
                <Link to='/Home'>Нүүр</Link>
                <a href='#'>Тэтгэлэг</a>
                <Link to='/Home#our-team'>Баг</Link>
                <Link to='/'>Нэвтрэх</Link>
            </div>

            <div className="scholarship-detail">
  <img className="logo" src="organization-logo.png" alt="Organization Logo" /><br></br>
  <div className="scholarship-name">Scholarship Name 1</div>
  <div className="end-date">End Date: December 31, 2023</div>
  <div className="description">Delgerengui 1.</div>
  <div className="description">Delgerengui 2</div>
  <div className="description">Delgerengui 3.</div>
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

export default TetgelegDelgerengui;
