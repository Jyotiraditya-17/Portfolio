import React from 'react'
import gsap from 'gsap'
import PixelTransition from '../animations/PixelTransition'
import { AnimatedTestimonials } from '../animations/animated-testimonials'
import { FaGithub } from 'react-icons/fa'
import { ExternalLink } from 'lucide-react'

const projectItems = [
	{
		image: '/Chat-Logo.png',
		title: 'ChatBuzz',
		description:
			'Built a real-time chat app using MERN stack, Socket.IO, and Zustand for state management. Enabled live messaging, typing indicators, and user presence with WebSockets. Designed a responsive UI using Tailwind CSS for a modern user experience.',
		Technologies: [
			'React.js',
			'MongoDb',
			'Express.js',
			'Node.js',
			'Zustand',
			'Tailwind CSS',
			'Socket.IO',
		],
		link: 'https://github.com/Jyotiraditya-17/Chat-App',
	},
	{
		image: '/Job-Logo.png',
		title: 'JobSync Ai',
		description:
			'Built a Job Portal web application, enabling employers to post job listings and manage applications, while allowing users to search for jobs based on skills, apply directly, and track their application status. Integrated secure authentication for both employers and job seekers, dynamic job search and filtering, and real-time application updates.',
		Technologies: [
			'React.js',
			'MongoDb',
			'Express.js',
			'Node.js',
			'Tailwind CSS',
			'Redux',
			'Cloudinary',
		],
		link: 'https://github.com/prasad-bigdp/job-sync',
	},
	{
		image: '/Movie-Logo.png',
		title: 'Movie-Hub',
		description:
			'Developed a dynamic Movie website that allows users to browse movies, authenticate their accounts, manage their favorite movies, and engage with other users through comments and reviews.',
		Technologies: ['React.js', 'Firebase', 'MaterialUI', 'Tailwind CSS'],
		link: 'https://github.com/Jyotiraditya-17/Movie-Hub',
	},
]

function Projects() {
	return (
		<div className="bg-gray-900 text-white py-10 px-2 sm:px-4 md:px-8 lg:px-16" id="projects">
			<div className="font-bold text-center text-3xl sm:text-4xl md:text-5xl mb-8">
				My{' '}
				<span className="bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 inline-block text-transparent bg-clip-text">
					Projects
				</span>
			</div>

			<p className="text-gray-400 text-center text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto">
				A selection of projects showcasing my skills in full-stack development, design, and performance
			</p>

			{/* Responsive PixelTransition usage */}
			{/* <div className="flex flex-col md:flex-row flex-wrap justify-center items-stretch gap-8">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex mx-auto">
          <PixelTransition
            firstContent={
              <div className="flex items-center justify-center w-full h-full aspect-square">
                <img
                  src='/Chat-Logo.png'
                  alt='Chat Logo'
                  className='w-full h-fit max-w-[90%] max-h-[90%] object-contain'
                />
              </div>
            }
            secondContent={
              <div className="flex items-center justify-center h-full text-xs sm:text-sm md:text-base font-semibold bg-gradient-to-r from-blue-800 to-yellow-300 text-gray-800 text-justify p-2 sm:p-4">
                Built a real-time chat app using MERN stack, Socket.IO, and Zustand for state management.
                Enabled live messaging, typing indicators, and user presence with WebSockets.
                Designed a responsive UI using Tailwind CSS for a modern user experience.
              </div>
            }
            gridSize={10}
            pixelColor="#000000"
            animationStepDuration={0.5}
            aspectRatio="100%"
          />
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex mx-auto">
          <PixelTransition
            firstContent={
              <div className="flex items-center justify-center w-full h-full aspect-square">
                <img
                  src='/Job-Logo.png'
                  alt='Job Logo'
                  className='w-full h-full max-w-[90%] max-h-[90%] object-contain'
                />
              </div>
            }
            secondContent={
              <div className="flex items-center justify-center h-full text-xs sm:text-sm md:text-base font-semibold bg-gradient-to-r from-blue-600 to-orange-300 text-gray-800 text-justify p-2 sm:p-4">
                Built a Job Portal web application, enabling employers to post job listings and manage applications, while allowing users to search for jobs based on skills, apply directly, and track their application status. Integrated secure authentication for both employers and job seekers, dynamic job search and filtering, and real-time application updates.
              </div>
            }
            gridSize={10}
            pixelColor="#000000"
            animationStepDuration={0.5}
            aspectRatio="100%"
          />
        </div>

        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg flex mx-auto">
          <PixelTransition
            firstContent={
              <div className="flex items-center justify-center w-full h-full aspect-square">
                <img
                  src='/Movie-Logo.png'
                  alt='Movie Logo'
                  className='w-full h-full max-w-[90%] max-h-[90%] object-contain'
                />
              </div>
            }
            secondContent={
              <div className="flex items-center justify-center h-full text-xs sm:text-sm md:text-base font-semibold bg-gradient-to-r from-gray-900 to-orange-300 text-gray-800 text-justify p-2 sm:p-4">
                Developed a dynamic Movie website that allows users to browse movies, authenticate their accounts, manage their favorite movies, and engage with other users through comments and reviews.
              </div>
            }
            gridSize={10}
            pixelColor="#000000"
            animationStepDuration={0.5}
            aspectRatio="100%"
          />
        </div>

      </div> */}

			<div className="max-w-3xl mx-auto">
				<AnimatedTestimonials testimonials={projectItems} />
			</div>

      <div className="flex justify-center mt-8">
        <button className="bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 text-white font-semibold py-2 px-4 rounded hover:bg-gradient-to-l transition duration-300">
           <a href='https://github.com/Jyotiraditya-17?tab=repositories' target='_blank' rel='noopener noreferrer'>
            View All Projects
            <ExternalLink className="ml-2 inline-block pb-1" />
           </a>
        </button>
      </div>

		</div>
	)
}

export default Projects
