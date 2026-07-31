import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto space-y-6 px-4 py-10">

            <Skeleton className="h-125 w-full rounded-2xl" />

            <Skeleton className="h-10 w-80" />

            <Skeleton className="h-6 w-60" />

            <Skeleton className="h-75 w-full rounded-xl" />

        </div>
    );
}