"use client"

import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton"
import { fetchProductById } from "@/store/productSlice"
import Image from "next/image"
import { useEffect } from "react"
import { useParams } from "next/navigation"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "@/store/cartSlice"

export default function ProductDetailsPage() {
  const { id } = useParams()
  const dispatch = useDispatch()

  const { selectedProduct, status } = useSelector(
    (state) => state.products
  )

  useEffect(() => {
    if (id) {
      dispatch(fetchProductById(id));
    }
  }, [id, dispatch]);

  if (status === "loading" || !selectedProduct) {
    return <ProductDetailsSkeleton />
  }

  return (
    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Image */}
      <div className="relative h-96 bg-white rounded-xl shadow">
        <Image
          src={selectedProduct.image}
          alt={selectedProduct.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-6"
        />
      </div>
      {/* Info */}
      <div className="flex flex-col">
        {/* Category */}
        <span className="inline-block w-fit mb-2 text-xs uppercase tracking-wide py-1 rounded-full bg-gray-100 text-gray-600">
          {selectedProduct.category}
        </span>

        {/* Title */}
        <h1 className="text-2xl font-bold mb-3">
          {selectedProduct.title}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-500">⭐ {selectedProduct.rating?.rate}</span>
          <span className="text-sm text-gray-500">
            ({selectedProduct.rating?.count} reviews)
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-6 leading-relaxed">
          {selectedProduct.description}
        </p>

        {/* Price */}
        <p className="text-2xl font-semibold mb-6">
          ₹ {selectedProduct.price}
        </p>

        {/* CTA */}
        <button
          onClick={() => dispatch(addToCart(selectedProduct))}
          className="cursor-pointer w-fit bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Add to Cart
        </button>
      </div>

    </div>
  )
}
