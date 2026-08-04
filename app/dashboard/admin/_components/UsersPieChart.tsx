"use client";

import {
    PieChart,
    Pie,
    Tooltip,
    Cell,
    ResponsiveContainer,
} from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { IDashboardStatistics } from "@/types/dashboard";

const COLORS = ["#3B82F6", "#10B981"];

interface Props {
    stats: IDashboardStatistics;
}

export default function UsersPieChart({ stats }: Props) {
    const data = [
        {
            name: "Landlords",
            value: stats.users.totalLandlords,
        },
        {
            name: "Tenants",
            value: stats.users.totalTenants,
        },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>User Distribution</CardTitle>
            </CardHeader>

            <CardContent className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>

                        <Pie
                            data={data}
                            dataKey="value"
                            outerRadius={100}
                            label
                        >
                            {data.map((_, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />

                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}