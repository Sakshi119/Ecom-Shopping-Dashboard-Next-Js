import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <div>
          <span
            className="text-xl font-semibold text-zinc-900 tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            E-Shop
          </span>
          <span className="text-amber-500 text-xl">•</span>
        </div>
        <Link
          href="/dashboard/products"
          className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition"
        >
          Sign in →
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 relative overflow-hidden">

        {/* Background decoration */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber-100/40 blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-40 h-40 rounded-full bg-zinc-200/50 blur-2xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-amber-200/30 blur-2xl pointer-events-none" />

        {/* Badge */}
        <div className="relative inline-flex items-center gap-2 bg-white border border-zinc-200 text-zinc-500 text-xs font-medium px-4 py-1.5 rounded-full shadow-sm mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          New arrivals every week
        </div>

        {/* Heading */}
        <h1
          className="relative text-5xl sm:text-6xl md:text-7xl font-semibold text-zinc-900 leading-tight tracking-tight max-w-3xl mb-6"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Shop smarter,<br />
          <span className="text-amber-500">live better.</span>
        </h1>

        {/* Subheading */}
        <p className="relative text-zinc-400 text-lg max-w-md mb-10 leading-relaxed">
          Discover thousands of products across electronics, fashion, and jewellery — all in one place.
        </p>

        {/* CTAs */}
        <div className="relative flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/login"
            className="bg-zinc-900 text-white text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-zinc-700 active:scale-95 transition-all duration-150 shadow-md shadow-zinc-900/10"
          >
            Get Started
          </Link>
          <Link
            href="/dashboard/products"
            className="bg-white border border-zinc-200 text-zinc-700 text-sm font-semibold px-8 py-3.5 rounded-xl hover:bg-zinc-50 active:scale-95 transition-all duration-150"
          >
            Browse Products
          </Link>
        </div>

        {/* Trust row */}
        <div className="relative flex items-center gap-6 mt-14 text-xs text-zinc-400 font-medium">
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Free shipping
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-300" />
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Easy returns
          </span>
          <span className="w-1 h-1 rounded-full bg-zinc-300" />
          <span className="flex items-center gap-1.5">
            <svg className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Secure checkout
          </span>
        </div>
      </section>

      {/* Category strip */}
      <section className="px-8 pb-16">
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Electronics", emoji: "💻", color: "bg-blue-50 border-blue-100 hover:bg-blue-100" },
            { label: "Jewellery", emoji: "💎", color: "bg-rose-50 border-rose-100 hover:bg-rose-100" },
            { label: "Men's Fashion", emoji: "👔", color: "bg-zinc-100 border-zinc-200 hover:bg-zinc-200" },
            { label: "Women's Fashion", emoji: "👗", color: "bg-purple-50 border-purple-100 hover:bg-purple-100" },
          ].map((cat) => (
            <Link
              key={cat.label}
              href="/dashboard/products"
              className={`flex flex-col items-center justify-center gap-2 border rounded-2xl py-6 text-sm font-medium text-zinc-700 transition-all duration-150 cursor-pointer ${cat.color}`}
            >
              <span className="text-2xl">{cat.emoji}</span>
              {cat.label}
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-100 px-8 py-5 flex items-center justify-between text-xs text-zinc-400">
        <span>© 2026 E-Shop. All rights reserved.</span>
        <span
          className="font-semibold text-zinc-900"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          E-Shop<span className="text-amber-500">•</span>
        </span>
      </footer>

    </main>
  );
}