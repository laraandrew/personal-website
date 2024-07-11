"use client"; 
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import aboutme from '../../../public/assets/imgs/aboutme.png';


const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add form validation logic here if needed
    setFormSubmitted(true);
    // Handle form submission logic (e.g., send data to server)
  };

  return (
    <section id="contact" className="flex flex-col items-center justify-evenly p-8 bg-white rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl md:flex-row md:gap-8">
      <div className="flex flex-col items-center mb-8 md:mb-0">
        <Image src={aboutme} alt="About me" width={200} height={200} className="rounded-lg mb-4" />
        <Link href="https://calendly.com/aandrewlaraa/30min" className="w-full mb-2 px-4 py-2 bg-yellow-500 text-gray-800 rounded-lg shadow-md hover:bg-orange-500 hover:text-white transition text-center">
          Set a time to chat
        </Link>
        <Link href="mailto:andrewlara200@gmail.comm" className="w-full px-4 py-2 bg-yellow-500 text-gray-800 rounded-lg shadow-md hover:bg-orange-500 hover:text-white transition text-center">
          Email me here
        </Link>
      </div>
      <div className="flex flex-col items-center w-full max-w-lg">
        <header className="text-3xl font-bold mb-6 text-gray-900">Contact</header>
        {!formSubmitted ? (
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(123) 456-7890"
                required
                className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 text-gray-800 rounded-lg shadow-md hover:bg-orange-500 hover:text-white transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center text-green-500 text-lg font-bold">Thank you for contacting us!</div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
