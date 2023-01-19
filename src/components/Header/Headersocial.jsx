import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble} from "react-icons/fi"

const Headersocial = () => {
  return (
    <div className='header_social'>
    <a href="https://www.linkedin.com/in/nurudeen-saliu-4ab897ab/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
    <a href="https://github.com/nurez305" target="_blank" rel="noreferrer" ><FaGithub /></a>
    <a href="#dribble" target="_blank"><FiDribbble /></a>

    </div>
  )
}

export default Headersocial