function Experience() {
    const experiences = [
        {
            id: 1,
            title: "Mid level Frontend Engineer",
            company: "Kuve Technologies Limited",
            duration: "May 2025 - Till date",
            description: [
                "Developed sleek, high-performance UIs with Next.js, TypeScript, React.js,  and Tailwind CSS, optimising user flows across product listings, checkout, and onboarding",
            ],
            technologies: ["React", "Next js", "Javascript", "Zustand"]
        },
        {
            id: 2,
            title: "Mid level Frontend Engineer",
            company: "Creditwave Finance Limited",
            duration: "Nov 2023 - Dec 2024",
            description: [
                "Engineered a mobile-responsive loan application using React.js and Tailwind CSS, streamlining financial services such as loans, savings, and peer-to-peer lending, improving user engagement.",
                "Designed advanced data visualization features, empowering administrators with actionable insights on loan\n" +
                "applications, savings, and transactions through dynamic charts and dashboards.",
                "Optimized frontend-backend integration by implementing secure APIs, increasing data retrieval speed by 25%, and\n" +
                "ensuring high accuracy for real-time customer data updates.",
                "Enhanced platform scalability and responsiveness, leading to a 30% improvement in data management efficiency,and accelerating customer application and transaction processes.",
            ],
            technologies: ["React", "React Native", "Javascript", "Redux"]
        },
        {
            id: 3,
            title: "Junior Frontend Engineer",
            company: "Semicolon Africa",
            duration: "May 2022 - Dec 2023",
            description: [
                "Built and maintained web applications using Vue.js, React.js, and TypeScript, delivering optimized performance, and\n" +
                "enhancing user engagement.",
                "Implemented performance optimizations that improved page load times by 40%",
                "Mentored junior developers and established frontend best practices",
                "Developed modular front-end microservices using React, Material UI, and Tailwind CSS, improving scalability and\n" +
                "reducing debugging time.",
            ],
            technologies: ["Vue", "Nuxt js", "React", "Next.js", "TypeScript",  "Javascript", "Redux"]
        },
        {
            id: 4,
            title: "Frontend Developer Intern",
            company: "Semicolon Africa",
            duration: "Jan 2022 - Apr 2022",
            description: [
                "Developed and optimized front-end interfaces using React.js, Redux, and Material UI, enhancing application\n" +
                "usability and visual design consistency.",
                "Built an interactive, event-based calendar feature, increasing user engagement with product advertisements.",
                "Worked in an agile environment with 2-week sprint cycles",
                "Built reusable component libraries to improve development efficiency",
                "Conducted code reviews and contributed to debugging, reducing production errors by 25%, and ensuring\n" +
                "high-quality deliverables.",
            ],
            technologies: ["React", "JavaScript", "SCSS", "REST APIs", "Tailwind CSS"]
        },
        // {
        //     id: 4,
        //     title: "Software Engineer Intern",
        //     company: "Semicolon Africa",
        //     duration: "Jun 2021 - Dec 2021",
        //     description: [
        //         "Built a learning management system that boosted trainees' learning efficiency by 60%, contributing to front-end and\n" +
        //         "back-end development using React.js and Spring Boot",
        //         "Developed and maintained high-performance, user-friendly websites using Git, Tailwind CSS, and agile best\n" +
        //         "practices, enhancing user satisfaction by 25%.",
        //         "Fixed bugs and implemented new features in the frontend codebase",
        //         "Participated in code reviews and improved coding skills",
        //         "Collaborated with backend developers to integrate REST APIs",
        //     ],
        //     technologies: ["HTML", "CSS", "JavaScript", "jQuery"]
        // }
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