import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { IDashboardStatistics } from "@/types/dashboard";

interface Props {
    stats: IDashboardStatistics;
}

export default function UsersOverview({
    stats,
}: Props) {
    return (
        <Card>

            <CardHeader>
                <CardTitle>
                    Users Overview
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">

                <div className="flex items-center justify-between">
                    <span>Total Users</span>

                    <span className="font-bold">
                        {stats.users.totalUsers}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span>Landlords</span>

                    <span className="font-bold text-blue-600">
                        {stats.users.totalLandlords}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span>Tenants</span>

                    <span className="font-bold text-emerald-600">
                        {stats.users.totalTenants}
                    </span>
                </div>

            </CardContent>

        </Card>
    );
}