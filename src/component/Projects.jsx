import {ExternalLink} from 'lucide-react';
import dashboardImg from '../assets/adminDashboard.png'

function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-commerce Website",
            description: "A fully responsive e-commerce platform built with React, Redux, and Firebase. Features include user authentication, product filtering, shopping cart, and payment integration.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Redux", "Firebase", "Stripe", "Tailwind CSS"],
            github: "https://github.com/username/ecommerce-project",
            demo: "https://ecommerce-project.example.com"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "A Kanban-style task management application with drag-and-drop functionality, user authentication, and real-time updates using WebSockets.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io"],
            github: "https://github.com/username/task-manager",
            demo: "https://task-manager.example.com"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "A weather application that provides current weather data and forecasts for any location. Uses the OpenWeatherMap API and features clean data visualization.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "Chart.js", "API Integration", "Geolocation"],
            github: "https://github.com/username/weather-app",
            demo: "https://weather-app.example.com"
        },
        {
            id: 4,
            title: "Personal Blog",
            description: "A blog platform built with Next.js and MDX for writing and publishing technical articles. Features dark mode, code syntax highlighting, and comment functionality.",
            image: "/api/placeholder/600/400",
            technologies: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
            github: "https://github.com/username/dev-blog",
            demo: "https://dev-blog.example.com"
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
            title: "Recipe Finder App",
            description: "A web application that allows users to search for recipes based on ingredients they have. Features include recipe saving, meal planning, and nutritional information.",
            image: "/api/placeholder/600/400",
            technologies: ["React", "CSS Modules", "Food API Integration"],
            github: "https://github.com/username/recipe-finder",
            demo: "https://recipe-finder.example.com"
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