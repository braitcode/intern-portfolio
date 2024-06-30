import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Testimonials from './pages/Testimonials'

function App() {
  

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
