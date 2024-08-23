import { Link } from 'react-router-dom';

const CoursePreview = () => {
    const courses = [
        {
            id: 1,
            title: 'JavaScript Essentials',
            description: 'Learn the fundamentals of JavaScript, the programming language of the web.',
            image: '/course-js.webp',
            link: '/courses/javascript-essentials',
        },
        {
            id: 2,
            title: 'Python for Beginners',
            description: 'Start your programming journey with Python, a versatile and powerful language.',
            image: '/course-python.webp',
            link: '/courses/python-for-beginners',
        },
        {
            id: 3,
            title: 'Linux Essentials',
            description: 'Understand the basics of Linux operating systems and command-line usage.',
            image: '/course-linux.webp',
            link: '/courses/linux-essentials',
        },
        {
            id: 4,
            title: 'Web Development Bootcamp',
            description: 'Become a full-stack web developer by learning HTML, CSS, JavaScript, and more.',
            image: '/course-webdev.webp',
            link: '/courses/web-development-bootcamp',
        },
        {
            id: 5,
            title: 'Software Development Fundamentals',
            description: 'Learn core software development principles and best practices.',
            image: '/course-software-dev.webp',
            link: '/courses/software-development-fundamentals',
        },
        {
            id: 6,
            title: 'AI Essentials',
            description: 'Dive into the world prompt engineering and leveraging AI tools to enhance productivity.',
            image: '/course-ai.webp',
            link: '/courses/ai-essentials',
        },
    ];
    return(
        <div className="course-previews-section bg-gray-200 py-16">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Featured Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {courses.map((courses) => (
                    <div key={courses.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                    <img 
                        src={courses.image} 
                        alt={courses.title}
                        className="w-full h-48 object-cover" 
                        loading="lazy"
                    />
                   <div className="p-4">
                        <h3 className="text-xl font-semibold mt-4">{courses.description}</h3>
                        <p className="text-gray-700 mt-2">{courses.discription}</p>
                        <Link to={courses.link}>
                        <button 
                            type="button" 

                            className="underline underline-offset-4 border-double border-white hover:text-sky-700 text-black py-2 px-4 mt-4 rounded-md transition duration-150 ease-in-out">
                            Learn More
                        </button>
                        </Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default CoursePreview;