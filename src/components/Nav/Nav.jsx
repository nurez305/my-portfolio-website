import React from 'react'
import "./Nav.css"
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FiBookOpen}  from 'react-icons/fi'
import {RiServiceLine} from 'react-icons/ri'
import {AiOutlineMessage} from 'react-icons/ai'
import {useState, useEffect} from 'react'
import { motion } from "framer-motion";





function Nav() {
  const [activeNav, setActiveNav] = useState('#home')
  const [shouldShowNav, setShouldShowNav ] = useState(false)
  const [lastPos, setLastPos] = useState(0)

useEffect(()=>{
  function handleScroll(){
    const psoition = window.scrollY
    const isScrolling = psoition < lastPos
    setShouldShowNav(isScrolling)
    setLastPos(psoition)

  }

  window.addEventListener('scroll', handleScroll, false)

  return ()=>{
    window.removeEventListener('scroll', handleScroll, false)
  }
},[lastPos])

  return (
    <motion.nav animate={{opacity: shouldShowNav ? 1 : 0}} initial={{opacity: 0}} transition={{opacity: {duration : 1}}}>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ''}><FiBookOpen /></a>
      <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? 'active' : ""}><RiServiceLine /></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><AiOutlineMessage /></a>
    </motion.nav>
  )
}

export default Nav