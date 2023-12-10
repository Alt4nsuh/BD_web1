import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import member1Image from './member1.jpg';
import member2Image from './member2.jpg';
import member3Image from './member3.jpg';
import member4Image from './member4.jpg';

function Home() {
    return (
        <div className='MainHome'>
            <div className='header'>
                <img src='C:\A_Hicheel\Laravel\bd_web\src\Image\logo.png' alt='Logo' width='200' height='100' />
                <a href='#zorilgo'>Нүүр</a>
                <Link to='/Tetgeleg'>Тэтгэлэг</Link>
                <a href='#our-team'>Баг</a>
                <Link to='/'>Нэвтрэх</Link>
            </div>

            <div className='zorilgo' id="zorilgo">
                <img src='https://niitlelch.mn/wp-content/uploads/2019/01/Ungariin-zasgiin-gazriin-tetgeleg.jpeg' alt='zorilgo' width='1524' height='800' />
                <div className='bidniiZorilgo'>
                    <p>Бидний зорилго:</p>
                    <p>Залууст тэтгэлэгийн мэдээллийг цаг алдалгүй хүргэнэ</p>
                    <p>Тогтмол хэрэглэгч: 1</p>
                    <p>Зарлагдсан тэтгэлэг: 1</p>
                    <p>Хандалтын тоо: 1</p>
                </div>
            </div>

            <div id="our-team">
            <header>
            <h1>Our Amazing Team</h1>
            </header>

            <section>
                <div className="team-member">
                <img src={member1Image} alt="Team Member 1" />
                    <div className="member-info">
                        <h2>Б.Алтансүх</h2>
                        <p>ШУТИС МХТС</p>
                    </div>
                </div>

                <div className="team-member">
                    <img src={member2Image} alt="Team Member 2" />
                    <div className="member-info">
                        <h2>Э.Түвшинжаргал</h2>
                        <p>ШУТИС МХТС</p>
                    </div>
                </div>

                <div className="team-member">
                    <img src={member3Image} alt="Team Member 3" />
                    <div className="member-info">
                        <h2>М.Алтан-Очир</h2>
                        <p>ШУТИС МХТС</p>
                    </div>
                </div>

                <div className="team-member">
                    <img src={member4Image} alt="Team Member 4" />
                    <div className="member-info">
                        <h2>Л.Минжээ</h2>
                        <p>ШУТИС МХТС</p>
                    </div>
                </div>
            </section>
            </div>
            <footer>
        <div class="footer-container">
            <div class="footer-content">
                <h3>Contact Us</h3>
                <p>Email: tohirsontetgeleg@example.com</p>
                <p>Phone: +976 86120536</p>
            </div>

            <div class="footer-content">
                <h3>Follow Us</h3>
                <p><a href="#" target="_blank">Facebook</a></p>
                <p><a href="#" target="_blank">Twitter</a></p>
                <p><a href="#" target="_blank">Instagram</a></p>
            </div>

            <div class="footer-content">
                <h3>Quick Links</h3>
                <p><a href="#">Home</a></p>
                <p><a href="#">Тэтгэлэг</a></p>
            </div>
        </div>
    </footer>
        </div>
    );
}
export default Home;
