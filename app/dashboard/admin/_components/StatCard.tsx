import { LucideIcon } from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface StatCardProps {
    title: string;
    value: number;
    icon: LucideIcon;
    color?: string;
}

export default function StatCard({
    title,
    value,
    icon: Icon,
    color = "text-primary",
}: StatCardProps) {
    return (
        <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                    {title}
                </CardTitle>

                <div className="rounded-xl bg-primary/10 p-2">
                    <Icon className={`h-5 w-5 ${color}`} />
                </div>
            </CardHeader>

            <CardContent>
                <h2 className="text-3xl font-bold">
                    {value}
                </h2>
            </CardContent>
        </Card>
    );
}