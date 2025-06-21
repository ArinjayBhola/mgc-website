"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";

interface BlogResponse {
  message: string;
  data: {
    id?: string;
  };
}

const BlogForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await axios.post<BlogResponse>("/api/publishBlog", { title, content });
      setMessage(res.data.message);
      setTitle("");
      setContent("");

      if (res.data.data) {
        router.push(`/blogs/${res.data.data.id}`);
      }
    } catch (err) {
      const error = err as AxiosError<{ message: string }>;
      const errorMsg = error.response?.data?.message || "Something went wrong";
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-8 bg-white border border-gray-200 shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">📝 Publish New Blog</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-6">
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div>
          <label className="block text-lg font-medium text-gray-700 mb-1">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={8}
            placeholder="Write your blog content here..."
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 text-lg font-semibold text-white rounded-lg transition ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}>
          {loading ? "Publishing..." : "Publish Blog"}
        </button>
      </form>
      {message && <p className="mt-6 text-center text-sm text-green-600 font-medium">{message}</p>}
    </div>
  );
};

export default BlogForm;
