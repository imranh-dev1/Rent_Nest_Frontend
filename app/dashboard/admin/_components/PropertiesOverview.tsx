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

export default function PropertiesOverview({
    stats,
}: Props) {
    return (
        <Card>

            <CardHeader>
                <CardTitle>
                    Property Overview
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">

                <div className="flex justify-between">
                    <span>Total</span>

                    <span className="font-bold">
                        {stats.properties.totalProperties}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Available</span>

                    <span className="font-bold text-emerald-600">
                        {stats.properties.availableProperties}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Rented</span>

                    <span className="font-bold text-blue-600">
                        {stats.properties.rentedProperties}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Unavailable</span>

                    <span className="font-bold text-red-600">
                        {stats.properties.unavailableProperties}
                    </span>
                </div>

            </CardContent>

        </Card>
    );
} 