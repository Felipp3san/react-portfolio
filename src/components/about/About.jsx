import { ABOUT_TEXT } from "../../assets/constants";
import profileImg from "../../assets/images/profile_img2.jpeg";
import { motion } from "framer-motion";

const About = () => {
	return (
		<div className="border-b border-neutral-900 pb-4">
			<h1 className="my-20 text-center text-4xl">
				About <span className="text-neutral-500">Me</span>
			</h1>
			<div className="flex flex-wrap">
				<motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} 
					className="w-full lg:w-1/2 lg:p-8">
					<div className="flex items-center justify-center">
						<img className="rounded-2xl opacity-75" src={profileImg} alt="Felippe Santana" width={500} height={500} />
					</div>
				</motion.div>
				<motion.div initial={{ x: 100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} 
					className="w-full lg:w-1/2">
					<div className="flex justify-center lg:justify-start">
						<p className="my-2 max-w-xl py-6 text-justify">
							{ABOUT_TEXT}
						</p>
					</div>
				</motion.div>
			</div>
		</div>
	)
}

export default About;