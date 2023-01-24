import React from 'react'
import './Contact.css'

const Contact = ({ image }) => {
  return (
    <section className='contact' id='contact'>
      <div className='image'><img src={image} alt='' /></div>
      <form action="">
        <h3>contact <span>Us</span></h3>
        <input type="text" placeholder="your name" className="box"/>
        <input type="email" placeholder="your email" className="box"/>
        <input type="tumber" placeholder="your number" className="box"/>
        <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>
        <input type="submit" value="send message" className="btn"/>
      </form>
    </section>
  )
}

export default Contact;