import React from 'react'
import './TopNav.css'
import {useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
import Logo from "../../assets/mylogo.jpeg"

function TopNav() {
    const [activeNav, setActiveNav] = useState('#home')
    const [showMenu, setShowMenu] = useState(false)

    function showIcon(){
        setShowMenu(!showMenu)
    }

  return (
    <main className='main-container'>
        <div className='main-logo'>
          <img src={Logo} alt="" />
            <span className='logo_text'>Code<span className='logo_with'>With</span>Nurez</span>
        </div>
    <div onClick={showIcon} className='nav_content' id={showMenu ? 'display-nav': 'no-display'}>
      <a href="#home" onClick={()=> setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>Home</a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</a>
      <a href="#experience" onClick={()=> setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ''}>Skill</a>
      <a href="#portfolio" onClick={()=> setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? 'active' : ""}>Projects</a>
      <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}>Contact</a>
      <a href="https://nurez-blog.vercel.app/"><button className='blog-btn'>Visit My Blog</button></a>
    </div>

        <div className='show' onClick={showIcon}>
            {showMenu ? <FaTimes fontSize={30} color="white"/> : <AiOutlineMenu fontSize={30} color=""black/>}
        </div> 
    </main>
  )
}

export default TopNav