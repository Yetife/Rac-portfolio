import profile from '../assets/profImage.jpg'
import image from '../assets/image.jpg'

function HomePage() {
    return (
        <section id="home" className="md:py-40 pt-40 pb-20 flex items-center justify-center h-screen w-full bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
            <div className="max-w-screen-lg mx-auto flex items-center justify-center h-full px-4 md:flex-row flex-col-reverse">
                <div className="flex flex-col justify-center h-full">
                    <p className="text-teal-500 font-bold">Hello, I'm</p>
                    <h1 className="text-4xl sm:text-7xl font-bold py-4 max-w-lg">
                        Rachael Olasehinde
                    </h1>
                    <h2 className="text-lg sm:text-2xl text-gray-600 dark:text-gray-400 pb-4">
                        Frontend Engineer
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 py-4 max-w-lg">
                        I build beautiful, responsive web applications with modern technologies.
                        Let's collaborate and bring your web vision to life.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#projects"
                            className="text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-teal-500 to-teal-700 hover:scale-105 duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-800 dark:text-white w-fit px-6 py-3 my-2 flex items-center rounded-md border-2 border-teal-500 hover:scale-105 duration-300"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
                {/*<div className="relative hidden lg:block animate-fade-in-left" style={{ animationDelay: '0.4s' }}>*/}
                {/*    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />*/}
                {/*    <div className="relative z-10">*/}
                {/*        <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-accent p-1 shadow-xl">*/}
                {/*            <div className="bg-background h-full w-full rounded-[calc(1.5rem-4px)] p-6 text-center">*/}
                {/*                <div className="h-full w-full rounded-xl bg-muted flex items-center justify-center">*/}
                {/*                    <img*/}
                {/*                        src={image}*/}
                {/*                        alt="profile"*/}
                {/*                        className="w-full h-full object-cover"*/}
                {/*                    />*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className="hidden md:block">
                    <div className="flex justify-center items-center">
                        <div className="w-4/6 h-auto rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <img
                                src={image}
                                alt="professional headshot"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="md:hidden block mt-4">
                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <div className="rounded-full w-64 h-64 bg-teal-500 overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                            <img
                                src={image}
                                alt="profile"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HomePage;