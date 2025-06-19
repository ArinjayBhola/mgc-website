import React from "react";

export default function ContactForm() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-2">Send Us a Message</h2>
      <p className="text-gray-600 mb-6">
        Connect with us to learn how we can support your financial goals—or to discover exciting career opportunities
        within our growing team.
      </p>
      <form
        action="https://formspree.io/f/xyzjpqod"
        method="POST"
        className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            required
            className="w-full p-3 border rounded-md bg-gray-100"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            required
            className="w-full p-3 border rounded-md bg-gray-100"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full p-3 border rounded-md bg-gray-100"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-md bg-gray-100"
          />
        </div>
        <textarea
          name="message"
          placeholder="Message"
          rows={4}
          required
          className="w-full p-3 border rounded-md bg-gray-100"></textarea>

        <button
          type="submit"
          className="bg-black text-white cursor-pointer px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300">
          Submit
        </button>
      </form>
    </div>
  );
}
