import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import ME from "../../assets/me.png"
import Headersocial from './Headersocial'

function Header() {
  return (
    <header>
      <div className='container header_container'>
          <h3><span className='header_text'>Hello</span> I'm</h3>
          <h1><span className='header_text'>Nurudeen</span> Saliu</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <Headersocial />
          
          <div className="me">
            <img src={ME} alt="ME" />
          </div>

          <a href="#contact" className='scroll_down'>Scroll Down</a>
          </div>
    </header>
  )
}

export default Header