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
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";

import { IDashboardStatistics } from "@/types/dashboard";

const COLORS = ["#22C55E", "#3B82F6", "#EF4444"];

interface Props {
    stats: IDashboardStatistics;
}

export default function PropertiesPieChart({
    stats,
}: Props) {
    const data = [
        {
            name: "Available",
            value: stats.properties.availableProperties,
        },
        {
            name: "Rented",
            value: stats.properties.rentedProperties,
        },
        {
            name: "Unavailable",
            value: stats.properties.unavailableProperties,
        },
    ];

    return (
        <Card>

            <CardHeader>
                <CardTitle>Properties</CardTitle>
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