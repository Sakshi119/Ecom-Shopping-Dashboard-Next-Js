"use client";

import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "@/store/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const inputClass =
  "w-full px-4 py-3 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition";

const labelClass = "block text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-1.5";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { items } = useSelector((state) => state.cart);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", state: "", pincode: "",
    cardNumber: "", expiry: "", cvv: "", cardName: "",
  });
  const [placing, setPlacing] = useState(false);
  const [placed, setPlaced] = useState(false);

  const handleChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlacing(true);
    setTimeout(() => {
      dispatch(clearCart());
      setPlaced(true);
      setPlacing(false);
    }, 1800);
  };

  // ── Order placed success screen ──
  if (placed) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 gap-5">
        <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-4xl">
          ✓
        </div>
        <h2
          className="text-3xl font-semibold text-zinc-900"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Order Placed!
        </h2>
        <p className="text-zinc-400 text-sm max-w-xs">
          Thanks for your purchase. You'll receive a confirmation shortly.
        </p>
        <Link
          href="/dashboard/products"
          className="mt-2 bg-zinc-900 text-white text-sm font-semibold px-8 py-3 rounded-xl hover:bg-zinc-700 transition"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // ── Empty cart guard ──
  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
        <p className="text-zinc-400 text-sm">Your cart is empty.</p>
        <Link href="/dashboard/products" className="text-sm font-semibold text-zinc-900 underline">
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Back */}
      <Link
        href="/dashboard/cart"
        className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-zinc-700 transition mb-8"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Back to Cart
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

        {/* ── Left: Form ── */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">

          {/* Shipping */}
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
            <h2
              className="text-lg font-semibold text-zinc-900 mb-5"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Shipping Information
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>First Name</label>
                <input name="firstName" required placeholder="Rahul" className={inputClass} value={form.firstName} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClass}>Last Name</label>
                <input name="lastName" required placeholder="Sharma" className={inputClass} value={form.lastName} onChange={handleChange} />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className={labelClass}>Email</label>
                <input name="email" type="email" required placeholder="you@example.com" className={inputClass} value={form.email} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClass}>Phone</label>
                <input name="phone" type="tel" required placeholder="+91 98765 43210" className={inputClass} value={form.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="mt-4">
              <label className={labelClass}>Address</label>
              <input name="address" required placeholder="123, MG Road, Apt 4B" className={inputClass} value={form.address} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div>
                <label className={labelClass}>City</label>
                <input name="city" required placeholder="Mumbai" className={inputClass} value={form.city} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClass}>State</label>
                <input name="state" required placeholder="Maharashtra" className={inputClass} value={form.state} onChange={handleChange} />
              </div>
              <div>
                <label className={labelClass}>Pincode</label>
                <input name="pincode" required placeholder="400001" className={inputClass} value={form.pincode} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
            <h2
              className="text-lg font-semibold text-zinc-900 mb-1"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Payment Details
            </h2>
            <p className="text-xs text-zinc-400 mb-5 flex items-center gap-1">
              <svg className="w-3.5 h-3.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              Secured with 256-bit SSL encryption
            </p>

            <div>
              <label className={labelClass}>Card Number</label>
              <input
                name="cardNumber"
                required
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className={inputClass}
                value={form.cardNumber}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").replace(/(.{4})/g, "$1 ").trim();
                  setForm((f) => ({ ...f, cardNumber: val }));
                }}
              />
            </div>

            <div className="mt-4">
              <label className={labelClass}>Name on Card</label>
              <input name="cardName" required placeholder="Rahul Sharma" className={inputClass} value={form.cardName} onChange={handleChange} />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className={labelClass}>Expiry</label>
                <input
                  name="expiry"
                  required
                  placeholder="MM / YY"
                  maxLength={7}
                  className={inputClass}
                  value={form.expiry}
                  onChange={(e) => {
                    let val = e.target.value.replace(/\D/g, "");
                    if (val.length >= 3) val = val.slice(0, 2) + " / " + val.slice(2, 4);
                    setForm((f) => ({ ...f, expiry: val }));
                  }}
                />
              </div>
              <div>
                <label className={labelClass}>CVV</label>
                <input
                  name="cvv"
                  required
                  placeholder="•••"
                  maxLength={3}
                  type="password"
                  className={inputClass}
                  value={form.cvv}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={placing}
            className="w-full bg-zinc-900 text-white font-semibold py-4 rounded-xl hover:bg-zinc-700 active:scale-95 transition-all duration-150 disabled:opacity-60 cursor-pointer flex items-center justify-center gap-2 text-sm"
          >
            {placing ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                Placing Order...
              </>
            ) : (
              <>
                Place Order · ₹{total.toFixed(2)}
              </>
            )}
          </button>
        </form>

        {/* ── Right: Order Summary ── */}
        <div className="lg:col-span-2">
          <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm sticky top-20">
            <h2
              className="text-lg font-semibold text-zinc-900 mb-5"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Order Summary
            </h2>

            <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
              {items.map((item) => (
                <div key={item.id} className="flex gap-3 items-center">
                  <div className="relative w-14 h-14 bg-zinc-50 rounded-xl flex-shrink-0 overflow-hidden border border-zinc-100">
                    <Image src={item.image} alt={item.title} fill sizes="56px" className="object-contain p-1.5" />
                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-zinc-800 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                      {item.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-semibold text-zinc-700 line-clamp-2 leading-snug">{item.title}</p>
                  </div>
                  <span className="text-sm font-semibold text-zinc-800 flex-shrink-0">
                    ₹{(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-zinc-100 mt-5 pt-4 space-y-2">
              <div className="flex justify-between text-sm text-zinc-500">
                <span>Subtotal</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm text-zinc-500">
                <span>Shipping</span>
                <span className="text-emerald-500 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-sm text-zinc-500">
                <span>Tax</span>
                <span>Included</span>
              </div>
            </div>

            <div className="border-t border-zinc-100 mt-4 pt-4 flex justify-between items-center">
              <span className="font-semibold text-zinc-900" style={{ fontFamily: "'DM Serif Display', serif" }}>
                Total
              </span>
              <span className="text-xl font-bold text-amber-500">₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}