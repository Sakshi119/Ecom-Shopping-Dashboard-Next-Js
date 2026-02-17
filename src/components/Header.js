"use client"

import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"
import { selectCartCount } from "@/store/cartSlice"
import { logout } from "@/store/authSlice"
import { useRouter } from "next/navigation"

export default function Header() {
  const cartCount = useSelector(selectCartCount)
  const dispatch = useDispatch()
  const router = useRouter()

  const handleLogout = () => {
    dispatch(logout())
    router.push("/login")
  }

  return (
    <header className="h-16 bg-white border-b flex items-center justify-end gap-6 px-6">
      {/* Cart */}
      <Link href="/dashboard/cart" className="relative">
        <span className="text-xl">🛒</span>

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-black text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1">
            {cartCount}
          </span>
        )}
      </Link>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="text-sm px-4 py-2 border rounded hover:bg-black hover:text-white transition"
      >
        Logout
      </button>
    </header>
  )
}
