import {
    Building2,
    ClipboardList,
    Star,
    Tags,
    Users,
} from "lucide-react";

import StatCard from "./StatCard";
import { IDashboardStatistics } from "@/types/dashboard";

interface Props {
    stats: IDashboardStatistics;
}

export default function DashboardCards({
    stats,
}: Props) {
    return (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">

            <StatCard
                title="Total Users"
                value={stats.users.totalUsers}
                icon={Users}
            />

            <StatCard
                title="Properties"
                value={stats.properties.totalProperties}
                icon={Building2}
            />

            <StatCard
                title="Categories"
                value={stats.categories.totalCategories}
                icon={Tags}
            />

            <StatCard
                title="Requests"
                value={stats.rentalRequests.totalRentalRequests}
                icon={ClipboardList}
            />

            <StatCard
                title="Reviews"
                value={stats.reviews.totalReviews}
                icon={Star}
            />

        </div>
    );
}