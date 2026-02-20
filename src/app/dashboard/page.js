export default function DashboardPage() {
  const stats = [
    { label: "Total Products", value: "20", icon: "📦", change: "+4 this week" },
    { label: "Cart Items", value: "—", icon: "🛒", change: "View cart" },
    { label: "Categories", value: "4", icon: "🏷️", change: "Browse all" },
    { label: "Orders", value: "0", icon: "📋", change: "No orders yet" },
  ];

  return (
    <div className="px-6 py-10 max-w-5xl">

      {/* Welcome */}
      <div className="mb-10">
        <h1
          className="text-3xl font-semibold text-zinc-900 tracking-tight mb-1"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Welcome back 👋
        </h1>
        <p className="text-zinc-400 text-sm">
          Here's a quick overview of your store.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-zinc-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{stat.icon}</span>
              <span className="text-xs text-zinc-400 bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded-full">
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold text-zinc-900 mb-1">{stat.value}</p>
            <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
        <h2 className="text-sm font-semibold text-zinc-700 uppercase tracking-widest mb-4">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-3">
          <a
            href="/dashboard/products"
            className="flex items-center gap-2 bg-zinc-900 text-white text-sm px-5 py-2.5 rounded-xl hover:bg-zinc-700 transition-all duration-150"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            Browse Products
          </a>
          <a
            href="/dashboard/cart"
            className="flex items-center gap-2 border border-zinc-200 text-zinc-700 text-sm px-5 py-2.5 rounded-xl hover:bg-zinc-50 transition-all duration-150"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            View Cart
          </a>
        </div>
      </div>
    </div>
  );
}