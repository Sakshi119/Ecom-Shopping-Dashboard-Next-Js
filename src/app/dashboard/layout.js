"use client"

import { usePathname, useRouter } from "next/navigation"
import { useDispatch } from "react-redux";
import Link from "next/link";
import { logout } from "@/store/authSlice";
import AuthGuard from "@/components/AuthGuard";
import Header from "@/components/Header";

const navItems = [
//   {
//     href: "/dashboard",
//     label: "Dashboard",
//     exact: true,
//     icon: (
//       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
//       </svg>
//     ),
//   },
  {
    href: "/dashboard/products",
    label: "Products",
    exact: false,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    href: "/dashboard/cart",
    label: "Cart",
    exact: true,
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(logout());
    router.push("./login");
  };

  const isActive = (item) =>
    item.exact ? pathname === item.href : pathname.includes(item.href.split("/")[2]);

  return (
    <AuthGuard>
      <div className="min-h-screen flex bg-zinc-50">

        {/* Sidebar */}
        <aside className="w-60 bg-white border-r border-zinc-100 hidden md:flex flex-col shadow-sm">
          {/* Brand */}
          <div className="px-6 py-5 border-b border-zinc-100">
            <span
              className="text-lg font-semibold text-zinc-900 tracking-tight"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              E-Shop
            </span>
            <span className="ml-1 text-amber-500 text-lg">•</span>
          </div>

          {/* Nav */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-zinc-400 px-3 mb-3">
              Menu
            </p>
            {navItems.map((item) => {
              const active = isActive(item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 ${
                    active
                      ? "bg-zinc-900 text-white shadow-md shadow-zinc-900/10"
                      : "text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800"
                  }`}
                >
                  {item.icon}
                  {item.label}
                  {active && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-400" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="px-3 py-4 border-t border-zinc-100">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:bg-red-50 hover:text-red-500 transition-all duration-150 cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </aside>

        {/* Main */}
        <div className="flex-1 flex flex-col min-w-0">
          <Header />
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>

      </div>
    </AuthGuard>
  );
}