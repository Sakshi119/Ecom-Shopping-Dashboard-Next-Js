"use client"

import { fetchProducts } from "@/store/productSlice";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductSkeleton from "@/components/ProductSkeleton";
import { selectFilteredProducts } from "@/selectors/productSelectors";
import Link from "next/link";
import CategoryFilter from "@/components/filters/CategoryFilter";
import SortFilter from "@/components/filters/SortFilter";

export default function ProductsPage() {
  const products = useSelector(selectFilteredProducts);
  const dispatch = useDispatch();

  const { status, error } = useSelector((state) => state.products);

  const [visibleCount, setVisibleCount] = useState(8);
  const visibleProducts = products.slice(0, visibleCount);
  const loaderRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && status === "succeeded") {
          setVisibleCount((prev) => prev + 8);
        }
      },
      { threshold: 1 }
    );
    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [status]);

  useEffect(() => {
    setVisibleCount(8);
  }, [products]);

  if (status === "idle" || status === "loading") {
    return (
      <div className="px-6 py-8">
        <div className="h-8 w-48 bg-zinc-100 rounded-full mb-6 animate-pulse" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return (
      <div className="p-6 text-red-500 bg-red-50 rounded-xl m-6">
        {error}
      </div>
    );
  }

  return (
    <div className="px-6 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1
            className="text-3xl font-semibold text-zinc-900 tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            All Products
          </h1>
          <p className="text-sm text-zinc-400 mt-1">{products.length} items</p>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          <CategoryFilter />
          <SortFilter />
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {visibleProducts.map((product) => (
          <Link href={`/dashboard/products/${product.id}`} key={product.id}>
            <div className="group bg-white border border-zinc-100 rounded-2xl h-full shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col cursor-pointer">
              {/* Image */}
              <div className="relative h-44 mb-4 bg-zinc-50 rounded-xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Category */}
              <span className="text-[10px] font-semibold uppercase tracking-widest text-amber-600 mb-1">
                {product.category}
              </span>

              {/* Title */}
              <h3 className="text-sm font-semibold text-zinc-800 line-clamp-2 leading-snug mb-3">
                {product.title}
              </h3>

              {/* Footer */}
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-50">
                <p className="text-zinc-900 font-bold text-base">
                  ₹{product.price}
                </p>
                <div className="flex items-center gap-1 text-xs text-zinc-400">
                  <span className="text-amber-400">★</span>
                  <span className="font-medium text-zinc-600">{product.rating?.rate}</span>
                  <span>({product.rating?.count})</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Infinite scroll sentinel */}
      {visibleCount < products.length && (
        <div ref={loaderRef} className="h-16 flex items-center justify-center mt-4">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-zinc-300 animate-bounce"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}