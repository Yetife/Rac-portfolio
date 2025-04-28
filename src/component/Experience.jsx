function Experience() {
    const experiences = [
        {
            id: 1,
            title: "Senior Frontend Developer",
            company: "Tech Innovations Inc.",
            duration: "Jan 2023 - Present",
            description: [
                "Lead the frontend development of a SaaS platform with 50,000+ users",
                "Implemented performance optimizations that improved page load times by 40%",
                "Mentored junior developers and established frontend best practices",
                "Collaborated with UI/UX team to create intuitive user interfaces",
            ],
            technologies: ["React", "Next.js", "TypeScript", "Redux"]
        },
        {
            id: 2,
            title: "Frontend Developer",
            company: "WebSolutions Agency",
            duration: "Mar 2021 - Dec 2022",
            description: [
                "Developed responsive websites for 15+ clients across various industries",
                "Worked in an agile environment with 2-week sprint cycles",
                "Built reusable component libraries to improve development efficiency",
                "Integrated third-party APIs and services into client applications",
            ],
            technologies: ["React", "JavaScript", "SCSS", "REST APIs"]
        },
        {
            id: 3,
            title: "Web Developer Intern",
            company: "StartUp Ventures",
            duration: "Jun 2020 - Feb 2021",
            description: [
                "Assisted in building the company's main product using modern web technologies",
                "Fixed bugs and implemented new features in the frontend codebase",
                "Participated in code reviews and improved coding skills",
                "Collaborated with backend developers to integrate REST APIs",
            ],
            technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-teal-500">Experience</h2>
                    <p className="py-6 text-gray-600 dark:text-gray-400">My professional journey</p>
                </div>

                <div className="relative border-l-2 border-teal-500 pl-8 ml-4">
                    {experiences.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`mb-10 transform transition-all duration-500 ${
                                index % 2 === 0 ? 'hover:translate-x-2' : 'hover:translate-x-2'
                            }`}
                        >
                            <div className="absolute w-4 h-4 bg-teal-500 rounded-full -left-2.5" style={{ marginTop: '8px' }}></div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                                <h4 className="text-teal-500 font-medium mb-1">{exp.company}</h4>
                                <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
                                <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx} className="mb-1">{item}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2">
                                    {exp.technologies.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;