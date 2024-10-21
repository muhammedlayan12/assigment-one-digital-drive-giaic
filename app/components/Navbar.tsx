"use client";

import styles from '../styles/Navbar.module.css';
import Link from 'next/link';  
import { useState } from 'react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // State for services dropdown

    const toggleSideMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleServicesMenu = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <div>
            <nav className={styles.navbar}>
                <div className={styles.humburger} id='sideMenu' onClick={toggleSideMenu}>&#9776;</div>
                <div className={`${styles.sideMenu} ${isMenuOpen ? styles.active : ''}`}>
                    <div className={styles.cut} onClick={toggleSideMenu}>&times;</div>
                    <ul>
                        <li><Link onClick={toggleSideMenu} href='/'>Home</Link></li>
                        <li onMouseEnter={toggleServicesMenu} onMouseLeave={toggleServicesMenu}>
                            <Link onClick={toggleSideMenu} href='/services'>Services</Link>
                                        <ol className={styles.orderlist} >
                                    <li><Link href='/services/appdevelopment'>App Developmemnt</Link></li>
                                    <li><Link href='/services/digitalmarketing'>Digital Marketing</Link></li>
                                    <li><Link href='/services/webdevelopment'>Web Development</Link></li>
                                </ol>
                
                        </li>
                        <li><Link onClick={toggleSideMenu} href='/about'>About</Link></li>
                        <li><Link onClick={toggleSideMenu} href='/contact'>Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.name}>
                    Digital <span>Drive</span>
                </div>
                <ul className={styles.navigation}>
                    <li><Link href="/">Home</Link></li>
                    <li onMouseEnter={toggleServicesMenu} onMouseLeave={toggleServicesMenu}>
                        <Link href='/services'>Services</Link>
                        {isServicesOpen && (
                            <ul className={styles.servicesDropdown}>
                                <li><Link href='/services/appdevelopment'>App Developmemnt</Link></li>
                                    <li><Link href='/services/digitalmarketing'>Digital Marketing</Link></li>
                                    <li><Link href='/services/webdevelopment'>Web Development</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>  
        </div>
    );
}

export default Navbar;
