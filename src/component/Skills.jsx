function Skills() {
    const skills = [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 90 },
        { name: "Next.js", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "TypeScript", level: 75 },
        { name: "Redux", level: 70 },
        { name: "Git", level: 80 },
        { name: "Performance Optimization", level: 80 },
        { name: "REST API", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "UI/UX Principles", level: 75 },
        { name: "Testing (Jest)", level: 65 },
        { name: "Webpack", level: 70 },
        { name: "Accessibility", level: 80 },

    ];

    return (
        <section id="skills" className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-teal-500">Skills</h2>
                    <p className="py-6 text-gray-600 dark:text-gray-400">These are the technologies and skills I've worked with</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skills.map((skill, index) => (
                        <div key={index} className="mb-4">
                            <div className="flex justify-between mb-1">
                                <span className="font-medium">{skill.name}</span>
                                <span className="text-teal-500 font-medium">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                                <div
                                    className="bg-teal-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;