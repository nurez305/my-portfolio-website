import React from 'react'
import "./Footer.css"
import {BsLinkedin} from "react-icons/bs"
import {BsInstagram} from 'react-icons/bs'
import {FaTwitter} from 'react-icons/fa'

function Footer() {
  return (
   <footer>
    <a href="#home" className='footer_logo'>Nurudeen</a>
    <ul className='permalink'>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
     
    </ul>
    <div className='footer_socials'>
    <a href="https://www.linkedin.com/in/nurudeen-saliu-4ab897ab/"><BsLinkedin /></a>
      <a href="https://www.instagram.com/nurez154/"><BsInstagram/></a>
      <a href="https://twitter.com/nurez154"><FaTwitter/></a>
    </div>

    <div className='footer_copywrite'>
      <small>&copy; Nurez Portfolio website</small>
    </div>
   </footer>
  )
}

export default Footer