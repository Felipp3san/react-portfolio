import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Experience from "./components/experience/Experience"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Project from "./components/projects/Projects"
import Technologies from "./components/technologies/Technologies"

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-500 selection:text-cyan-900">
		<div className="fixed -z-10 h-full w-full top-0">
			<div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
		</div>

		<div className="container mx-auto px-8">
			<Navbar />
			<Hero />
			<About />
			<Technologies />
			<Experience />
			<Project />
			<Contact />
		</div>
    </div>
  )
}

export default App