import React from 'react'
import "./Card.scss"
import game from "../../assets/image/game.png"
import star from "../../assets/svg/star.svg";
import { CiHeart } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function Card() {
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={game} alt="" />
        <div className='discount'>-40%</div>
        <div className='icons'>
          <CiHeart className='heart' />
          <MdOutlineRemoveRedEye className='eye' />
        </div>
        <button className='btn'>Add To Cart</button>
      </div>
      <div className='card-content'>
        <h3>Title</h3>
        <div className='prices'>
            <p className='new-price'>$120</p>
            <p className='old-price'>$160</p>
        </div>
        <div className='rating'>
            {
              [1,2,3,4,5].map((item) => (
                <img src={star} key={item}  />
              ))
            }
            (88)
        </div>
      </div>
    </div>
  )
}

export default Card

// redux-toolkit 
// React 
