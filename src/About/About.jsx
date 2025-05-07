import React, { useState, useEffect } from 'react';

const people = [
  { src: '/assets1/21.jpg', name: 'John Doe', role: 'Founder' },
  { src: '/assets1/22.png', name: 'Jane Smith', role: 'Co-Founder' },
  { src: '/assets1/23.jpg', name: 'Michael Lee', role: 'Creative Director' },
];

const About = () => {
  const [currentPerson, setCurrentPerson] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPerson((prev) => (prev + 1) % people.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-10 py-20">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-gray-300 text-lg leading-relaxed">
          Welcome to our art gallery, where creativity meets passion. Our team is
          dedicated to curating and showcasing the finest art pieces, bringing
          artists and art lovers together. Join us in celebrating the beauty of
          artistic expression.
        </p>
      </div>
      <div className="md:w-1/2 flex items-center justify-center relative">
        <div className="w-80 h-96 relative">
          <img
            src="/assets/11.jpg"
            alt="Artistic Background"
            className="absolute w-full h-full object-cover rounded-lg shadow-lg"
          />
          <img
            src={people[currentPerson].src}
            alt={people[currentPerson].name}
            className="absolute bottom-0 right-0 w-full h-full object-cover border-4 border-white shadow-lg"
          />
          <div className="absolute bottom-2 right-1/2 translate-x-1/2 bg-black bg-opacity-50 text-white p-2 rounded-lg">
            <h3 className="font-semibold">{people[currentPerson].name}</h3>
            <p className="text-sm text-gray-300">{people[currentPerson].role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
