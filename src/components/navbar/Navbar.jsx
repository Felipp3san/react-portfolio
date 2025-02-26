import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
	return (
		<nav className="mb-20 flex items-center justify-between py-6">
			<div className="flex flex-shrink-0 items-center">
				<p className="text-3xl">Fs</p>
			</div>
			<div className="flex m-8 items-center justify-center gap-4 text-2xl">
				<motion.a href="https://www.linkedin.com/in/felippe-santana-58638b66/" className="cursor-pointer" target="_blank"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.8 }}>
					<FaLinkedin />
				</motion.a>
				<motion.a href="https://github.com/Felipp3san" className="cursor-pointer" target="_blank"
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.8 }}>
					<FaGithub />
				</motion.a>
			</div>
		</nav>
	)
}

export default Navbar;