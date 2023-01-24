import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <div className="">
        <h4>Sign Up For Newsletter</h4>
        <p>Get E-mail updates about our latest products and <span>special offers. </span></p>
      </div>

        <div className="form">
          <input type="text" placeholder="write your email address here" required />
          <button type="button" class="normal">Sign Up</button>
        </div>
    </div>
  )
}

export default Newsletter