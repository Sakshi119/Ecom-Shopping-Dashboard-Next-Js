"use client"

import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton"
import { fetchProductById } from "@/store/productSlice"
import Image from "next/image"
import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/store/cartSlice"
import { toINR } from "@/utility/currency"

function StarRating({ rate }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rate) ? "text-amber-400" : "text-zinc-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductDetailsPage() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { selectedProduct, status } = useSelector((state) => state.products)

  useEffect(() => {
    if (id) dispatch(fetchProductById(id));
  }, [id, dispatch]);

  if (status === "loading" || !selectedProduct) {
    return <ProductDetailsSkeleton />
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Image Panel */}
        <div className="relative h-[420px] bg-white border border-zinc-100 rounded-3xl shadow-sm overflow-hidden group">
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-10 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info Panel */}
        <div className="flex flex-col py-2">

          {/* Category Badge */}
          <span className="self-start text-xs font-medium uppercase tracking-widest text-amber-600 bg-amber-50 border border-amber-100 px-3 py-1 rounded-full mb-4">
            {selectedProduct.category}
          </span>

          {/* Title */}
          <h1
            className="text-2xl font-semibold text-zinc-900 leading-snug mb-4"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            {selectedProduct.title}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-5">
            <StarRating rate={selectedProduct.rating?.rate} />
            <span className="text-sm font-semibold text-zinc-700">{selectedProduct.rating?.rate}</span>
            <span className="text-sm text-zinc-400">({selectedProduct.rating?.count} reviews)</span>
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-100 mb-5" />

          {/* Description */}
          <p className="text-zinc-500 text-sm leading-relaxed mb-6">
            {selectedProduct.description}
          </p>

          {/* Price */}
          <div className="flex items-baseline gap-2 mb-6">
            <span className="text-3xl font-bold text-zinc-900">
              ₹{toINR(selectedProduct.price)}
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={() => dispatch(addToCart(selectedProduct))}
            className="cursor-pointer flex items-center justify-center gap-2 bg-zinc-900 text-white px-8 py-3.5 rounded-xl hover:bg-zinc-700 active:scale-95 transition-all duration-150 font-medium shadow-md shadow-zinc-900/10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Add to Cart
          </button>

          {/* Trust badges */}
          <div className="flex gap-4 mt-6 text-xs text-zinc-400">
            <span className="flex items-center gap-1">✓ Free shipping</span>
            <span className="flex items-center gap-1">✓ Easy returns</span>
            <span className="flex items-center gap-1">✓ Secure checkout</span>
          </div>
        </div>
      </div>
    </div>
  )
}