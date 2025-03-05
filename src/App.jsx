import Banner from "./components/Banner"
import Clients from "./components/Clients"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Services from "./components/Services"

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Banner/>
      <Services/>
      <Projects/>
      <Clients/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
