import React from 'react'
import { FaBasketballBall, FaHome, FaPalette, FaSeedling, FaSign, FaSpa } from 'react-icons/fa'
import './Services.css'

const Services = ({ paragraph }) => {
  return (
    <section className='services' id='services' >
      <h2 className='heading'> <span>Our</span> Services</h2>
      <div className='box-container'>
        <div className='box'>
          <FaHome className="fa"  />
          <h3>Dog Boarding</h3>
          <p>{paragraph}</p>
          <a href="q" class="btn">read more</a>
        </div>
        <div className='box'>
          <FaSpa className="fa" />
          <h3>spa & grooming</h3>
          <p>{paragraph}</p>
          <a href="q" class="btn">read more</a>
        </div>
        <div className='box'>
          <FaPalette className="fa" />
          <h3>healthy meal</h3>
          <p>{paragraph}</p>
          <a href="q" class="btn">read more</a>
        </div>
        <div className='box'>
          <FaBasketballBall className="fa" />
          <h3>activity exercise</h3>
          <p>{paragraph}</p>
          <a href="q" class="btn">read more</a>
        </div>
        <div className='box'>
          <FaSeedling className="fa" />
          <h3>health care</h3>
          <p>{paragraph}</p>
          <a href="q" class="btn">read more</a>
        </div>
        <div className='box'>
          <FaSign className="fa" />
          <h3>Training</h3>
          <p>{paragraph}</p>
          <a href="q" class="btn">read more</a>
        </div>
      </div>
    </section>
  )
}

export default Services;