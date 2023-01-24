import React from 'react'
import './Review.css'
import { FaTwitter } from 'react-icons/fa'

const Review = ({ imageOne, imageTwo, imageThree, imageFour, paragraph }) => {
  return (
    <section className='review'>
        <h2 className='heading'> <span>Client</span> Feedbacks</h2>
        <div className='box-container'>
            <div className='box'>
                <div className='user'>
                    <img src={imageOne} alt='' />
                    <div classNmae="user-info">
                        <h4>Juliet Michael <FaTwitter /> </h4>
                        <small>@julimike</small>
                    </div>
                </div>
                <p>{paragraph}</p>
            </div>
            <div className='box'>
                <div className='user'>
                    <img src={imageTwo} alt=''/>
                    <div class="user-info">
                        <h4>Mich Henderson <FaTwitter /> </h4>
                        <small>@mhenson</small>
                    </div>
                </div>
                <p>{paragraph}</p>
            </div>
            <div className='box'>
                <div className='user'>
                    <img src={imageThree} alt=''/>
                    <div class="user-info">
                        <h4>Juliet Robertson <FaTwitter /> </h4>
                        <small>@julerobert</small>
                    </div>
                </div>
                <p>{paragraph}</p>
            </div>
            <div className='box'>
                <div className='user'>
                    <img src={imageFour} alt=''/>
                    <div class="user-info">
                        <h4>Yun Hu <FaTwitter /> </h4>
                        <small>@yonhun</small>
                    </div>
                </div>
                <p>{paragraph}</p>
            </div>
        </div>
    </section>
  )
}

export default Review;