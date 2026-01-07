const Skeleton = ({ className }: { className?: string }) => (
  <div
    className={`animate-pulse rounded-md bg-gray-200 dark:bg-gray-700 ${className}`}
  />
);

export default function DashboardSkeleton() {
  return (
    <section className="bg-[#f6f6f8] dark:bg-[#121520] min-h-screen flex">
      {/* Sidebar placeholder */}
      <aside className="hidden md:block w-64 bg-white dark:bg-[#1e2230] p-6 space-y-6">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-4 w-28" />
        <div className="space-y-4 mt-8">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-10 w-full" />
          ))}
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 md:p-8 space-y-8">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-20 w-20 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-6 w-64" />
            <Skeleton className="h-4 w-40" />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-xl" />
          ))}
        </div>

        {/* Chart + feed */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Skeleton className="lg:col-span-2 h-80 rounded-xl" />
          <Skeleton className="h-80 rounded-xl" />
        </div>
      </main>
    </section>
  );
}
