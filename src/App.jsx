import React, { useEffect, useState } from 'react'
// import Header from './components/Header/Header'
import About from "./components/About/About"
import Experience from "./components/Experience/Experience"
import Portfolio from "./components/Portfolio/Portfolio"
import Footer from "./components/Footer/Footer"
import Contact from './components/Contact/Contact'
import Hero from './components/hero/Hero'
import TopNav from './components/TopNav/TopNav'


const App = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme")

    if (savedTheme) {
      setIsDark(savedTheme === "dark")
      return
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDark(prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
    document.documentElement.dataset.theme = isDark ? "dark" : "light"
    window.localStorage.setItem("theme", isDark ? "dark" : "light")
  }, [isDark])

  return (
    <div className="relative min-h-screen overflow-x-hidden transition-colors duration-500">
      <TopNav isDark={isDark} onToggleTheme={() => setIsDark((prev) => !prev)} />
      <Hero isDark={isDark} />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
