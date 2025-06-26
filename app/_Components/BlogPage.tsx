"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Video, BookOpen, FileText } from "lucide-react";

function getYouTubeEmbedURL(url: string): string {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
}

const blogData = {
  videos: [
    {
      title: "Section 43B(h) Explanation – Part 1",
      url: "https://youtu.be/bwHpdus5eBk?si=OU2iwvhfDK2KA1Q7",
    },
    {
      title: "Section 43B(h) Explanation – Part 2",
      url: "https://youtu.be/IoHa87qaZh8?si=sNJ4bVbySiWqKc1E",
    },
    {
      title: "Analysis of Sec 43B(h)",
      url: "https://youtu.be/FgSwA5zBWqY?si=jL9X9JgUR8s0sv_q",
    },
  ],
  externalArticles: [
    {
      title: "Section 43B(h) Applicability – Part I",
      url: "https://itatonline.org/digest/articles/payment-to-micro-or-small-enterprises-applicability-of-section-43bh/",
    },
    {
      title: "Section 43B(h) Applicability – Part II",
      url: "https://itatonline.org/digest/articles/payment-to-micro-or-small-enterprises-and-applicability-of-section-43bh-of-the-income-tax-act-1961-part-ii/",
    },
  ],
  documents: [
    {
      name: "TDS on Remuneration to Partners (PDF)",
      url: "/TDS%20on%20remuneration%20to%20partners.pdf",
    },
    {
      name: "Renting of Immovable Property (PDF)",
      url: "/Renting%20of%20Immovable%20Property.pdf",
    },
    {
      name: "Section 115BBE Article (DOCX)",
      url: "/115bbe-article.docx",
    },
  ],
};

const BlogPage = () => {
  return (
    <main className="min-h-screen p-6 bg-gray-50 text-gray-800">
      <motion.h1
        className="text-4xl font-bold mb-8 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}>
        Resources
      </motion.h1>

      {/* Videos */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <Video className="w-6 h-6 text-blue-600" />
          Video Resources
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {blogData.videos.map((video, idx) => (
            <motion.div
              key={idx}
              className="aspect-video shadow-md rounded-xl overflow-hidden"
              whileHover={{ scale: 1.03 }}>
              <iframe
                className="w-full h-full"
                src={getYouTubeEmbedURL(video.url)}
                title={video.title}
                allowFullScreen
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-green-600" />
          External Articles
        </h2>
        <ul className="list-disc list-inside space-y-3">
          {blogData.externalArticles.map((article, idx) => (
            <li key={idx}>
              <Link
                href={article.url}
                target="_blank"
                className="text-blue-600 hover:underline">
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Documents */}
      <section>
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6 text-purple-600" />
          Downloadable Documents
        </h2>
        <ul className="list-disc list-inside space-y-3">
          {blogData.documents.map((doc, idx) => (
            <li key={idx}>
              <Link
                href={doc.url}
                target="_blank"
                className="text-blue-600 hover:underline">
                {doc.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default BlogPage;
