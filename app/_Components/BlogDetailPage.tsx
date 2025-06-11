const blog = {
  title: "Lorem Ipsum Dolor Sit Amet",
  date: "June 11, 2025",
  content: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed pulvinar massa a ex euismod tincidunt. Proin nec metus non justo laoreet sagittis.

  ### Subheading Example

  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.

  ### Benefits of Lorem Ipsum

  - Helps maintain a readable layout
  - Provides placeholder for testing fonts and styles
  - Commonly used by designers and developers

  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.

  ### Conclusion

  Lorem ipsum has become the industry standard dummy text. Whether you're designing a corporate website, a SaaS platform, or a personal blog, lorem ipsum keeps your UI focused on design.
  `,
};

export default function BlogDetailPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      {/* Title & metadata */}
      <h1 className="text-4xl font-bold text-gray-900 mb-2 leading-tight">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-8">• {blog.date}</p>

      {/* Content area */}
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
