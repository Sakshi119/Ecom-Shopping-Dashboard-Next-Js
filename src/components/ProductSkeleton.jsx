export default function ProductSkeleton() {
  return (
    <div className="bg-white border border-zinc-100 rounded-2xl shadow-sm p-4 flex flex-col">

      {/* Image */}
      <div className="h-44 mb-4 bg-zinc-100 rounded-xl overflow-hidden relative">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* Category */}
      <div className="h-3 w-16 bg-zinc-100 rounded-full mb-2 overflow-hidden relative">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* Title — two lines */}
      <div className="h-4 bg-zinc-100 rounded-lg w-full mb-1.5 overflow-hidden relative">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>
      <div className="h-4 bg-zinc-100 rounded-lg w-4/5 mb-3 overflow-hidden relative">
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
      </div>

      {/* Footer row — price + rating */}
      <div className="flex items-center justify-between mt-auto pt-3 border-t border-zinc-50">
        <div className="h-5 w-14 bg-zinc-100 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
        <div className="h-4 w-16 bg-zinc-100 rounded-lg overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>
      </div>

    </div>
  );
}