"use client"

import { usePathname, useRouter } from "next/navigation"
import { useDispatch } from "react-redux";
import Link from "next/link";
import { logout } from "@/store/authSlice";
import AuthGuard from "@/components/AuthGuard";
import Header from "@/components/Header";

export default function DashboardLayout({ children }) {

    const pathname = usePathname();
    const dispatch = useDispatch();
    const router = useRouter();

    const handleLogout = () => {
        dispatch(logout())
        router.push("./login")
    }


    return (
        <AuthGuard>

            <div className="min-h-screen flex bg-gray-100">
                {/* Sidebar */}
                <aside className="w-64 bg-white border-r hidden md:block">
                    <div className="p-6 font-bold text-xl">E-Dashboard</div>

                    <nav className="px-4 space-y-2">
                        <Link
                            href="/dashboard"
                            className={`block px-4 py-2 rounded ${pathname === "/dashboard"
                                ? "bg-black text-white"
                                : "hover:bg-gray-100"
                                }`}
                        >
                            Dashboard
                        </Link>

                        <Link
                            href="/dashboard/products"
                            className={`block px-4 py-2 rounded ${pathname.includes("/products")
                                ? "bg-black text-white"
                                : "hover:bg-gray-100"
                                }`}
                        >
                            Products
                        </Link>

                        <Link
                            href="/dashboard/cart"
                            className={`block px-4 py-2 rounded ${pathname === "/dashboard/cart"
                                ? "bg-black text-white"
                                : "hover:bg-gray-100"
                                }`}
                        >
                            Cart
                        </Link>
                    </nav>
                </aside>

                {/* Main Section */}
                <div className="flex-1 flex flex-col">
                    {/* Topbar */}
                    <Header />
                    {/* Page Content */}
                    <main className="flex-1 p-6">{children}</main>
                </div>
            </div>

        </AuthGuard>
    )
}