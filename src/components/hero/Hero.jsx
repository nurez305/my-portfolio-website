import "./hero.css";
import ME from '../../assets/programmer.png'
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import CV from '../../assets/Saliu nurudeen.pdf'

const Hero = () => {
  //framer motion animation variants
  const leftVariant = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 3,
      },
    },
  };
  const rightVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 2,
      },
    },
  };

  return (
    <section id="home">
      <div className="hero-main-cont">
        <motion.div
          className="hero-flex"
          initial={"hidden"}
          whileInView={"show"}
          transition={{ staggerChildren: 0.5 }}
        >
          <motion.div className="hero-sub-cont-1" variants={leftVariant}>
            <p className="hello_text">
              Hello <span className="wave">👋</span> ,
            </p>
            {/* <span className="tagline">Welcome to my Portfolio</span> */}
            <div className="text_name">
              I am <span className="alt-text-yellow">
                 <Typewriter
                  options={{
                    strings: ["Nurudeen Saliu"],
                    autoStart: true,
                    loop: true,
                    cursor: "✍️",
                    pauseFor: 5000,
                  }}
                />
              </span>
            </div>
            <h1 className="hero-main-text ">
              I am a full Stack developer specializing in <span className="react-text">ReactJS</span> and <span className="node-text">NodeJS</span>
            </h1>

            <div className="btn-div">
            <div className='cta'>
                <a href={CV} download className='btn'>Download CV</a>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
           </div>

            </div>
          </motion.div>
          <motion.div className="hero-sub-cont" variants={rightVariant}>
            <img src={ME} alt="programmer" className="hero-img" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
