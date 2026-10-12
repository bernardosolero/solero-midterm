import Navbar from "./Navbar"
import Home from "./Home"
import About from "./About"
import Projects from "./Projects"
import Resume from "./Resume"
import Contact from "./Contact"

function Portfolio() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
  )
}

export default Portfolio