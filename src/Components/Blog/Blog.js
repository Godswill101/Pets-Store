import React from 'react'
import './Blog.css'

const Blog = ({ paragraph, imageOne, imageTwo, imageThree, imageFour }) => {
  return (
    <section className='blog' id='blog'>
        <h2 className='heading'><span>Our</span> Blog Posts</h2>
        <div className='box-container'>
            <div className='box'>
                <div className='image'>
                    <img src={imageOne} alt="" />
                </div>
                <div className='content'>
                    <h3>how to take care of your pets</h3>
                    <div><span>january 21 | humans | pets</span></div>
                    <p>{paragraph}</p>
                    <button className="btn">read more</button>
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src={imageTwo} alt="" />
                </div>
                <div className='content'>
                    <h3>the importance of pets in our lives</h3>
                    <div><span>january 21 | humans | pets</span></div>
                    <p>{paragraph}</p>
                    <button className="btn">read more</button>
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src={imageThree} alt="" />
                </div>
                <div className='content'>
                    <h3>the benefits of pets around kids </h3>
                    <div><span>january 21 | humans | pets</span></div>
                    <p>{paragraph}</p>
                    <button className="btn">read more</button>
                </div>
            </div>
            <div className='box'>
                <div className='image'>
                    <img src={imageFour} alt="" />
                </div>
                <div className='content'>
                    <h3>how to stay healthy around pets </h3>
                    <div><span>january 21 | humans | pets</span></div>
                    <p>{paragraph}</p>
                    <button className="btn">read more</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blog;