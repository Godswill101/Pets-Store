import React from 'react'
import './Showcase.css'

const Showcase = ({ contentHeading, contentSpan, contentText, shop, image }) => {
  return (
    <div className='showcase'>
      <div className='content'>
        <h2><span>{contentHeading}</span><br/> {contentSpan}</h2>
        <h4>{contentText}</h4>
        <a href="#products" className="btn">{shop}</a>
      </div>

      <img src={image} className="wave" alt=""/>
    </div>
  )
}

export default Showcase;