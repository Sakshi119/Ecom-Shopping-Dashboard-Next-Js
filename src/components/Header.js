"use client"

import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { selectCartCount } from "@/store/cartSlice"
import { logout } from "@/store/authSlice"
import { useRouter, usePathname } from "next/navigation"

export default function Header({ onMenuClick }) {
  const cartCount = useSelector(selectCartCount)
  const dispatch = useDispatch()
  const router = useRouter()
  const pathname = usePathname()

  const getTitle = () => {
    if (pathname.includes("/products/")) return "Product Details"
    if (pathname.includes("/products")) return "Products"
    if (pathname.includes("/cart")) return "Cart"
    return "Dashboard"
  }

  const handleLogout = () => {
    dispatch(logout())
    router.push("/login")
  }

  return (
    <header className="h-14 bg-white border-b border-zinc-100 flex items-center justify-between px-4 shadow-sm sticky top-0 z-10">

      <div className="flex items-center gap-3">
        {/* Hamburger — mobile only */}
        <button
          onClick={onMenuClick}
          className="md:hidden flex items-center justify-center w-9 h-9 rounded-xl text-zinc-500 hover:bg-zinc-100 transition cursor-pointer"
          aria-label="Open menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Page title */}
        <span className="text-sm font-semibold text-zinc-700 tracking-tight">
          {getTitle()}
        </span>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-3">

        {/* Cart */}
        <Link
          href="/dashboard/cart"
          className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-zinc-50 border border-zinc-100 hover:bg-zinc-100 transition-colors duration-150"
          aria-label="Cart"
        >
          <svg className="w-4 h-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-1.5 bg-amber-500 text-white text-[10px] font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1 shadow">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Divider */}
        <div className="w-px h-5 bg-zinc-200" />

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-red-500 font-medium transition-colors duration-150 cursor-pointer px-2 py-1 rounded-lg hover:bg-red-50"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="hidden sm:inline">Logout</span>
        </button>

      </div>
    </header>
  )
}