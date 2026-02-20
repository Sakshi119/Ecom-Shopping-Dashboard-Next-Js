import { setCategory } from "@/store/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function CategoryFilter() {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.products.filter.category);

  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M7 12h10M10 18h4" />
      </svg>
      <select
        value={category}
        onChange={(e) => dispatch(setCategory(e.target.value))}
        className="appearance-none pl-9 pr-8 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-700 font-medium shadow-sm hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition cursor-pointer"
      >
        <option value="all">All Categories</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
      </select>
      <svg
        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}