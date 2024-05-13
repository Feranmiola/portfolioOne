import Experience from "./components/Experience"
import Feautured from "./components/Feautured"
import Hero from "./components/Hero"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import './globals.css'

function App() {


  return (
    <div className="bg-white bodyBG">
      <Navbar/>
      <Home/>
      <Hero/>
      <Feautured/>
      <Experience/>
    </div>
  )
}

export default App
