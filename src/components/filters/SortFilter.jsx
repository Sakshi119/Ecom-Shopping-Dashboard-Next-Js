import { setSort } from "@/store/productSlice";
import { useDispatch, useSelector } from "react-redux";

export default function SortFilter() {
  const dispatch = useDispatch();
  const sort = useSelector((state) => state.products.filter.sort);

  return (
    <div className="relative">
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400 pointer-events-none"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9M3 12h5m8 0l4-4m0 0l-4-4m4 4H11" />
      </svg>
      <select
        value={sort}
        onChange={(e) => dispatch(setSort(e.target.value))}
        className="appearance-none pl-9 pr-8 py-2.5 bg-white border border-zinc-200 rounded-xl text-sm text-zinc-700 font-medium shadow-sm hover:border-zinc-300 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent transition cursor-pointer"
      >
        <option value="none">Sort by</option>
        <option value="price-asc">Price: Low → High</option>
        <option value="price-desc">Price: High → Low</option>
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