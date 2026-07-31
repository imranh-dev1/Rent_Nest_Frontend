import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="space-y-3">
                <Skeleton className="h-8 w-56" />
                <Skeleton className="h-4 w-80" />
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                    <div
                        key={index}
                        className="rounded-xl border bg-background p-6"
                    >
                        <div className="flex items-center justify-between">
                            <Skeleton className="h-5 w-28" />
                            <Skeleton className="h-10 w-10 rounded-lg" />
                        </div>

                        <Skeleton className="mt-6 h-10 w-24" />

                        <Skeleton className="mt-3 h-4 w-32" />
                    </div>
                ))}
            </div>

            {/* Table Card */}
            <div className="rounded-xl border bg-background p-6">
                <div className="mb-6 flex items-center justify-between">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-10 w-28" />
                </div>

                <div className="space-y-4">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-5 items-center gap-4 border-b pb-4"
                        >
                            <Skeleton className="h-5 w-44" />
                            <Skeleton className="h-5 w-24" />
                            <Skeleton className="h-5 w-28" />
                            <Skeleton className="h-5 w-20" />
                            <Skeleton className="h-10 w-20 rounded-md" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}