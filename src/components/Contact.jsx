// src/pages/Contact.jsx
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
            'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
            formData,
            'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setIsSubmitted(true);
            setIsSubmitting(false);
            setFormData({
                name: '',
                email: '',
                message: '',
            });
        }, (err) => {
            console.log('FAILED...', err);
            setError('Failed to send message. Please try again later.');
            setIsSubmitting(false);
        });
    };

    return (
        <div className="contact-page bg-gray-100 mt-16 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    Contact Us
                </h1>
                <p className="text-lg text-center text-gray-600 mb-12">
                    Have any questions or need more information? Feel free to reach out to us.
                </p>

                <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg mx-auto">
                    {isSubmitted ? (
                        <p className="text-center text-green-500 text-lg">
                            Thank you! Your message has been sent successfully.
                        </p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                                    name="message"
                                    id="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="text-center">
                                <button
                                    type="submit"
                                    className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-150 ease-in-out ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                                {error && <p className="text-red-500 mt-4">{error}</p>}
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
