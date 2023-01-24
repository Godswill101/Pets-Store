import React from 'react'
import { FaBone, FaCar, FaRegCheckCircle, FaTrain } from 'react-icons/fa'
import './Plans.css'

const Plans = () => {
  return (
    <section className='plan' id='plan'>
      <h2 className='heading'><span>Choose</span> A Plan</h2>
      <div className='box-container'>
        <div class="box">
          <h3 class="title">pet care</h3>
          <h3 class="day"> 1 day </h3>
          <FaBone className='icon' />
          <div class="list">
            <p> pet room <FaRegCheckCircle className="fa-check"/> </p>
            <p> pet grooming <FaRegCheckCircle className="fa-check"/> </p>
            <p> pet exercise <FaRegCheckCircle className="fa-check"/> </p>
            <p> pet meals <FaRegCheckCircle className="fa-check"/> </p>
          </div>
          <div class="amount"><span>$</span>50</div>
          <a href="q" class="btn"> choose plan </a>
        </div>

        <div class="box">
          <h3 class="title">pet care</h3>
          <h3 class="day"> 10 days </h3>
          <FaTrain className="icon"/>
          <div class="list">
            <p> pet room <FaRegCheckCircle className="fa-check"/> </p>
            <p> pet grooming <FaRegCheckCircle className="fa-check"/> </p>
            <p> pet exercise <FaRegCheckCircle className="fa-check"/> </p>
            <p> pet meals <FaRegCheckCircle className="fa-check"/> </p>
          </div>
          <div class="amount"><span>$</span>350</div>
          <a href="q" class="btn"> choose plan </a>
        </div>

        <div class="box">
          <h3 class="title">pet care</h3>
          <h3 class="day"> 30 days </h3>
          <FaCar className="icon"/>
          <div class="list">
            <p> pet room <FaRegCheckCircle className="fa-check"/> </p>
            <p> pet grooming <FaRegCheckCircle className="fa-check"/> </p>
            <p> pet exercise <FaRegCheckCircle className="fa-check"/> </p>
            <p> pet meals <FaRegCheckCircle className="fa-check"/> </p>
          </div>
          <div class="amount"><span>$</span>650</div>
          <a href="q" class="btn"> choose plan </a>
        </div>
      </div>
    </section>
  )
}

export default Plans;