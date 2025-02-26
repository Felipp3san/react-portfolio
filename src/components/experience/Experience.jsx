import { EXPERIENCES } from "../../assets/constants";
import { motion } from "framer-motion";

const Technologies = ({ technologies }) => {
	return (
		technologies.map((tech, index) => {
			return (
				<span key={index} className="mr-2 mt-4 rounded bg-neutral-900 text-purple-700 px-2 py-1 text-sm font-medium">
					{tech}
				</span>
			)
		})
	)
}

const Experiences = () => {
	return (
		EXPERIENCES.map((experience, index) => {
			return (
				<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
					<motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
						className="w-full lg:w-1/4">
						<p className="text-neutral-400 text-sm mb-2">
							{experience.year}
						</p>
					</motion.div>
					<motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
						className="w-full max-w-xl lg:w-3/4 flex-wrap flex">
						<h6 className="mb-2 font-semibold">{experience.role} - <span className="text-sm text-purple-100">{experience.company}</span></h6>
						<p className="mb-4 text-neutral-400 text-justify">{experience.description}</p>
						<Technologies technologies={experience.technologies} />
					</motion.div>
				</div>
			)
		})
	)
}

const Experience = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<motion.h2 initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} 
				className="text-4xl text-center my-20">
					Experience
			</motion.h2>
			<div>
				<Experiences />
			</div>
		</div>
	)
}

export default Experience;