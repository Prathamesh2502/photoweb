import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formEndpoint = "https://formspree.io/f/xvgkawyp"; // Replace with your Formspree ID

    try {
      const res = await fetch(formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        alert("Error submitting the form.");
      }
    } catch (error) {
      alert("Network error. Try again later.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-300 text-lg text-center max-w-xl mb-8">
        Feel free to reach out to us for any inquiries, collaborations, or feedback.
      </p>
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-400">Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-gray-400">Email</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white" placeholder="Your Email" required />
          </div>
          <div>
            <label className="block text-gray-400">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 rounded bg-gray-700 text-white" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 py-3 rounded text-white font-bold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
