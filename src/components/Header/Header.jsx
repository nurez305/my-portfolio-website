import React from 'react'
import "./Header.css"
import CTA from "./CTA"
import ME from "../../assets/nas.png"
import Headersocial from './Headersocial'
import {motion} from 'framer-motion'

function Header() {
  return (
    <header>
      <div className='container header_container'>
        <motion.div
        initial={{y: -1000}}
        animate={{y: 0}}
        transition={{delay: 0.2, type: 'spring', stiffness: 50}}
        >
          <h3><span className='header_text'>Hello</span> I'm</h3>
          <h1><span className='header_text'>Nurudeen</span> Saliu</h1>
          <h5 className="text-light">Fullstack Developer(NodeJs)</h5>
          </motion.div>
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