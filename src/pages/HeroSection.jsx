import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div className="home-container py-20 md:px-0">
            <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-5xl font-bold">Welcome to NextGenAfrica Tech</h1>
                <p className="text-lg mt-4 mx-4 md:mx-0">Your gateway to top-tier education. Explore our courses and start your journey today!</p>
                
                {/* Adding a secondary tagline */}
                <p className="text-lg mt-2 text-gray-700">Empowering the next generation of African tech innovators.</p>
                
                <div className="mt-6 flex justify-center space-x-4">
                    <Link to="/courses">
                        <button 
                            type="button" 
                            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md transition duration-150 ease-in-out transform hover:scale-105">
                                Explore Courses
                        </button>
                    </Link>
                    {/* Secondary CTA */}
                    <Link to="/about">
                        <button 
                            type="button" 
                            className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-md transition duration-150 ease-in-out transform hover:scale-105">
                            Learn More
                        </button>
                    </Link>
                </div>
                
                {/* Optional image or illustration */}
                <div className="mt-10">
                    <img 
                        src="/hero-illustration.webp" 
                        alt="Illustration of tech education" 
                        className="mx-auto max-w-full h-auto rounded-lg shadow-lg" 
                        loading="lazy" 
                    />
                </div>
                
                {/* Optional scroll indicator */}
                <div className="mt-12">
                    <svg className="w-6 h-6 text-gray-400 animate-bounce mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default HeroSection