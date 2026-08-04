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

export default function RequestsOverview({
    stats,
}: Props) {
    return (
        <Card>

            <CardHeader>
                <CardTitle>
                    Rental Requests
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-5">

                <div className="flex justify-between">
                    <span>Total</span>

                    <span className="font-bold">
                        {stats.rentalRequests.totalRentalRequests}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Approved</span>

                    <span className="font-bold text-emerald-600">
                        {stats.rentalRequests.approvedRequests}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Pending</span>

                    <span className="font-bold text-amber-500">
                        {stats.rentalRequests.pendingRequests}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Rejected</span>

                    <span className="font-bold text-red-500">
                        {stats.rentalRequests.rejectedRequests}
                    </span>
                </div>

                <div className="flex justify-between">
                    <span>Cancelled</span>

                    <span className="font-bold text-gray-500">
                        {stats.rentalRequests.cancelledRequests}
                    </span>
                </div>

            </CardContent>

        </Card>
    );
}