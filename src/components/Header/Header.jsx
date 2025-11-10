import React from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from 'react-redux';

function Header() {
  const {timer} = useSelector((state) => state.counter)
  return (
    <>
      <div className='black-header'>
        <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
        <Link>ShopNow</Link>

      </div>
      <div className='header'>
        <h1 className='logo'>Exclusive {timer}</h1>
        <div className='menu'>
          <li><Link to={""}>Home</Link></li>
          <li><Link to={"contact"}>Contact</Link></li>
          <li><Link to={"about"}>About</Link></li>
          <li><Link>Sign Up</Link></li>
        </div>
        <div className='header-right'>
          <input type="text" placeholder='What are you looking for?' />
          <CiSearch className='lupa' />
          <CiHeart className='heart' />
          <CiShoppingCart className='cart' />
        </div>
      </div>
      <div className='line'></div>
    </>
  )
}

export default Header
