"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "@/store/cartSlice";
import Image from "next/image";

export default function CartPage() {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);

  if (items.length === 0) {
    return <p className="p-6">Your cart is empty 🛒</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex gap-4 bg-white p-4 rounded-xl shadow"
        >
          <div className="relative w-24 h-24">
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="96px"
              className="object-contain"
            />
          </div>

          <div className="flex-1">
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600">₹{item.price}</p>

            <div className="flex items-center gap-3 mt-2">
              <button
                onClick={() => dispatch(decreaseQty(item.id))}
                className="px-3 py-1 border rounded cursor-pointer"
              >
                −
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => dispatch(increaseQty(item.id))}
                className="px-3 py-1 border rounded cursor-pointer"
              >
                +
              </button>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-auto text-red-500 cursor-pointer"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
