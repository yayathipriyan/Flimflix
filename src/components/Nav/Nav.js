import React, { useEffect, useState } from 'react'
import './Nav.css'
import logo from "../../assets/logo.png"
import ulogo from "../../assets/user-logo.png"
import { Link } from 'react-router-dom'

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = () =>{
    if(window.scrollY > 100){
      setShow(true);
    } else{
      setShow(false);
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavbar);

    return () => window.removeEventListener("scroll",transitionNavbar);
  },[]);

  console.log(show);

  return (
    <div className={`nav ${show && "nav_black"} `}>
      <div className='nav_contents'>
        <Link to="/"><img src={logo} alt='' className='nav_logo'/></Link>
        <Link to="/profile"><img src={ulogo} alt='' className='nav_avatar'/></Link>
      </div>
    </div>
  )
}

export default Nav;