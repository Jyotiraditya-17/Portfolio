import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
} from 'react-icons/fa';
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiMysql,
  SiPostman,
} from 'react-icons/si';
import ScrollVelocity from '../animations/ScrollVelocity';
import SpotlightCard from '../animations/SpotlightCard';

function Skills() {
  return (
    <div className="bg-gray-900 text-white py-10" id="skills">
      <div className="font-bold text-center text-4xl mb-8">
        My{' '}
        <span className="bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 inline-block text-transparent bg-clip-text">
          Skills
        </span>
      </div>
      <p className='text-gray-400 text-center text-lg mb-8'>
        Here’s the tech stack I use to turn ideas into powerful web applications.
      </p>

      <ScrollVelocity
        texts={[
          <div className="flex gap-10 items-center" key="skills-line">
            <div className="w-6" /> {/* Left spacer */}
            <FaReact size={50} className="text-cyan-400" />
            <FaNodeJs size={50} className="text-green-500" />
            <SiMongodb size={50} className="text-green-600" />
            <SiExpress size={50} className="text-gray-300" />
            <FaHtml5 size={50} className="text-orange-600" />
            <FaCss3Alt size={50} className="text-blue-500" />
            <FaJsSquare size={50} className="text-yellow-400" />
            <SiTailwindcss size={50} className="text-sky-400" />
            <SiRedux size={50} className="text-purple-500" />
            <SiTypescript size={50} className="text-blue-400" />
            <SiFirebase size={50} className="text-yellow-500" />
            <FaGithub size={50} className="text-white" />
            <SiNextdotjs size={50} className="text-white" />
            <FaBootstrap size={50} className="text-purple-600" />
            <SiMysql size={50} className="text-blue-700" />
            <SiPostman size={50} className="text-orange-500" />
            <div className="w-3" /> {/* Right spacer */}
          </div>,
        ]}
        velocity={100}
        numCopies={6}
        className=""
        parallaxClassName="h-28"
        scrollerClassName="items-center"
      />


      <div className="grid md:grid-cols-3 gap-6 m-5">
            <SpotlightCard className="p-6">
                <h3 className="text-xl font-semibold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-6 text-3xl">
                {[
                    { icon: <FaHtml5 className="text-orange-600" />, label: "HTML" },
                    { icon: <FaCss3Alt className="text-blue-500" />, label: "CSS" },
                    { icon: <FaJsSquare className="text-yellow-400" />, label: "JavaScript" },
                    { icon: <FaReact className="text-cyan-400" />, label: "React" },
                    { icon: <SiTailwindcss className="text-sky-400" />, label: "Tailwind" },
                    { icon: <SiTypescript className="text-blue-400" />, label: "TypeScript" },
                    { icon: <FaBootstrap className="text-purple-600" />, label: "Bootstrap" },
                    { icon: <SiNextdotjs className="text-white" />, label: "Next.js" },
                ].map(({ icon, label }, i) => (
                    <div key={i} className="flex flex-col items-center text-sm">
                    {icon}
                    <span className="mt-1">{label}</span>
                    </div>
                ))}
                </div>
            </SpotlightCard>

            <SpotlightCard className="p-6">
                <h3 className="text-xl font-semibold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-6 text-3xl">
                {[
                    { icon: <FaNodeJs className="text-green-500" />, label: "Node.js" },
                    { icon: <SiExpress className="text-gray-300" />, label: "Express" },
                    { icon: <SiMongodb className="text-green-600" />, label: "MongoDB" },
                    { icon: <SiFirebase className="text-yellow-500" />, label: "Firebase" },
                    { icon: <SiMysql className="text-blue-700" />, label: "MySQL" },
                ].map(({ icon, label }, i) => (
                    <div key={i} className="flex flex-col items-center text-sm">
                    {icon}
                    <span className="mt-1">{label}</span>
                    </div>
                ))}
                </div>
            </SpotlightCard>

            <SpotlightCard className="p-6">
                <h3 className="text-xl font-semibold mb-4">Tools & DevOps</h3>
                <div className="flex flex-wrap gap-6 text-3xl">
                {[
                    { icon: <SiRedux className="text-purple-500" />, label: "Redux" },
                    { icon: <FaGitAlt className="text-red-500" />, label: "Git" },
                    { icon: <FaGithub className="text-white" />, label: "GitHub" },
                    { icon: <SiPostman className="text-orange-500" />, label: "Postman" },
                ].map(({ icon, label }, i) => (
                    <div key={i} className="flex flex-col items-center text-sm">
                    {icon}
                    <span className="mt-1">{label}</span>
                    </div>
                ))}
                </div>
            </SpotlightCard>
        </div>

      
    </div>
  );
}

export default Skills;
