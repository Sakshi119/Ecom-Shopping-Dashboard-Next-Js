"use client";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/store/authSlice";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (isAuthenticated) router.push("/dashboard/products");
  }, [isAuthenticated]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="min-h-screen flex bg-zinc-50">

      {/* Left Panel — Branding */}
      <div className="hidden lg:flex w-1/2 bg-zinc-900 flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-amber-500/10" />
        <div className="absolute bottom-20 -right-10 w-56 h-56 rounded-full bg-amber-500/5" />

        <div>
          <span
            className="text-2xl font-semibold text-white tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            E-Shop
            <span className="text-amber-400">•</span>
          </span>
        </div>

        <div>
          <h2
            className="text-4xl font-semibold text-white leading-tight mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Everything you need,<br />
            <span className="text-amber-400">all in one place.</span>
          </h2>
          <p className="text-zinc-400 text-sm leading-relaxed max-w-sm">
            Browse thousands of products, manage your cart, and checkout with confidence.
          </p>
        </div>

        <div className="flex gap-6 text-zinc-500 text-xs">
          <span>✓ Secure checkout</span>
          <span>✓ Fast delivery</span>
          <span>✓ Easy returns</span>
        </div>
      </div>

      {/* Right Panel — Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-sm">

          {/* Mobile brand */}
          <div className="lg:hidden mb-8 text-center">
            <span
              className="text-2xl font-semibold text-zinc-900"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              E-Shop<span className="text-amber-400">•</span>
            </span>
          </div>

          <h1
            className="text-2xl font-semibold text-zinc-900 mb-1"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Sign in
          </h1>
          <p className="text-zinc-400 text-sm mb-8">
            Welcome back — enter your credentials.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition pr-12"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 text-xs cursor-pointer"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 bg-red-50 border border-red-100 text-red-500 text-sm px-4 py-3 rounded-xl">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {error}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-zinc-900 text-white py-3 rounded-xl text-sm font-semibold hover:bg-zinc-700 active:scale-95 transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer mt-2 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Signing in...
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}