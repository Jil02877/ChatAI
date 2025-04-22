import React from 'react'

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 p-4 shadow-md flex justify-between items-center">
      {/* Logo or App Name */}
      <div className="text-white text-2xl font-bold tracking-wide">
        <span className="text-yellow-300">🤖</span> AIChat
      </div>

      {/* Right side (you can add profile icon, settings, etc. here later) */}
      <nav className="text-white">
        <a href="#" className="hover:text-yellow-300 transition-colors duration-300">Home</a>
      </nav>
    </header>
  )
}

export default Header
