import React, { useState } from 'react';
import axios from 'axios';
import background from '../../assets/pic/logo4.png'; 
import bali from '../../assets/pic/bali.png';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.company) newErrors.company = 'Company is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const response = await axios.post('/api/send_email', formData);
            console.log('Email sent successfully:', response.data);
            setSuccessMessage('Email sent successfully!');
        } catch (error) {
            console.error('Error sending email:', error);
            setSuccessMessage('Failed to send email. Please try again.');
        }
    };

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen bg-black py-10">
            <div
                className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-10"
                style={{ backgroundImage: `url(${bali})` }}
            ></div>
            <h1 className="text-6xl font-raleway mb-10 mt-10 text-white relative z-20">
                Get in touch<span className="text-[#7ed957] ">.</span>
            </h1>
            <div className="relative z-20 w-full max-w-5xl bg-white p-10 rounded-[25px] shadow-md flex flex-col items-center overflow-hidden" style={{ height: '690px', flexShrink: 0 }}>
                <div
                    className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${background})` }}
                ></div>
                <div className="relative z-20 text-center">
                    <h1 className="text-5xl font-raleway mb-11 mt-3 text-black">
                        Any <span className="text-[#7ed957] ">Questions?</span>
                    </h1>
                    {successMessage && <p className="mb-6 text-lg text-green-500">{successMessage}</p>}
                    <form onSubmit={handleSubmit} className="flex flex-col w-full">
                        <div className="flex justify-between mb-11">
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="rounded border border-gray-300 text-lg mr-2 bg-gray-300 mb-1 p-3 placeholder-inter"
                                    style={{ backgroundColor: '#DADADA', width: '400px', lineHeight: '1.5' }}
                                />
                                {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
                            </div>
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="School/Company Name"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="rounded border border-gray-300 text-lg mr-2 bg-gray-300 mb-1 p-3 placeholder-inter"
                                    style={{ backgroundColor: '#DADADA', width: '400px', lineHeight: '1.5' }}
                                />
                                {errors.company && <span className="text-red-500 text-sm">{errors.company}</span>}
                            </div>
                        </div>
                        <div className="flex justify-between mb-11">
                            <div className="flex flex-col">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="rounded border border-gray-300 text-lg mr-2 bg-gray-300 mb-1 p-3 placeholder-inter"
                                    style={{ backgroundColor: '#DADADA', width: '400px', lineHeight: '1.5' }}
                                />
                                {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
                            </div>
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="rounded border border-gray-300 text-lg mr-2 bg-gray-300 mb-1 p-3 placeholder-inter"
                                    style={{ backgroundColor: '#DADADA', width: '400px', lineHeight: '1.5' }}
                                />
                                {errors.phone && <span className="text-red-500 text-sm">{errors.phone}</span>}
                            </div>
                        </div>
                        <div className="flex flex-col mb-11">
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full p-3 rounded border border-gray-300 text-lg h-32 placeholder-inter mb-1"
                                style={{ backgroundColor: '#DADADA', lineHeight: '1.5' }}
                            />
                            {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
                        </div>
                        <button type="submit" className="p-4 rounded bg-black text-white text-lg cursor-pointer font-inter hover:bg-gray-800">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
