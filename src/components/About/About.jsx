import React from "react";
import "./About.css";
import ME from "../../assets/nurez.jpeg";
import { FaAward } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";

function About() {
  return (
    <section id="about">
      <h5>Get To Know About Me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards ">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>4+ Years Working Experience</small>
            </article>

            <article className="about_card">
              <FaUserTie className="about_icon" />
              <h5>Employer</h5>
              <small>2+ Employer</small>
            </article>

            <article className="about_card">
              <FaRegFolderOpen className="about_icon" />
              <h5>Projects</h5>
              <small>20+ Completed Projects</small>
            </article>
          </div>
          <p>
            I am a Full Stack Developer with over a year of
            experience, specializing in NodeJS.
            I have experience in developing and deploying websites utilizing
            various open-source packages.I have extensive experience in HTML,
            CSS, JavaScript, Typescript, NodeJS, ExpressJS, ReactJS, MongoDB,
            Docker and Dockerhub, TDD with jest and Git and Github.<br /> <br /> 
            I am skilled in using these frameworks to develop web
            applications based on Single Page Applications (SPA) architectures.
            I also possess skills in writing SQL queries using popular
            database servers such as MySQL. In addition to my development work,
            I am skilled in troubleshooting problems and resolving bugs within
            an existing system.<br /> <br /> 
            Other skills include Scrum, Agile Methodology, Jira, Communication,
            Team Coordination. If it will solve a problem, I want to be
            part of it. Just send a{" "}
            <span className="anchor_message">
              <a href="#contact">Click To Message</a>
            </span>
            . Solving problems with tech excites me. I am open to working with
            you.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
