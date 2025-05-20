import React from "react";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import BlurText from "../animations/BlurText";

function Home() {
  const blurTextHTML = `I'm a Full Stack Developer skilled in the **MERN stack**, with a passion for building clean, responsive, and user-focused web applications. Recently completed a project-based training program, and now seeking opportunities to contribute to dynamic teams and grow as a developer.`;

  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="flex-1">
          <div className="text-4xl font-bold border-b-4 border-red-500 inline-block pb-1">
            Welcome to my
          </div>{" "}
          
          <br />
          <div className="bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 inline-block text-transparent bg-clip-text text-3xl font-bold mt-2">
            PORTFOLIO!
          </div>

          <BlurText
            text={blurTextHTML}
            delay={150}
            animateBy="words"
            direction="top"
            className="text-2xl mb-8 mt-5"
            dangerouslySetInnerHTML={{ __html: blurTextHTML }}
          />


          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <a
              href="/Resume.pdf"
              download
              className="bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center gap-2"
            >
              <Download size={18} /> Resume
            </a>
            <a
              href="#footer" // Make sure your footer has this ID
              className="bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center gap-2"
            >
              Hire Me <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right: Avatar with animated gradient frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative w-52 h-52 md:w-64 md:h-64"
        >
          {/* Outer spinning glow */}
          <div className="absolute inset-0 rounded-full animate-spin-slow bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 opacity-30 blur-xl"></div>

          {/* Gradient Border Wrapper */}
          <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 shadow-xl z-10">
            {/* Actual avatar image inside with background */}
            <div className="w-full h-full rounded-full overflow-hidden bg-gray-900">
              <img
                src="/Avatar.png"
                alt="Yash Kapure"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
