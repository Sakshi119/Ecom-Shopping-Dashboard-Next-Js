export default function ProductDetailsSkeleton() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

        {/* Image Panel */}
        <div className="h-[420px] bg-zinc-100 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
        </div>

        {/* Info Panel */}
        <div className="flex flex-col py-2 space-y-4">

          {/* Category badge */}
          <div className="h-5 w-24 bg-zinc-100 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

          {/* Title */}
          <div className="space-y-2">
            <div className="h-7 bg-zinc-100 rounded-xl w-full overflow-hidden relative">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
            <div className="h-7 bg-zinc-100 rounded-xl w-3/4 overflow-hidden relative">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
          </div>

          {/* Stars */}
          <div className="flex gap-1.5 items-center">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-zinc-100 rounded overflow-hidden relative">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>
            ))}
            <div className="h-4 w-24 bg-zinc-100 rounded ml-1 overflow-hidden relative">
              <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-zinc-100" />

          {/* Description lines */}
          <div className="space-y-2">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className={`h-4 bg-zinc-100 rounded-lg overflow-hidden relative ${i === 3 ? "w-2/3" : "w-full"}`}
              >
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>
            ))}
          </div>

          {/* Price */}
          <div className="h-9 w-28 bg-zinc-100 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

          {/* Button */}
          <div className="h-12 w-40 bg-zinc-200 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
          </div>

          {/* Trust badges */}
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-3 w-20 bg-zinc-100 rounded overflow-hidden relative">
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.4s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}