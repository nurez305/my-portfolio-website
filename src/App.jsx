import React from 'react'
import Header from './components/Header/Header'
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Service from "./components/Service/Service"
import Portfolio from "./components/Portfolio/Portfolio"
import Testimonial from "./components/Testimonial/Testimonial"
import Footer from "./components/Footer/Footer"
import Contact from './components/Contact/Contact'


const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Service />
    <Portfolio />
    <Testimonial />
    <Contact />
    <Footer />
    </>
  )
}

export default App