import profile from '../assets/profImage.jpg'
import image from '../assets/image.jpg'

function About() {
    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-teal-500">About Me</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center">
                        <div className="w-3/4 h-auto rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={image}
                                alt="professional headshot"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center">
                        <h3 className="text-2xl font-semibold mb-4">A Passionate Frontend Engineer</h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            With over 3 years of experience in web development, I specialize in creating responsive,
                            accessible, and performant web applications using modern technologies like React,
                            Next.js, and Tailwind CSS.
                        </p>

                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Adept at integrating backend systems efficiently to bolster functionality.
                            Anticipates contributing to innovative, high-quality solutions while embracing team synergy to drive success
                            in a dynamic engineering environment.
                        </p>

                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            I'm passionate about clean code, user-centric design, and staying up-to-date with the latest
                            frontend development trends. I believe that great frontend development is not just about making things look good, but also about creating intuitive, fast, and accessible experiences for all users.
                            My goal is to create web experiences that are not only visually
                            appealing but also highly functional and accessible to all users.
                        </p>

                        {/*<p className="text-gray-600 dark:text-gray-300 mb-4">*/}
                        {/*    When I'm not coding, you can find me contributing to open-source projects, writing technical*/}
                        {/*    articles on my blog, or exploring hiking trails in my local area.*/}
                        {/*</p>*/}

                        {/*<div className="flex mt-4 space-x-4">*/}
                        {/*    <a*/}
                        {/*        href="#"*/}
                        {/*        className="px-6 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-colors"*/}
                        {/*    >*/}
                        {/*        Download Resume*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;