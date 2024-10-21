import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import payment from "../images/payment.png";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <h3>Digital <span>Drive</span></h3>
                    <p>
                        We deliver top-notch digital marketing strategies and cutting-edge software solutions tailored to your business needs.
                    </p>
                    <div className={styles.payment}>
                        <Image src={payment} alt="Payment Methods" />
                    </div>
                </div>
                <div>
                    <h3>SERVICES</h3>
                    <ul>
                        <li><a href="#">Web Development</a></li>
                        <li><a href="#">Mobile App Development</a></li>
                        <li><a href="#">Digital Marketing</a></li>
                        <li><a href="#">SEO Optimization</a></li>
                    </ul>
                </div>
                <div>
                    <h3>SUPPORT</h3>
                    <ul>
                        <li>Contact Us</li>
                        <li><a href="#">Payment Methods</a></li>
                        <li><a href="#">Delivery</a></li>
                        <li><a href="#">Return & Exchanges</a></li>
                    </ul>
                </div>
                <div>
                    <h3>NEWSLETTER</h3>
                    <p>Be the first to know about new software releases, marketing trends, and exclusive promotions!</p>
                    <div className={styles.newsletter}>
                        <input 
                            placeholder="Your email" 
                            type="email" 
                            aria-label="Email for newsletter subscription" 
                        />
                    </div>
                </div>
            </div>
            <div className={styles['bottom-bar']}>
                <p>
                    Copyright © 2024 All rights reserved | This website is developed by <a href="https://layan-portfolio.vercel.app/">Muhammad Layan</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;