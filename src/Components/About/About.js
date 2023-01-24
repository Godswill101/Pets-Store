import React from 'react'
import './About.css'

const About = ({ paragraphOne,paragraphTwo, button, image, imageDog, imageCat, imageShopDog, imageShopCat }) => {
  return (
    <div>
      <section className='about' id='about'>
        <div className='image'><img src={image} alt=""/></div>
        <div className='content'>
          <h3>premium <span>pet food</span> manufacturer</h3>
          <p>{paragraphOne}</p>
          <button className="btn">{button}</button>
          <div className='box-container'> 
            <div className='box'>
              <h3>790+</h3>
              <p>satiesfied clients</p>
            </div>
            <div>
              <h3>450+</h3>
              <p>Nursing Pets</p>
            </div>
            <div>
              <h3>650+</h3>
              <p>Under Care </p>
            </div>
          </div>
        </div>
      </section>

      <div className='dog-food'>
        <div className="image"><img src={imageDog} alt="" /></div>
        <div className="content">
          <h3> <span>air dried</span> dog food </h3>
          <p>{paragraphTwo}</p>
          <div className="amount">$15.00 - $30.00</div>
          <a href="#products"> <img src={imageShopDog} alt=""/> </a>
        </div>
      </div>

      <div class="cat-food">
        <div class="content">
          <h3> <span>air dried</span> cat food </h3>
          <p>{paragraphTwo}</p>
          <div class="amount">$15.00 - $30.00</div>
          <a href="#products"> <img src={imageShopCat} alt=""/> </a>
        </div>

        <div class="image">
          <img src={imageCat} alt=""/>
        </div>

      </div>
    </div>
  )
}

export default About;