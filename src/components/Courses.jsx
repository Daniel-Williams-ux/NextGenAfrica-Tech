import React, { useState } from 'react';

const courses = [
    {
        id: 1,
        title: 'JavaScript Essentials',
        description: 'Learn the fundamentals of JavaScript, the programming language of the web.',
        image: '/course-js.webp',
        instructorName: 'Daniel Williams',
        instructorEmail: 'williamsoligodaniel@gmail.com',
        phoneNumber: '+2347033112571',
    },
    {
        id: 2,
        title: 'Python for Beginners',
        description: 'Start your programming journey with Python, a versatile and powerful language.',
        image: '/course-python.webp',
        instructorName: 'Daniel Williams',
        instructorEmail: 'williamsoligodaniel@gmail.com',
        phoneNumber: '+2347033112571',
    },
    {
        id: 3,
        title: 'Linux Essentials',
        description: 'Understand the basics of Linux operating systems and command-line usage.',
        image: '/course-linux.webp',
        instructorName: 'Daniel Williams',
        instructorEmail: 'williamsoligodaniel@gmail.com',
        phoneNumber: '+2347033112571',
    },
    {
        id: 4,
        title: 'Web Development Bootcamp',
        description: 'Become a full-stack web developer by learning HTML, CSS, JavaScript, and more.',
        image: '/course-webdev.webp',
        instructorName: 'Daniel Williams',
        instructorEmail: 'williamsoligodaniel@gmail.com',
        phoneNumber: '+2347033112571',
    },
    {
        id: 5,
        title: 'Software Development Fundamentals',
        description: 'Learn core software development principles and best practices.',
        image: '/course-software-dev.webp',
        instructorName: 'Daniel Williams',
        instructorEmail: 'williamsoligodaniel@gmail.com',
        phoneNumber: '+2347033112571',
    },
    {
        id: 6,
        title: 'AI Essentials',
        description: 'Dive into the world of Artificial Intelligence and machine learning concepts.',
        image: '/course-ai.webp',
        instructorName: 'Daniel Williams',
        instructorEmail: 'williamsoligodaniel@gmail.com',
        phoneNumber: '+2347033112571',
    },
];

const Courses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleContactClick = (course) => {
        setSelectedCourse(course);
    };

    const closeModal = () => {
        setSelectedCourse(null);
    };

    return (
        <div className="courses-page py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Explore Our Courses
                </h1>
                <p className="text-lg text-center text-gray-600 mb-12">
                    Choose from a variety of courses tailored to help you succeed in the tech industry.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-48 object-cover"
                                loading="lazy"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
                                <p className="text-gray-600 mt-2">{course.description}</p>
                                <button
                                    onClick={() => handleContactClick(course)}
                                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 mt-4 rounded-md transition duration-150 ease-in-out"
                                >
                                    Contact Instructor
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Instructor Contact Info */}
            {selectedCourse && (
                <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact {selectedCourse.instructorName}</h2>
                        <p className="text-gray-700">For more information about the course, please contact:</p>
                        <p className="text-gray-800 font-semibold mt-2">{selectedCourse.instructorName}</p>
                        <p className="text-blue-600 mt-1">
                            <a href={`mailto:${selectedCourse.instructorEmail}`}>
                                {selectedCourse.instructorEmail}
                            </a>
                        </p>
                        <button
                            onClick={closeModal}
                            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 mt-6 rounded-md transition duration-150 ease-in-out w-full"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Courses;