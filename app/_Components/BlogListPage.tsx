"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import axios from "axios";

interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  tags: string[];
  createdAt: string;
}

// Format date like: Fri, 21 Jun 2025
const formatDate = (dateStr: string) => {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

const BlogListPage = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get("/api/getAllBlog");
        setBlogs(res.data);
      } catch (err) {
        setError("Could not load blogs. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center my-20">
        <Loader
          size={40}
          className="animate-spin text-gray-500"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Blog</h1>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-600">No blogs available yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[...blogs].reverse().map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
                <p className="text-sm text-gray-500 mb-2">{formatDate(blog.createdAt)}</p>
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
      )}
    </div>
  );
};

export default BlogListPage;
