import { PROJECTS } from "../../../public/assets/constants";
import { motion } from "framer-motion";

const Technologies = ({technologies}) => {
	return (
		technologies.map((tech, index) => {
			return (
				<span key={index} className="px-2 py-1 bg-neutral-900 rounded text-sm text-purple-700 font-medium">{tech}</span>
			)
		})
	)
}

const Projects = () => {
	return (
		PROJECTS.map((project, index) => {
			return (
				<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
					<motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} 
						className="w-full lg:w-1/4">
						<motion.img whileHover={{ scale: 1.4 }} transition={{ duration: 0.2, default: { type : 'spring' }}} className="rounded aspect-2/1.8 lg:w-3/4 w-full mb-8" src={project.image} alt={project.title} />
					</motion.div>
					<motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} 
						className="w-full max-w-xl lg:w-3/4">
						<h6 className="mb-2 font-semibold">{project.title}</h6>
						<p className="mb-4 text-neutral-400">{project.description}</p>
						<div className="gap-2 flex flex-wrap">
							<Technologies technologies={project.technologies}/>
						</div>
					</motion.div>
				</div>
			)
		})
	)
}

const Project = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<motion.h2 initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} 
				className="text-center text-4xl my-20">
				Projects
			</motion.h2>
			<div>
				<Projects />
			</div>
		</div>
	)
}

export default Project;