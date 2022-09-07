import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiDribbble} from "react-icons/fi"

const Headersocial = () => {
  return (
    <div className='header_social'>
    <a href="#linkdin" target="_blank"><BsLinkedin /></a>
    <a href="#github" target="_blank"><FaGithub /></a>
    <a href="#dribble" target="_blank"><FiDribbble /></a>

    </div>
  )
}

export default Headersocial