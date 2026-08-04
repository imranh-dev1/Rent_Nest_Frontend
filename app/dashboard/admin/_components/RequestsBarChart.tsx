"use client";

import {
    ResponsiveContainer,
    BarChart,
    XAxis,
    Tooltip,
    YAxis,
    CartesianGrid,
    Bar,
} from "recharts";

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

export default function RequestsBarChart({
    stats,
}: Props) {

    const data = [
        {
            name: "Pending",
            value: stats.rentalRequests.pendingRequests,
        },
        {
            name: "Approved",
            value: stats.rentalRequests.approvedRequests,
        },
        {
            name: "Rejected",
            value: stats.rentalRequests.rejectedRequests,
        },
        {
            name: "Cancelled",
            value: stats.rentalRequests.cancelledRequests,
        },
    ];

    return (
        <Card>

            <CardHeader>
                <CardTitle>Rental Requests</CardTitle>
            </CardHeader>

            <CardContent className="h-80">

                <ResponsiveContainer width="100%" height="100%">

                    <BarChart data={data}>

                        <CartesianGrid strokeDasharray="3 3" />

                        <XAxis dataKey="name" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="value"
                            radius={[6, 6, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </CardContent>

        </Card>
    );
}