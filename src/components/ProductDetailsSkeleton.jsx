export default function ProductDetailsSkeleton() {
  return (
    <div className="p-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
      
      {/* Image Skeleton */}
      <div className="h-96 bg-gray-200 rounded-xl"></div>

      {/* Text Skeleton */}
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>

        <div className="h-6 bg-gray-200 rounded w-1/4 mt-6"></div>

        <div className="h-12 bg-gray-300 rounded-lg w-40 mt-6"></div>
      </div>

    </div>
  );
}
