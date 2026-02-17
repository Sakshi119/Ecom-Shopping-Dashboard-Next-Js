"use client"
import { fetchProducts } from "@/store/productSlice";
import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductSkeleton from "@/components/ProductSkeleton";
import Link from "next/link";
export default function ProductsPage() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state);
  console.log(state);

  const { items, status, error } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  if (status === "loading") {
    return (
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (status === "failed") {
    return <p className="p-6 text-red-500">{error}</p>
  }


  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {items.map((product) => (
        <Link href={`/dashboard/products/${product.id}`} key={product.id}>
          <div className="bg-white rounded-xl h-full shadow hover:shadow-lg transition p-4 flex flex-col">
            {/* Image */}
            <div className="relative h-40 mb-4 ">
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               25vw"
                className="object-contain"
              />
            </div>

            {/* Category */}
            <span className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              {product.category}
            </span>

            {/* Title */}
            <h3 className="text-sm font-semibold line-clamp-2 mb-2">
              {product.title}
            </h3>

            {/* Price */}
            <p className="text-gray-900 font-bold mb-2">
              ₹  {product.price}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 text-sm text-gray-600 mt-auto">
              <span>⭐ {product.rating?.rate}</span>
              <span className="text-xs">({product.rating?.count})</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
