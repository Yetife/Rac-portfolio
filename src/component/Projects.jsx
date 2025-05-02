import {ExternalLink} from 'lucide-react';
import dashboardImg from '../assets/adminDashboard.png'
import enumImg from '../assets/enum.png'
import semicolonWebsite from '../assets/semicolon-website.png'
import akzum from '../assets/akzum.png'
import cowbell from '../assets/cowbellUI.png'
import store from '../assets/sore.png'

function Projects() {
    const projects = [
        {
            id: 1,
            title: "Enum",
            description: "A fully responsive Learning management platform built with React, Typescript, Redux, and Tailwind css. Features include user application system, assessment management system, Recruitment system, and interview management system. Collaborated with other frontend engineers.",
            image: enumImg,
            technologies: ["React", "Redux", "Typescript", "Tailwind CSS", "API Integration"],
            github: "",
            demo: "https://enum.africa"
        },
        {
            id: 2,
            title: "Cowbell Coffee website",
            description: "An event management system for cowbell coffee. Features include Admin dashboard, performing artist page, event management page, admin profiling page",
            image: cowbell,
            technologies: ["React", "Tailwind css", "Redux Toolkit", "Api Integration"],
            github: "https://github.com/Yetife/cowbell-ui",
            demo: "https://cowbellcoffeestationontour.com/"
        },
        {
            id: 3,
            title: "Semicolon website",
            description: "A platform that grants you access to opportunities in the future of work and learning. Acquire in-demand skills, get matched with employers, hire qualified talent, manage virtual training, and monetise your training program in one place.",
            image: semicolonWebsite,
            technologies: ["Vue js", "Sass", "Tailwind css", "API Integration",],
            github: "",
            demo: "https://semicolon.africa"
        },
        {
            id: 4,
            title: "Akzum Digital",
            description: "A Digital Marketing Agency platform built with Next.js and Firebase. Features dark mode, code syntax highlighting.",
            image: akzum,
            technologies: ["Next.js", "Firebase", "Tailwind CSS"],
            github: "",
            demo: "https://www.akzumdigitals.com/"
        },
        {
            id: 5,
            title: "Dashboard UI Kit",
            description: "A comprehensive collection of reusable React components for building dashboards and admin panels. Includes data tables, charts, forms, and navigation elements.",
            image: dashboardImg,
            technologies: ["React", "Axios", "Material UI", "Css", "Chart.js", "Jest", "Netlify"],
            github: "https://github.com/Yetife/admin-dashboard-frontend.git",
            demo: "https://vocal-blancmange-482f1a.netlify.app/"
        },
        {
            id: 6,
            title: "Cecayigo store",
            description: "An e-commerce electrical appliances website. Features include product page, cart, Categories page and blog page.",
            image: store,
            technologies: ["Next.js", "Firebase", "Tailwind CSS"],
            github: "",
            demo: "https://www.cecayigostore.com/"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-teal-500">Projects</h2>
                    <p className="py-6 text-gray-600 dark:text-gray-400">Check out some of my recent work</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <div
                            key={project.id}
                            className="bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800 dark:text-teal-100 rounded-full"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <div className="flex justify-between mt-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                                    >
                                        <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
                                    >
                                        <ExternalLink size={18} className="mr-1" /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;