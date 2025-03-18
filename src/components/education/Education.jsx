import { EDUCATION } from "../../assets/constants";
import { motion } from "framer-motion";

const Schools = () => {
	return (
		EDUCATION.map((school, index) => {
			return (
				<div key={index} className="mb-8 flex flex-wrap lg:justify-center">
					<motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
						className="w-full lg:w-1/4">
						<p className="text-neutral-400 text-sm mb-2">
							{school.year}
						</p>
					</motion.div>
					<motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}
						className="w-full max-w-xl lg:w-3/4 flex-wrap flex">
						<h6 className="mb-2 font-semibold">
							{school.course} - <span className="text-sm text-purple-100">{school.name}</span>
						</h6>
						<p className="mb-4 text-neutral-400 text-justify">
							{school.description}
						</p>
					</motion.div>
				</div>
			)
		})
	)
}

const Education = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<motion.h2 initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }} 
				className="text-4xl text-center my-20">
					Education
			</motion.h2>
			<div>
				<Schools />
			</div>
		</div>
	)
}

export default Education;