import { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import LoginModal from './components/LoginModal'
import Pricing from './components/Pricing'

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <>
      <Header onLogin={() => setIsLoginOpen(true)} />
      <main>
        <Hero />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  )
}

export default App
