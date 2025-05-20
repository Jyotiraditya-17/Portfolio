import React from 'react';

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg z-50 border">
      <div className="p-4">

        <button 
            className='absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg' 
            onClick={onClose}
            aria-label="Close"
        >
            &times;
        </button>

        <div className="flex flex-col space-y-2">
          <a href="/Resume.pdf" className="btn btn-sm btn-ghost" target="_blank" rel="noopener noreferrer">Resume</a>
          <a href="mailto:jyotiradityahota@gmail.com" className="btn btn-sm btn-ghost">Contact</a>
        </div>

      </div>
    </div>
  );
};

export default ProfileModal;