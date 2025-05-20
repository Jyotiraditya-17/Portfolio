import React from 'react'
import {
  Atom,
  Server,
  Cloud,
  Database,
  Github,
  LayoutDashboard,
  Flame,
} from "lucide-react";

function About() {
  return (
    <section
      id="about"
      className="bg-white text-black py-20 mt-20 px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left: Avatar with gradient border */}
        <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4 border-transparent bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 p-1">
          <img
            src="/avatar.png"
            alt="Yash Kapure"
            className="object-cover w-full h-full rounded-full"
          />
        </div>

        {/* Right: Bio and Skills */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400">
            About Me
          </h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            I'm a passionate <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400">MERN Stack Developer</span> with a strong foundation in building full-stack web applications. 
            I specialize in <strong>React.js, Node.js, Express.js</strong> and <strong>MongoDB</strong>. With experience in creating responsive UIs and scalable backends, 
            I'm always eager to solve problems and build impactful digital products.
          </p>

          <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400">
            Tech Stack
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-6 gap-4 text-white text-center">
            {[["React", <Atom size={28} />], ["Node.js", <Server size={28} />], ["Express", <Cloud size={28} />], 
              ["MongoDB", <Database size={28} />], ["Tailwind", <LayoutDashboard size={28} />], 
              ["GitHub", <Github size={28} />], ["Firebase", <Flame size={28} />]
            ].map(([label, icon], i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="text-white group-hover:text-orange-400 transition-all duration-300">
                  {icon}
                </div>
                <span className="text-xs mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
