import React from 'react'
import { useRef } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import './NavBar.css';

function Navbar() {

    const navRef = useRef();

    const handleNavBar = () => {
        navRef.current.classList.toggle('smaller_nav');
        }


  return (
    <header>
        {/* Logo */}
        <h2>FLOOD.MONITORING</h2>
        {/* Names of pages in nav and linking them to those page components */}
        <nav ref={navRef}>
            {/* list of pages hyperlinked*/}
            <a href='/#'>Home</a>
            <a href='/#'>PageOne</a>
            <a href='/#'>PageTwo</a>
            <a href='/#'>PageThree</a>
            <button className='nav-btn nav-close-btn' onClick={handleNavBar}>
                <FaTimes />
            </button>
        </nav>

            <button className='nav-btn' onClick={handleNavBar}>
                <FaBars />
            </button>

    </header>
  )
}

export default Navbar
