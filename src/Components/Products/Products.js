import React from 'react'
import { FaEye, FaHeart, FaShoppingCart } from 'react-icons/fa';
import './Products.css'

const Products = ({ imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix, imageSeven, imageEight }) => {
  return (
    <section className='product' id='products'>
        <h2 className='heading'><span>Our</span> Products</h2>
        <div className='box-container'>
            <div className='box'>
                <div className='icons'>
                    <FaShoppingCart  className='fa'/>
                    <FaHeart  className='fa'/>
                    <FaEye  className='fa'/>
                </div>
                <div className='image'>
                    <img src={imageOne} alt='' />
                </div>
                <div className="content">
                    <h3>air-dried food</h3>
                    <div className="amount"> $15.00 - $30.00 </div>
                </div>
            </div>
            <div className='box'>
                <div className='icons'>
                    <FaShoppingCart  className='fa'/>
                    <FaHeart  className='fa'/>
                    <FaEye  className='fa'/>
                </div>
                <div className='image'>
                    <img src={imageTwo} alt='' />
                </div>
                <div className="content">
                    <h3>air-dried food</h3>
                    <div className="amount"> $15.00 - $30.00 </div>
                </div>
            </div>
            <div className='box'>
                <div className='icons'>
                    <FaShoppingCart  className='fa'/>
                    <FaHeart  className='fa'/>
                    <FaEye  className='fa'/>
                </div>
                <div className='image'>
                    <img src={imageThree} alt='' />
                </div>
                <div className="content">
                    <h3>air-dried food</h3>
                    <div className="amount"> $15.00 - $30.00 </div>
                </div>
            </div>
            <div className='box'>
                <div className='icons'>
                    <FaShoppingCart  className='fa'/>
                    <FaHeart  className='fa'/>
                    <FaEye  className='fa'/>
                </div>
                <div className='image'>
                    <img src={imageFour} alt='' />
                </div>
                <div className="content">
                    <h3>air-dried food</h3>
                    <div className="amount"> $15.00 - $30.00 </div>
                </div>
            </div>
            <div className='box'>
                <div className='icons'>
                    <FaShoppingCart  className='fa'/>
                    <FaHeart  className='fa'/>
                    <FaEye  className='fa'/>
                </div>
                <div className='image'>
                    <img src={imageFive} alt='' />
                </div>
                <div className="content">
                    <h3>air-dried food</h3>
                    <div className="amount"> $15.00 - $30.00 </div>
                </div>
            </div>
            <div className='box'>
                <div className='icons'>
                    <FaShoppingCart  className='fa'/>
                    <FaHeart  className='fa'/>
                    <FaEye  className='fa'/>
                </div>
                <div className='image'>
                    <img src={imageSix} alt='' />
                </div>
                <div className="content">
                    <h3>air-dried food</h3>
                    <div className="amount"> $15.00 - $30.00 </div>
                </div>
            </div>
            <div className='box'>
                <div className='icons'>
                    <FaShoppingCart  className='fa'/>
                    <FaHeart  className='fa'/>
                    <FaEye  className='fa'/>
                </div>
                <div className='image'>
                    <img src={imageSeven} alt='' />
                </div>
                <div className="content">
                    <h3>air-dried food</h3>
                    <div className="amount"> $15.00 - $30.00 </div>
                </div>
            </div>
            <div className='box'>
                <div className='icons'>
                    <FaShoppingCart  className='fa'/>
                    <FaHeart  className='fa'/>
                    <FaEye  className='fa'/>
                </div>
                <div className='image'>
                    <img src={imageEight} alt='' />
                </div>
                <div className="content">
                    <h3>air-dried food</h3>
                    <div className="amount"> $15.00 - $30.00 </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products;