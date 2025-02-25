import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
	return (
		<nav className="mb-20 flex items-center justify-between py-6">
			<div className="flex flex-shrink-0 items-center">
				<p className="text-3xl">Fs</p>
			</div>
			<div className="flex m-8 items-center justify-center gap-4 text-2xl">
				<FaLinkedin />
				<FaGithub />
			</div>
		</nav>
	)
}

export default Navbar;