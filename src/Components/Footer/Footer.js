import React from 'react'
import './Footer.css'
import { FaBaseballBall, FaEnvelopeOpenText, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPaw, FaPhoneAlt, FaPinterest, FaRegClock, FaTwitter } from 'react-icons/fa'

const Footer = ({ image }) => {
  return (
    <section className='footer'>
      <img src={image} alt='' />

      <div className='box-container'>
        <div className='box'>
          <div className="in-touch">
            <h2 className="">Keep In Touch With Us:</h2>
            <div className="">
              <h3 className=""><FaPhoneAlt /> Phone Number</h3>
              <p>(+234)-(0)-8075752554</p>
            </div>
            <div className="">
              <h3 className=""><FaEnvelopeOpenText /> Email Address</h3>
              <p>pets_store01@gmail.com</p>
            </div>
            <div className=''>
              <h3 className=''> <FaMapMarkerAlt/> Location</h3>
              <p>06 Gowon Street, Off Barrack Road By Waterboard, Abuja</p>
            </div>
          </div>
        </div>
        <div className='box'>
          <div className="day">
            <h2>Opening Hours: </h2>
            
            <h5><FaRegClock /> Monday To Friday - 8am to 5pm</h5>
            
            <h5><FaRegClock /> Saturday and Sunday - 10am to 3pm</h5>

            <div className='follow'>
              <h3>Follow Us</h3>
              <div className='icons'>
                <FaTwitter className='fa'/>
                <FaFacebook className='fa'/>
                <FaPinterest className='fa'/>
                <FaInstagram className='fa'/>
              </div>
            </div>
          </div>
        </div>
        <div className='box'>
          <h2>Site Links</h2>
          <a href="#home"> home </a>
          <a href="#about">about</a>
          <a href="#plan">plans</a>
          <a href="#services">services</a>
          <a href="#contact">contact</a>
        </div>
      </div>
      <div className='credit'>
        <p> Copyright &copy;  <span> <FaPaw />Pets Store <FaBaseballBall className='ball'/></span> 2023, All Rights Reserved <a href="https://github.com/Godswill101"><FaGithub className='ball'/> </a><a href='https://www.linkedin.com/in/chukwudi-godswill-68b35b214/'><FaLinkedin /> Dev. By Godswill101</a> </p>
      </div>
    </section>
  )
}

export default Footer;