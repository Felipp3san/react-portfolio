import { RiReactjsLine } from "react-icons/ri"
import { FaNodeJs } from "react-icons/fa"
import { SiMysql } from "react-icons/si";
import { RiPhpFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
	initial: {
		y: -10,
	},
	animate: {
		y: [10, -10],
		transition: {
			duration: duration,
			ease: "linear",
			repeat: Infinity,
			repeatType: "reverse",
		}
	}
})

const Technologies = () => {
	return (
		<div className="border-b border-neutral-800 pb-24">
			<motion.h1 initial={{ y: -100, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 1.5 }} className="text-center text-4xl my-20">Technologies</motion.h1>
			<motion.div initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ duration: 1.5 }} className="flex flex-wrap items-center justify-center gap-4">
				<motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiReactjsLine className="text-7xl text-cyan-400" />
				</motion.div>
				<motion.div variants={iconVariants(3)} initial="initial" animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<FaNodeJs className="text-7xl text-green-500" />
				</motion.div>
				<motion.div variants={iconVariants(2)} initial="initial" animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<SiMysql className="text-7xl text-[#E49208]" />
				</motion.div>
				<motion.div variants={iconVariants(6)} initial="initial" animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiPhpFill className="text-7xl text-[#4F5B93]" />
				</motion.div>
				<motion.div variants={iconVariants(4)} initial="initial" animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<FaLaravel className="text-7xl text-[#F53003]" />
				</motion.div>
				<motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiJavascriptFill className="text-7xl text-yellow-300" />
				</motion.div>
				<motion.div variants={iconVariants(4)} initial="initial" animate="animate"
					className="rounded-2xl border-4 border-neutral-800 p-4">
					<RiTailwindCssFill className="text-7xl text-sky-400" />
				</motion.div>
			</motion.div>
		</div>
	)
}

export default Technologies;