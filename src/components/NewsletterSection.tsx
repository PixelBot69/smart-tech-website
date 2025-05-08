import React from 'react';

const ContactFormSection = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Send us your email and we'll reach out to discuss your project needs and provide custom solutions.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <button
              type="submit"
              className="bg-emerald-500 text-white px-6 py-3 rounded-md hover:bg-emerald-600 transition duration-300 whitespace-nowrap"
            >
              Send Query
            </button>
          </form>
          <p className="text-gray-500 text-sm mt-4">
            We'll get back to you within 24 hours to discuss your requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;