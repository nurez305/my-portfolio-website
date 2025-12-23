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
            I am a dedicated frontend developer with over 5 years of experience,
            specializing in JavaScript, TypeScript, React, and modern web
            architectures. My focus is on building responsive, high-performance
            user interfaces, but I also bring valuable full-stack perspective
            with backend experience in Node.js, Express, and database systems.
            <br />
            <br />
            My core expertise lies in crafting interactive experiences using
            React and Next.js, backed by a strong command of HTML, CSS, and
            modern JavaScript (ES6+). On the frontend, I am experienced with
            state management (Context API, Redux), testing (Jest, React Testing
            Library), and build tools. I complement this with backend
            proficiency in building RESTful APIs with Node.js and Express, and
            working with databases like MongoDB and MySQL.
            <br />
            <br />
            I thrive on solving complex problems and am skilled at diagnosing
            and fixing issues across the stack. I work effectively in
            Agile/Scrum environments using tools like Jira and am committed to
            clear communication and team collaboration.
            <br />
            <br />
            If you have a challenging frontend problem to solve, I would love to
            be part of the solution. Just send a{" "}
            <span className="anchor_message">
              <a href="#contact">click-to-message</a>
            </span>
            . Building great products excites me, and I am eager to contribute
            to your team.
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
