import React, { useState } from 'react';
import background from '../../assets/pic/logo4.png'; // Ensure this path is correct

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-black py-10 relative">
            <h1 className="text-6xl font-raleway mb-10 mt-10 text-white">
                Get in touch<span className="text-[#7ed957] ">.</span>
            </h1>
            <div className="w-full max-w-5xl bg-white p-10 rounded-[25px] shadow-md flex flex-col items-center relative overflow-hidden" style={{ height: '690px', flexShrink: 0 }}>
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${background})` }}
                ></div>
                <div className="relative z-20 text-center">
                    <h1 className="text-5xl font-raleway mb-11 mt-3 text-black">
                        Any <span className="text-[#7ed957] ">Questions?</span>
                    </h1>
                    <form onSubmit={handleSubmit} className="flex flex-col w-full">
                        <div className="flex justify-between mb-11">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                className="rounded border border-gray-300 text-lg mr-2 bg-gray-300 mb-6 p-3 placeholder-inter"
                                style={{ backgroundColor: '#DADADA', width: '400px', lineHeight: '1.5' }}
                            />
                            <input
                                type="text"
                                name="company"
                                placeholder="School/Company Name"
                                value={formData.company}
                                onChange={handleChange}
                                className="rounded border border-gray-300 text-lg mr-2 bg-gray-300 mb-6 p-3 placeholder-inter"
                                style={{ backgroundColor: '#DADADA', width: '400px', lineHeight: '1.5' }}
                            />
                        </div>
                        <div className="flex justify-between mb-11">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                className="rounded border border-gray-300 text-lg mr-2 bg-gray-300 mb-6 p-3 placeholder-inter"
                                style={{ backgroundColor: '#DADADA', width: '400px', lineHeight: '1.5' }}
                            />
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                className="rounded border border-gray-300 text-lg mr-2 bg-gray-300 mb-6 p-3 placeholder-inter"
                                style={{ backgroundColor: '#DADADA', width: '400px', lineHeight: '1.5' }}
                            />
                        </div>
                        <div className="mb-11">
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded border border-gray-300 text-lg h-32 placeholder-inter"
                                style={{ backgroundColor: '#DADADA', lineHeight: '1.5' }}
                            />
                        </div>
                        <button type="submit" className="p-4 rounded bg-black text-white text-lg cursor-pointer font-inter hover:bg-gray-800">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
