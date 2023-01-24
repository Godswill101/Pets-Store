import React, { useState } from 'react'
import './Navbar.css'
import { FaBars, FaBaseballBall, FaFacebook, FaInstagram, FaPaw, FaPinterest, FaRegTimesCircle, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuToggler = () => setMenuOpen((p) => !p);

  return (
    <header className='header' id='home'>
      <h1 className="logo"><a href='#'> <FaPaw className='fa'/> Pets Store <FaBaseballBall className='ball'/> </a></h1>

      <nav className={menuOpen ? 'navbar active' : 'navbar'}>
        <a href="#"> home </a>
        <a href="#about">about</a>
        <a href="#products">products</a>
        <a href="#services">services</a>
        <a href="#plan">plans</a>
        <a href="#contact">contact</a>
        <a href="#blog">blog</a>
      </nav>

      <div class="icons">
        <FaTwitter className='fa'/>
        <FaFacebook className='fa'/>
        <FaPinterest className='fa'/>
        <FaInstagram className='fa'/>  
      </div>

      <div className='icon' id='menu-btn'  onClick={menuToggler}>
        {!menuOpen ? <FaBars /> : <FaRegTimesCircle />}
      </div>
    </header>
  )
}

export default Navbar;