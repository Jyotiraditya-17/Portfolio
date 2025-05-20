import React, { useState } from 'react'
import ProfileModal from './ProfileModal';

function Navbar() {

    const [isModalOpen , setIsModalOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleProfileClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className='flex justify-between items-center h-12 p-2 md:px-6 bg-gray-300 shadow-md fixed top-0 left-0 right-0 z-50'>
            {/* Name */}
            <div className='bg-gradient-to-r from-gray-700 via-rose-500 to-orange-400 inline-block text-transparent bg-clip-text font-bold text-xl'>
                Jyotiraditya Hota
            </div>

            {/* Hamburger for mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="p-2 rounded focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                    </svg>
                </button>
            </div>

            {/* Navigations */}
            <div className={`flex-col md:flex md:flex-row md:space-x-4 absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none z-40 transition-all duration-200 ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
                <a 
                    href="#home"
                    className='rounded-2xl p-2 font-bold text-gray-800
                        hover:bg-gradient-to-r hover:from-gray-700 hover:via-rose-500 hover:to-orange-400
                        hover:text-transparent hover:bg-clip-text'
                > 
                    Home 
                </a>
                <a 
                    href="#skills"
                    className='rounded-2xl p-2 font-bold text-gray-800
                        hover:bg-gradient-to-r hover:from-gray-700 hover:via-rose-500 hover:to-orange-400
                        hover:text-transparent hover:bg-clip-text'
                > 
                   Skills 
                </a>
                <a 
                    href="#projects"
                    className='rounded-2xl p-2 font-bold text-gray-800
                        hover:bg-gradient-to-r hover:from-gray-700 hover:via-rose-500 hover:to-orange-400
                        hover:text-transparent hover:bg-clip-text'
                > 
                    Projects 
                </a>
                <a 
                    href="#contact"
                    className='rounded-2xl p-2 font-bold text-gray-800
                        hover:bg-gradient-to-r hover:from-gray-700 hover:via-rose-500 hover:to-orange-400
                        hover:text-transparent hover:bg-clip-text'
                > 
                    Contact 
                </a>
            </div>

            {/* Profile */}
            <div className='relative'>
                <div onClick={handleProfileClick} className='cursor-pointer'>
                    <img src='/JH.png' alt='profile' className='h-8 w-8 rounded-full' />
                </div>
                {/* Profile Modal */}
                <ProfileModal isOpen={isModalOpen} onClose={closeModal} />
            </div>
        </div>
    )
}

export default Navbar
