"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";
import { Loader } from "lucide-react";

interface Blog {
  id: string;
  title: string;
  content: string;
  createdAt: string;
}

export default function BlogDetailPage() {
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const id = usePathname();
  const blogId = id.split("/").pop();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!blogId) {
          setError("Missing blog ID");
          setLoading(false);
          return;
        }

        const res = await axios.get(`/api/getBlog?id=${blogId}`);
        setBlog(res.data);
      } catch (err) {
        setError("Something went wrong");
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center my-20">
        <Loader
          className="animate-spin w-6 h-6 text-blue-600"
          size={40}
        />
      </div>
    );
  }

  if (error || !blog) {
    return <div className="text-center mt-20 text-red-600 text-lg font-medium">{error || "Blog not found"}</div>;
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-8">• {formatDate(blog.createdAt)}</p>

      <div className="prose prose-lg prose-blue max-w-none text-gray-800">
        {blog.content
          .trim()
          .split("\n\n")
          .map((para, index) => {
            if (para.trim().startsWith("###")) {
              return (
                <h2
                  key={index}
                  className="mt-8 mb-4 text-2xl text-gray-900 font-semibold">
                  {para.replace("### ", "")}
                </h2>
              );
            } else if (para.trim().startsWith("- ")) {
              const listItems = para
                .trim()
                .split("\n")
                .map((item, i) => <li key={i}>{item.replace("- ", "")}</li>);
              return (
                <ul
                  key={index}
                  className="list-disc ml-6">
                  {listItems}
                </ul>
              );
            } else {
              return <p key={index}>{para.trim()}</p>;
            }
          })}
      </div>
    </div>
  );
}
