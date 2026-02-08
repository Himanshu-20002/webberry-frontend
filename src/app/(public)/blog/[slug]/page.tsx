"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/app/lib/api";

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await apiFetch(`/blogs/${slug}`);
        setBlog(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) return <p>Loading blog...</p>;
  if (!blog) return <p>Blog not found.</p>;

  return (
    <>
      <h1>{blog.title}</h1>
      <p>{blog.excerpt}</p>

      <hr style={{ margin: "20px 0" }} />

      <div style={{ whiteSpace: "pre-line" }}>{blog.content}</div>
    </>
  );
}
