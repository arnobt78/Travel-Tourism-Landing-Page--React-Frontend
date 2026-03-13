import { Fragment } from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import Tours from './components/Tours'

/** Root app: layout order is Navbar → Hero → About → Services → Tours → Footer */
function App() {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </Fragment>
  )
}

export default App
