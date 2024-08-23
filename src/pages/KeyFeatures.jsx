const KeyFeatures = () => {
    return(
        <div className="key-features-section bg-white py-16 mt-10">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Why Choose Us?</h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 cursor-cell">
                <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-xl font-semibold text-gray-800">Flexible Learning</h3>
                    <p className="text-gray-700 text-center mt-2">Flexible learning schedules that fit into your life.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-xl font-semibold text-gray-800">Affordable Pricing</h3>
                    <p className="text-gray-700 text-center mt-2">Affordable pricing with access to quality content.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-xl font-semibold text-gray-800">Hands-On Projects</h3>
                    <p className="text-gray-700 text-center mt-2">Hands-on projects to solidify your learning.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-xl font-semibold text-gray-800">Expert Instructors</h3>
                    <p className="text-gray-700 text-center mt-2">Expert instructors with industry experience.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-xl font-semibold text-gray-800">Comprehensive Resources</h3>
                    <p className="text-gray-700 text-center mt-2">Comprehensive resources and support materials.</p>
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 ease-in-out transform hover:scale-105">
                    <h3 className="text-xl font-semibold text-gray-800">Community Support</h3>
                    <p className="text-gray-700 text-center mt-2">Join a community of learners and get support.</p>
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures;
