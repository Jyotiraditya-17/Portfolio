import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './pages/Footer'
import Skills from './pages/Skills'
import Projects from './pages/Projects'

function App() {
  return (
    <div className="bg-gray-900 min-h-screen w-full box-border overflow-x-hidden">
      <Navbar />
      {/* Add top padding to prevent content hiding behind navbar */}
      <main className="pt-14 px-2 sm:px-4 md:px-8 max-w-7xl mx-auto w-full">
        <Home />
        <Skills />
        <Projects />
        <Footer />
      </main>
    </div>
  )
}

export default App
