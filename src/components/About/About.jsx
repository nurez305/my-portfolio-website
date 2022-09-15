import React from 'react'
import "./About.css"
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa"
import {FaUserTie} from "react-icons/fa"
import {FaRegFolderOpen} from "react-icons/fa"

function About() {
  return (
    <section id='about'>
      <h5>Get To Know About Me</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt="" />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards '>
            <article className='about_card'>
              <FaAward className='about_icon' />
              <h5>Experience</h5>
              <small>3+ Years Working Experience</small>

            </article>

            <article className='about_card'>
              <FaUserTie className='about_icon' />
              <h5>Clients</h5>
              <small>200+ worldwide</small>

            </article>

            <article className='about_card'>
              <FaRegFolderOpen className='about_icon' />
              <h5>Projects</h5>
              <small>80+ Completed Projects</small>

            </article>

          </div>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus 
            similique earum labore a amet nostrum dolorem laudantium facere, vel consequuntur.
             Dicta laborum, voluptate odio rem consequatur labore exercitationem facere delectus!</p>

             <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>

      </div>
      
    </section>
  )
}

export default About