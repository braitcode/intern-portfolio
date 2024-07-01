import React from 'react'
import "./Navbar.css"
// import { SiWebmoney } from "react-icons/si";
import { menu } from "../data"
import { Link,animateScroll as scroll } from 'react-scroll';
import { FaBarsStaggered } from'react-icons/fa6'
import { useState } from "react";
import { FaTimes } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import logo from '../../assets/icons/image 1.png'

const Navbar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <nav className='navbar__container bg-white shadow-md'>
      {
        showSideBar ? (
          <div className='overlay' onClick={()=>setShowSideBar(!showSideBar)}></div>
        ):""
      }
        <div className="logo__container">
            <img src={logo} alt="" className='w-[44px] h-[40px]' />
            <p className='font-[Roboto] text-[25.21px]'>JohnDev,</p>
        </div>
        <div className={`tab__group ${showSideBar ? 'show':'' }`}>
          <span className="icon__container close__btn" onClick={()=>setShowSideBar(!showSideBar)}>
              <FaTimes/>
          </span>
            {
              menu.map((list, index) => (
                <Link
                  activeClass='active'
                  className='tab__item name'
                  to={list.name.toLowerCase()}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={index}
                >

                  {list.name}
                  </Link>
              ))
            }
        </div>
        
        <div className="nav__buttons__group">
          <Button className='btn btn__primary' variant="outline-primary">Contact Me</Button>
          <FaBarsStaggered className="menu" onClick={()=>setShowSideBar(!showSideBar)}/>
        </div>
    </nav>
  )
}

export default Navbar