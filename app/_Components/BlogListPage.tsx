"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const blogs = [
  {
    id: "blog-1",
    title: "Lorem ipsum dolor sit amet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    id: "blog-2",
    title: "Consectetur adipiscing elit",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];

const BlogListPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Blog</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-600 line-clamp-3 mb-4">{blog.description}</p>
              <Link
                href={`/blogs/${blog.id}`}
                className="text-blue-600 hover:text-blue-800 font-medium transition">
                Read more →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;
