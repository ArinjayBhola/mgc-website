"use client";

import React, { useState } from "react";

export default function ContactForm() {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form submission logic here
    console.log({ firstName, lastName, email, phone, message });
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-semibold mb-2">Send Us a Message</h2>
      <p className="text-gray-600 mb-6">
        Connect with us to learn how we can support your financial goals—or to discover exciting career opportunities
        within our growing team.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="First name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full p-3 border rounded-md bg-gray-100"
          />
          <input
            type="text"
            placeholder="Last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full p-3 border rounded-md bg-gray-100"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border rounded-md bg-gray-100"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full p-3 border rounded-md bg-gray-100"
          />
        </div>
        <textarea
          placeholder="Message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border rounded-md bg-gray-100"></textarea>

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}
