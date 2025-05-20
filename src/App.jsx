import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './pages/Footer'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

function App() {
  return (
    <div>
     
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
