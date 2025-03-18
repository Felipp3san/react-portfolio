import phpshopProject from '../images/projects/php-shop.png';
import wpfmoviesProject from '../images/projects/wpfmoviesProject.png'
import portfolioProject from '../images/projects/portfolioProject.png'
import djangoProject from '../images/projects/djangoProject.png'
import quoteProject from '../images/projects/quoteProject.png'
import markdownProject from '../images/projects/markdownProject.png'
import drumMachineProject from '../images/projects/drumMachineProject.png'

export const HERO_CONTENT = `I am a full stack developer, with hands-on experience in technologies PHP (Laravel, Livewire), JavaScript (Node.js, Alpine.js) and MySQL. I'm constantly learning new technologies to stay updated with the market requirements and to refine my skills. My goal is to become a versatile professional with a strong and diverse technical foundation.`;

export const ABOUT_TEXT = `I am originally from Brasília, Brazil. In 2022, I moved to Portugal in pursuit of new opportunities. Until mid-2023, I worked in areas unrelated to my field, gaining valuable experience in different professional contexts. However, i have always enjoyed programming, which led me to resume my training as a developer.
After completing my first training in Portugal, i had the opportunity to work as a web developer, there i worked with variety of technologies such as PHP, Laravel, Livewire, Javascript and SQL databases like MySQL. Additionally, during my time there, I improved my ability to create responsive and visually appealing UIs. Since i enjoy staying active, i continuously learn new technologies and driven by this, in 2025, i decided to join 42 Porto to improve my both my technical skills and my ability to work in team, as it follows a peer-to-peer education method. I hope to become a better programmer with each passing day.`;

export const EDUCATION = [
	{
		year: "04/2025 - Present",
		course: "Software Developer",
		school: "42 Porto",
		location: "Porto, Portugal",
		description: `Development of ERP systems using PHP with Laravel framework, Javascript and other related web development technologies. My responsibilities include both backend and frontend development, with a focus on the company’s portal, which currently handles BPM, CRM, and other business processes. I develop and maintain key features such as task management systems, project timelines, and product management sections that cover inventory, pricing, and categories. My role involves creating database structures, implementing Livewire components, integrating frontend functionalities, and ensuring a user-friendly interface. As a full-stack developer, I focus on optimizing the portal's usability and performance to streamline workflow management and support corporate operations.`,
	},
	{
		year: "07/2023 - 07/2024",
		course: "Software Developer",
		school: "Mazagão Professional Training Center",
		location: "Braga, Portugal",
		description: `Development of ERP systems using PHP with Laravel framework, Javascript and other related web development technologies. My responsibilities include both backend and frontend development, with a focus on the company’s portal, which currently handles BPM, CRM, and other business processes. I develop and maintain key features such as task management systems, project timelines, and product management sections that cover inventory, pricing, and categories. My role involves creating database structures, implementing Livewire components, integrating frontend functionalities, and ensuring a user-friendly interface. As a full-stack developer, I focus on optimizing the portal's usability and performance to streamline workflow management and support corporate operations.`,
	},
]

export const EXPERIENCES = [
	{
		year: "05/2024 - 12/2024",
		role: "Full Stack Developer",
		company: "ARPMind",
		description: `Development of ERP systems using PHP with Laravel framework, Javascript and other related web development technologies. My responsibilities include both backend and frontend development, with a focus on the company’s portal, which currently handles BPM, CRM, and other business processes. I develop and maintain key features such as task management systems, project timelines, and product management sections that cover inventory, pricing, and categories. My role involves creating database structures, implementing Livewire components, integrating frontend functionalities, and ensuring a user-friendly interface. As a full-stack developer, I focus on optimizing the portal's usability and performance to streamline workflow management and support corporate operations.`,
		technologies: ["PHP", "Javascript", "Laravel", "Livewire", "MySQL"],
	},
]

export const PROJECTS = [
	{
		title: "Drum Machine",
		image: drumMachineProject,
		repository: "https://github.com/Felipp3san/drum-machine",
		demo: "https://drum-machine.felippesantana.me",
		description:
			"A fully interactive drum machine built with React that simulates a real drum machine experience. It features two sound banks, realistic CSS styling, and responsive buttons that light up on click, just like a real drum machine. It also includes volume and power buttons, along with a visor that reacts to every button press.",
		technologies: ["Javascript", "React", "Node", "Vite",  "CSS Modules", "React Icons"],
	},
	{
		title: "Markdown Previewer",
		image: markdownProject,
		repository: "https://github.com/Felipp3san/markdown-previewer",
		demo: "https://markdown-previewer.felippesantana.me",
		description:
			"A simple and interactive Markdown Previewer built with React that allows users to input Markdown code in an editor and see the rendered output in real-time in a preview section. The project also features expandable editor and preview areas for a more flexible user experience.",
		technologies: ["Javascript", "React", "Node", "Vite",  "CSS Modules", "React Icons"],
	},
	{
		title: "Quote Generator",
		image: quoteProject,
		repository: "https://github.com/Felipp3san/quote-generator",
		demo: "https://quote-generator.felippesantana.me",
		description:
			"A simple and interactive Quote Generator built with React that fetches quotes from an API and updates the UI dynamically. The project also allows users to share quotes on Twitter with a single click.",
		technologies: ["Javascript", "React", "Node", "Vite", "Axios", "CSS Modules", "React Icons"],
	},
	{
		title: "This Portfolio",
		image: portfolioProject,
		repository: "https://github.com/Felipp3san/react-portfolio",
		demo: "",
		description:
			"This portfolio showcases a collection of projects that demonstrate my skills in web and software development. It was built using modern front-end tools like React and Tailwind CSS, and Frame Motion library.",
		technologies: ["Javascript", "React", "Node", "Vite", "Framer Motion", "Tailwind CSS"],
	},
	{
		title: "E-Commerce Website",
		image: phpshopProject,
		repository: "https://github.com/Felipp3san/PHPShop",
		demo: "",
		description:
			"E-commerce platform specializing in computer hardware and related components, featuring a shopping cart and an administrative panel. The system offers full integration with database and payment systems for seamless inventory management and transaction processing.",
		technologies: ["PHP", "Javascript", "HTML", "CSS", "Bootstrap", "MySQL"],
	},
	{
		title: "WPF Movie Search and Management System",
		image: wpfmoviesProject,
		repository: "https://github.com/Felipp3san/ProjetoWPFilmes",
		demo: "",
		description:
			"Desktop application in WPF that retrieves movie data, including reviews, release dates, and viewing options, from The Movie Database (TMDb) API. It was built using the MVVM pattern, which helped me understand how different patterns besides MVC works.",
		technologies: ["C#", "WPF", "MVVM"],
	},
	{
		title: "Django Task Manager",
		image: djangoProject,
		repository: "https://github.com/Felipp3san/DjangoProjectCRM",
		demo: "",
		description:
			"Web application for user and task management. It allows user registration, login, assignment of custom tasks per user, and data management. It also includes an admin panel for user management. It used to have a functionality to generate tasks automatically by fetching data from BoredAPI. However, since the API was discontinued, this functionality no longer works.",
		technologies: ["Python", "Django", "SQLite"],
	},
]

export const CONTACT = {
	address: "Braga, Portugal",
	phoneNo: "+351 914 046 960",
	email: "f-elipp-3@hotmail.com",
};