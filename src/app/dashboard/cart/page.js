"use client";

import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "@/store/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { toINR } from "@/utility/currency";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
        <div className="w-20 h-20 rounded-full bg-zinc-100 flex items-center justify-center text-4xl">
          🛒
        </div>
        <h2 className="text-2xl font-semibold text-zinc-800" style={{ fontFamily: "'DM Serif Display', serif" }}>
          Your cart is empty
        </h2>
        <p className="text-zinc-400 text-sm max-w-xs">
          Looks like you haven't added anything yet. Start exploring our collection.
        </p>
        <Link
          href="/dashboard/products"
          className="mt-2 inline-block bg-zinc-900 text-white text-sm px-6 py-2.5 rounded-full hover:bg-zinc-700 transition-all duration-200"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1
        className="text-3xl font-semibold text-zinc-900 mb-8 tracking-tight"
        style={{ fontFamily: "'DM Serif Display', serif" }}
      >
        Your Cart ({items.length})
      </h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="group flex gap-5 bg-white border border-zinc-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="relative w-24 h-24 flex-shrink-0 bg-zinc-50 rounded-xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="96px"
                className="object-contain p-2"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start gap-2">
                <h3 className="text-sm font-semibold text-zinc-800 line-clamp-2 leading-snug">
                  {item.title}
                </h3>
                <button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="flex-shrink-0 text-zinc-300 hover:text-red-400 transition-colors cursor-pointer text-lg leading-none"
                  aria-label="Remove item"
                >
                  ×
                </button>
              </div>

              <p className="text-amber-600 font-semibold text-sm mt-1">₹{toINR(item.price)}</p>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center gap-1 bg-zinc-50 border border-zinc-200 rounded-full px-1 py-1">
                  <button
                    onClick={() => dispatch(decreaseQty(item.id))}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 hover:bg-zinc-200 transition cursor-pointer text-base font-medium"
                  >
                    −
                  </button>
                  <span className="w-8 text-center text-sm font-semibold text-zinc-800">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => dispatch(increaseQty(item.id))}
                    className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 hover:bg-zinc-200 transition cursor-pointer text-base font-medium"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm font-semibold text-zinc-700">
                  ₹{toINR(item.price * item.quantity)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="mt-8 bg-zinc-900 text-white rounded-2xl p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-zinc-400 text-sm">Subtotal</span>
          <span className="font-semibold">₹{toINR(total)}</span>
        </div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-zinc-400 text-sm">Shipping</span>
          <span className="text-emerald-400 text-sm font-medium">Free</span>
        </div>
        <div className="border-t border-zinc-700 pt-4 flex justify-between items-center mb-6">
          <span className="font-semibold text-lg" style={{ fontFamily: "'DM Serif Display', serif" }}>
            Total
          </span>
          <span className="text-2xl font-bold text-amber-400">₹{toINR(total)}</span>
        </div>

        {/* ← Only change from previous version: button → Link */}
        <Link
          href="/dashboard/checkout"
          className="w-full block text-center bg-amber-500 hover:bg-amber-400 text-zinc-900 font-semibold py-3 rounded-xl transition-all duration-200 cursor-pointer"
        >
          Proceed to Checkout →
        </Link>
      </div>
    </div>
  );
}