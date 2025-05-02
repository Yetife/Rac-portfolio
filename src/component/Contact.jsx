import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Linkedin } from 'lucide-react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        // For now, let's just console.log the data
        console.log(formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-white dark:bg-gray-800">
            <div className="max-w-screen-lg mx-auto px-4">
                <div className="pb-8">
                    <h2 className="text-4xl font-bold inline border-b-4 border-teal-500">Contact</h2>
                    <p className="py-6 text-gray-600 dark:text-gray-400">Get in touch with me</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            I'm currently open to new opportunities and collaborations.
                            Whether you have a question or just want to say hello, I'll
                            do my best to get back to you!
                        </p>

                        <div className="flex flex-col space-y-4">
                            <div className="flex items-center">
                                <div className="bg-teal-100 dark:bg-teal-800 p-3 rounded-full mr-4">
                                    <Mail className="text-teal-500 dark:text-teal-300" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Email</h4>
                                    <p className="text-gray-600 dark:text-gray-400">olasehindey3@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-teal-100 dark:bg-teal-800 p-3 rounded-full mr-4">
                                    <Phone className="text-teal-500 dark:text-teal-300" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Phone</h4>
                                    <p className="text-gray-600 dark:text-gray-400">+234 7047 943 726</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="bg-teal-100 dark:bg-teal-800 p-3 rounded-full mr-4">
                                    <MapPin className="text-teal-500 dark:text-teal-300" size={20} />
                                </div>
                                <div>
                                    <h4 className="font-medium">Location</h4>
                                    <p className="text-gray-600 dark:text-gray-400">Lagos, Nigeria</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <h4 className="font-medium mb-4">Connect with me</h4>
                            <div className="flex space-x-4">
                                {/* Social icons would go here */}
                                <a  href="https://github.com/Yetife" target="_blank" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors">
                                    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                </a>
                                {/*<a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors">*/}
                                {/*    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">*/}
                                {/*        <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.21c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />*/}
                                {/*    </svg>*/}
                                {/*</a>*/}
                                {/*<a href="#" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors">*/}
                                {/*    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">*/}
                                {/*        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />*/}
                                {/*    </svg>*/}
                                {/*</a>*/}
                                <a  href="https://www.linkedin.com/in/yetunde-olasehinde" target="_blank" className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-teal-100 dark:hover:bg-teal-800 transition-colors">
                                    <Linkedin/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-white"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-white"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-800 dark:text-white"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-teal-500 to-teal-700 text-white py-3 px-4 rounded-md hover:from-teal-600 hover:to-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-colors flex items-center justify-center"
                            >
                                <Send size={18} className="mr-2" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;