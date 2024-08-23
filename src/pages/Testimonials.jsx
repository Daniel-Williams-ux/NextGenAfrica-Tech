import { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const TestimonialFlip = () => {
    const testimonials = [
        {
            id: 1,
            quote: "As a beginner, I highly recommend Daniel as an instructor. His exceptional understanding of computer programming and his clear, patient explanations have made it easier for me to grasp complex concepts. Thanks to Daniel, I have more confidence in completing my project.",
            name: "Fatima",
            role: "Data Analyst",
        },
        {
            id: 2,
            quote: "I like Daniel because he is an experienced and committed tutor. Daniel makes complex things simple. The greatest thing I like about him is to follow up till you're confident. Daniel knows what he's doing. I love Daniel.",
            name: "Josepn",
            role: "Database Administrator",
        },
        {
            id: 3,
            quote: "Looking for a top-notch tech tutor? Look no further, I highly recommend Mr Daniel. He is an expert in anything programming and he has a way of explaining complex concepts simply and understandably. Whether you're a beginner or looking forward to enhancing your skills, Mr Daniel will tailor your lessons to your needs and pace. With his patient and friendly approach, you'll feel comfortable asking any questions that come to your mind. Get ready to level up your tech skills and unlock your full potential with Mr Daniel as your guide.",
            name: "Damilola",
            role: "Web Developer",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwipe = (direction) => {
        if (direction === 'next') {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        } else if (direction === 'prev') {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
        }
    };

    return (
        <div className="testimonial-flip-section bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-16">
            <h2 className="text-4xl font-extrabold text-center text-white mb-12">What Our Students Say</h2>
            <div className="relative w-full max-w-lg mx-auto">
                <div className="flip-card-container">
                    <div className={`flip-card ${currentIndex === 0 ? 'flip' : ''}`}>
                        <div className="flip-card-inner">
                            <div className="flip-card-front bg-white p-6 rounded-lg shadow-lg text-center">
                                <p className="text-gray-800 text-lg">{testimonials[currentIndex].quote}</p>
                                <h3 className="text-xl font-semibold mt-4">{testimonials[currentIndex].name}</h3>
                                <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                            </div>
                            <div className="flip-card-back bg-blue-600 p-6 rounded-lg shadow-lg text-center">
                                <p className="text-white text-lg">Want to learn more? Swipe for more testimonials!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-8">
                    <button
                        onClick={() => handleSwipe('prev')}
                        className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition duration-150 ease-in-out"
                    >
                        Previous
                    </button>
                    <button
                        onClick={() => handleSwipe('next')}
                        className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-md transition duration-150 ease-in-out"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TestimonialFlip;