import { useState, useEffect } from 'react';
import {Menu, X, Moon, Sun, ArrowUp, Home} from 'lucide-react';
import About from "./component/About.jsx";
import Skills from "./component/Skills.jsx";
import Projects from "./component/Projects.jsx";
import Experience from "./component/Experience.jsx";
import Contact from "./component/Contact.jsx";
import HomePage from "./component/HomePage.jsx";

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Toggle dark mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // Handle scrolling effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle clicking the nav menu
    const handleNav = () => {
        setNav(!nav);
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen">
            {/* Navbar */}
            <nav className={`fixed w-full h-20 shadow-lg z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-gray-800 shadow-lg' : 'bg-transparent'}`}>
                <div className="flex justify-between items-center h-full w-full px-4 md:px-8">
                    <h1 className="text-2xl font-bold">
                        <span className="text-teal-500">RAC</span>Portfolio
                    </h1>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex">
                        <ul className="flex">
                            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                                <li key={item} className="ml-8 hover:text-teal-500 transition-colors">
                                    <a href={`#${item.toLowerCase()}`}>{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Dark mode toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="hidden md:flex p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                        {darkMode ? <Moon size={20} /> : <Sun size={20} /> }
                    </button>

                    {/* Mobile Menu Button */}
                    <div onClick={handleNav} className="md:hidden cursor-pointer">
                        <Menu size={25} />
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={
                    nav
                        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
                        : ''
                }>
                    <div className={
                        nav
                            ? 'fixed left-0 top-0 w-3/4 sm:w-2/5 h-screen bg-white dark:bg-gray-800 p-10 ease-in duration-300'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                    }>
                        <div>
                            <div className="flex w-full items-center justify-between">
                                <h1 className="text-2xl font-bold">
                                    <span className="text-teal-500">Dev</span>Portfolio
                                </h1>
                                <div onClick={handleNav} className="p-3 cursor-pointer">
                                    <X size={20} />
                                </div>
                            </div>
                        </div>

                        <div className="py-4 flex flex-col">
                            <ul className="uppercase">
                                {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
                                    <li key={item} className="py-4 text-sm border-b border-gray-300 dark:border-gray-700" onClick={handleNav}>
                                        <a href={`#${item.toLowerCase()}`}>{item}</a>
                                    </li>
                                ))}
                            </ul>

                            {/* Dark mode toggle - mobile */}
                            <div className="flex items-center mt-8">
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="flex items-center p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                                >
                                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                                    <span className="ml-2">{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>
                <HomePage />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            {/* Scroll to top button */}
            {scrolled && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 p-4 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition-all animate-bounce"
                >
                    <ArrowUp size={20} />
                </button>
            )}

            {/* Footer */}
            <footer className="py-8 text-center bg-gray-100 dark:bg-gray-800">
                <p>&copy; {new Date().getFullYear()} RACPortfolio. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;