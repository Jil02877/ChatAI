import React, { useEffect, useState } from 'react'
import { Header } from './components'
import { Footer } from './components'
import { ChatBox } from './components'
import { ThemeProvider } from './context/Theme'

function App() {
  const [themeMode, setThemeMode] = useState('light')
  const lightTheme = () => {
    setThemeMode("light")
  }

  const darkTheme = () => {
    setThemeMode("dark")
  }

  useEffect(() => {
   document.querySelector("html").classList.remove("light","dark")
   document.querySelector('html').classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-col min-h-screen font-sans">
        {/* Header */}
        <header className="bg-indigo-500 dark:bg-indigo-700 text-white shadow-lg">
          <Header />
        </header>
   
        {/* Main content */}
        <main className="flex-grow px-4 py-8 md:px-10 bg-gray-50 dark:bg-gray-800">
          <ChatBox />
        </main>

        {/* Footer */}
        <footer className="bg-indigo-600 dark:bg-indigo-800 text-white mt-auto p-4 text-center">
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  )
}

export default App
