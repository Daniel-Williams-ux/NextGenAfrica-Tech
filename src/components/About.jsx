import React from 'react';

const About = () => {
    return (
        <div className="about-page py-16">
            <div className="max-w-7xl mx-auto px-4">

                {/* Introduction Section */}
                <section className="intro text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-blue-900 mb-6">
                        About Us
                    </h1>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                        Welcome to <span className="text-blue-600">NextGenAfrica Tech</span>, where we transform tech education with an innovative approach. Our platform offers flexible, accessible, and affordable courses designed to empower learners across Africa.
                    </p>
                </section>

                {/* Mission Statement */}
                <section className="mission bg-white rounded-lg shadow-lg p-8 mb-12">
                    <h2 className="text-4xl font-semibold text-blue-900 mb-4 text-center">
                        Our Mission
                    </h2>
                    <p className="text-lg text-gray-700">
                        Our mission is to democratize tech education across Africa by providing top-notch courses that help individuals acquire essential skills. We’re committed to making learning accessible to everyone, regardless of their background or location.
                    </p>
                </section>

                {/* Journey & Background */}
                <section className="journey flex flex-col lg:flex-row items-center mb-12">
                    <div className="lg:w-1/2 mb-8 lg:mb-0">
                        <h2 className="text-4xl font-semibold text-blue-900 mb-4">
                            Our Journey
                        </h2>
                        <p className="text-lg text-gray-700">
                            From our roots in technology, we identified a critical gap in accessible education within Africa. This insight fueled the creation of <span className="text-blue-600">NextGenAfrica Tech</span>, a platform dedicated to delivering practical, current, and impactful tech training to a diverse audience.
                        </p>
                    </div>
                    <div className="lg:w-1/2">
                        <img 
                            src="/path-to-image.webp" 
                            alt="Our Journey"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </section>

                {/* The Team */}
                {/* <section className="team mb-12">
                    <h2 className="text-4xl font-semibold text-blue-900 mb-4 text-center">
                        Meet the Team
                    </h2> */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
                        {/* Example Team Member */}
                        {/* <div className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                            <img
                                src="/path-to-image.jpg"
                                alt="Team Member"
                                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-blue-600"
                            />
                            <h3 className="text-xl font-semibold text-blue-900">Name</h3>
                            <p className="text-gray-600">Role/Title</p>
                        </div> */}
                        {/* Add more team members here */}
                    {/* </div>
                </section> */}

                {/* Impact & Future Goals */}
                <section className="impact bg-blue-100 rounded-lg p-8 mb-12">
                    <h2 className="text-4xl font-semibold text-blue-900 mb-4 text-center">
                        Our Impact & Future Goals
                    </h2>
                    <p className="text-lg text-gray-700">
                        Our commitment is to expand our reach and impact, aiming to train thousands across Africa. We envision a future where our platform becomes a leading force in tech education, nurturing innovation and growth throughout the continent.
                    </p>
                </section>

                {/* Call to Action */}
                <section className="cta text-center">
                    <h2 className="text-4xl font-semibold text-blue-900 mb-4">
                        Join Us on Our Journey
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        If you’re passionate about transforming tech education and want to be part of our mission, reach out to us or follow our updates.
                    </p>
                    <a
                        href="/contact"
                        className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition duration-150 ease-in-out shadow-md hover:shadow-lg"
                    >
                        Contact Us
                    </a>
                </section>

            </div>
        </div>
    );
}

export default About;
