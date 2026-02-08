"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/app/lib/api";
import { getToken } from "@/app/lib/auth";
import { useAuthGuard } from "@/app/lib/useAuthGuard";

export default function AdminBlogsPage() {
  useAuthGuard();

  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // form states
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("draft");

  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const fetchBlogs = async () => {
    setLoading(true);

    try {
      const token = getToken();

      const res = await apiFetch("/blogs/admin/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setBlogs(res.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async () => {
    setMsg("");
    setError("");

    try {
      const token = getToken();

      await apiFetch("/blogs", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          slug,
          excerpt,
          content,
          status,
        }),
      });

      setMsg("Blog created successfully!");

      setTitle("");
      setSlug("");
      setExcerpt("");
      setContent("");
      setStatus("draft");

      fetchBlogs();
    } catch (err: any) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      <h1>Blog CMS</h1>

      <h2 style={{ marginTop: "20px" }}>Create New Blog</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "600px" }}>
        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Slug (example: my-first-blog)"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          style={{ padding: "10px" }}
        />

        <input
          placeholder="Excerpt"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          style={{ padding: "10px" }}
        />

        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ padding: "10px", minHeight: "120px" }}
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          style={{ padding: "10px" }}
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>

        {msg && <p style={{ color: "green" }}>{msg}</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}

        <button onClick={handleCreate} style={{ padding: "10px" }}>
          Create Blog
        </button>
      </div>

      <hr style={{ margin: "30px 0" }} />

      <h2>All Blogs</h2>

      {loading ? (
        <p>Loading blogs...</p>
      ) : blogs.length === 0 ? (
        <p>No blogs found.</p>
      ) : (
        <ul>
          {blogs.map((blog) => (
            <li key={blog._id} style={{ marginBottom: "12px" }}>
              <strong>{blog.title}</strong> ({blog.status}) <br />
              <small>{blog.slug}</small>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
