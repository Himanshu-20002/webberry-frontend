"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { apiFetch } from "@/app/lib/api";

export default function BlogPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError("");

        const res = await apiFetch("/blogs");

        console.log("BLOG API RESPONSE:", res); // debug

        setBlogs(res.data || []);
      } catch (err: any) {
        console.log("BLOG FETCH ERROR:", err);
        setError(err.message || "Failed to fetch blogs");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <h1>Blog</h1>

      {loading && <p>Loading blogs...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && blogs.length === 0 && <p>No blogs found.</p>}

      {!loading && blogs.length > 0 && (
        <ul style={{ marginTop: "20px" }}>
          {blogs.map((blog) => (
            <li key={blog._id} style={{ marginBottom: "20px" }}>
              <Link href={`/blog/${blog.slug}`}>
                <strong>{blog.title}</strong>
              </Link>

              <p style={{ marginTop: "6px" }}>{blog.excerpt}</p>

              <small>Status: {blog.status}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
