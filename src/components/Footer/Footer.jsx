import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-indigo-500 text-white text-center py-4 mt-10">
      <p className="text-lg">&copy; {new Date().getFullYear()} My Awesome App. All rights reserved.</p>
    </footer>
  )
}

export default Footer
