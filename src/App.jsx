import './App.css'
import About from './components/About/About'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Gallery from './components/Gallery/Gallery'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Project from './components/Projects/Project'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Project />
      <Features />
      <Gallery />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App