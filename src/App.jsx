import React from 'react'
import {Header} from './components'
import {Footer} from './components'
import { ChatBox } from './components'

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="bg-indigo-500 text-white shadow-lg">
        <Header />
      </header>

      {/* Main content */}
      <main className="flex-grow px-4 py-8 md:px-10 bg-gray-50">
        <ChatBox />
      </main>

      {/* Footer */}
      <footer className="bg-indigo-600 text-white mt-auto p-4 text-center">
        <Footer />
      </footer>
    </div>
  )
}

export default App
