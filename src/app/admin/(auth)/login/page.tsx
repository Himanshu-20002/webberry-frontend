"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { apiFetch } from "@/app/lib/api";
import { saveToken } from "@/app/lib/auth";
import { Lock, Mail, ArrowRight, AlertCircle } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("admin@webberry.com");
  const [password, setPassword] = useState("admin123");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await apiFetch("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      saveToken(res.data.token);
      router.push("/admin/dashboard");
    } catch (err: any) {
      setError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Branding Header */}
      <div className="flex flex-col items-center gap-3 text-center">
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-[#bbff1b] flex items-center justify-center shadow-[0_0_20px_rgba(187,255,27,0.4)] group-hover:shadow-[0_0_30px_rgba(187,255,27,0.6)] transition-all">
            <span className="text-[#0d0e0c] font-black text-2xl leading-none">W</span>
          </div>
          <span className="text-3xl font-black tracking-tight text-white uppercase">
            Web<span className="text-[#bbff1b]">Berry</span>
          </span>
        </Link>
        <p className="text-neutral-500 font-semibold uppercase tracking-widest text-[10px] sm:text-xs mt-2">
          Agency Control Panel
        </p>
      </div>

      {/* Login Card */}
      <div className="bg-[#11120f]/80 backdrop-blur-xl border border-white/5 p-8 rounded-[2.5rem] shadow-2xl flex flex-col gap-6 relative overflow-hidden">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-black tracking-tight uppercase">Admin Login</h1>
          <p className="text-xs text-neutral-500 font-medium">
            Enter your credentials to manage the platform settings.
          </p>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Email Address</label>
            <div className="relative flex items-center">
              <Mail className="absolute left-4 w-4 h-4 text-neutral-500" />
              <input
                placeholder="email@example.com"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0d0e0c]/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium text-white placeholder-neutral-600 focus:outline-none focus:border-[#bbff1b]/50 focus:ring-1 focus:ring-[#bbff1b]/50 transition-all"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Password</label>
            <div className="relative flex items-center">
              <Lock className="absolute left-4 w-4 h-4 text-neutral-500" />
              <input
                placeholder="••••••••"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0d0e0c]/50 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium text-white placeholder-neutral-600 focus:outline-none focus:border-[#bbff1b]/50 focus:ring-1 focus:ring-[#bbff1b]/50 transition-all"
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="flex items-center gap-2 text-red-500 bg-red-500/10 border border-red-500/20 p-4 rounded-2xl text-xs font-semibold">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <p>{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 bg-[#bbff1b] hover:bg-[#bbff1b]/90 text-[#0d0e0c] rounded-2xl py-4 px-6 font-black uppercase text-xs tracking-widest shadow-[0_0_20px_rgba(187,255,27,0.2)] hover:shadow-[0_0_35px_rgba(187,255,27,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2"
          >
            {loading ? "Verifying..." : "Access Dashboard"}
            {!loading && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>

      {/* Footer Nav */}
      <Link href="/" className="text-center text-xs text-neutral-500 hover:text-white transition-colors font-bold uppercase tracking-wider">
        ← Back to Main Site
      </Link>
    </div>
  );
}

