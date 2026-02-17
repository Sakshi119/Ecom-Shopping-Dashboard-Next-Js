export default function ProductSkeleton() {
    return (
        <div className="bg-white rounded-xl shadow p-4 animate-pulse">
            {/* Image placeholder */}
            <div className="h-40 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded mb-4"></div>

            {/* Title */}
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>

            {/* Price */}
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
    )
}