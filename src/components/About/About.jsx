import React from "react";
import "./About.css";
import ME from "../../assets/nurez.jpeg";
import { FaAward } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about">
      <h5>Get To Know About Me</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <motion.div
          className="about_me"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          <div className="about_me-image">
            <img src={ME} alt="" />
          </div>
        </motion.div>

        <motion.div
          className="about_content"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
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
            I am a full-stack developer with over 4 years of experience,
            specializing in Javascript, Typescript, and Flutter. I have
            experience in developing and deploying websites utilizing various
            open-source packages. I have extensive experience in HTML, CSS,
            JavaScript, Typescript, NodeJS, ExpressJS, ReactJS, MongoDB, Docker
            and Dockerhub, TDD with Jest, and Git and Github. <br /> <br /> 
            I am skilled in
            using these frameworks to develop web applications based on Single
            Page Applications (SPA) architectures. I also possess skills in
            writing SQL queries using popular database servers such as MySQL. In
            addition to my development work, I am skilled at troubleshooting
            problems and resolving bugs within an existing system. <br /> <br /> 
            Other skills
            include scrum, agile methodology, Jira, communication, and team
            coordination. If it will solve a problem, I want to be part of it.
            Just send a{" "}
            <span className="anchor_message">
              <a href="#contact">click-to-message</a>
            </span>
            . Solving problems with tech excites me. I am open to working with
            you.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
