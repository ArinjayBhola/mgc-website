"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // For now, just log the data
    console.log("Blog Title:", title);
    console.log("Content:", content);
    console.log("Image File:", image);

    // TODO: Upload to backend here

    // Reset form
    setTitle("");
    setContent("");
    setImage(null);
    setPreview(null);
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-md space-y-6 mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <h2 className="text-2xl font-bold text-center">Upload New Blog</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full text-sm"
          />
          {/* {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-4 rounded-lg max-h-60 object-cover"
            />
          )} */}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Blog Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={6}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your blog content here..."
            required></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
            Submit Blog
          </button>
        </div>
      </form>
    </motion.div>
  );
}

export default Blog;
