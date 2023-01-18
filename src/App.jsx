import React from 'react'
// import Header from './components/Header/Header'
import Nav from "./components/Nav/Nav"
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Portfolio from "./components/Portfolio/Portfolio"
import Footer from "./components/Footer/Footer"
import Contact from './components/Contact/Contact'
import Hero from './components/hero/Hero'


const App = () => {
  return (
    <>
    {/* <Header /> */}
    <Hero />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  )
}

export default App