import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBookOpen}  from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState} from 'react'





function Nav() {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ''}><FiBookOpen /></a>
      <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? 'active' : ""}><RiServiceLine /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </nav>
  )
}

export default Nav