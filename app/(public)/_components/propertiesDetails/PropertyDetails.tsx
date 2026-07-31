import {
    Bath,
    BedDouble,
    CalendarDays,
    Home,
    MapPin,
    Maximize,
    Tag,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { IProperty } from "@/types/property";

interface Props {
    property: IProperty;
}

export default function PropertyDetails({
    property,
}: Props) {
    const details = [
        {
            icon: <BedDouble className="h-5 w-5 text-primary" />,
            label: "Bedrooms",
            value: property.bedrooms,
        },
        {
            icon: <Bath className="h-5 w-5 text-primary" />,
            label: "Bathrooms",
            value: property.bathrooms,
        },
        {
            icon: <Maximize className="h-5 w-5 text-primary" />,
            label: "Area",
            value: `${property.area} sqft`,
        },
        {
            icon: <Home className="h-5 w-5 text-primary" />,
            label: "Category",
            value: property.category.name,
        },
        {
            icon: <MapPin className="h-5 w-5 text-primary" />,
            label: "City",
            value: property.city,
        },
        {
            icon: <Tag className="h-5 w-5 text-primary" />,
            label: "Status",
            value: property.availability,
        },
        {
            icon: <CalendarDays className="h-5 w-5 text-primary" />,
            label: "Listed",
            value: new Date(property.createdAt).toLocaleDateString(),
        },
    ];

    return (
        <Card className="px-6 py-8 shadow-sm">

            <CardHeader>

                <CardTitle>
                    Property Details
                </CardTitle>

            </CardHeader>

            <Separator />

            <CardContent className="pt-6">

                <div className="grid gap-4 sm:grid-cols-2">

                    {details.map((item) => (
                        <div
                            key={item.label}
                            className="flex items-center justify-between rounded-xl border bg-muted/30 p-4 transition hover:border-primary hover:bg-primary/5"
                        >

                            <div className="flex items-center gap-3">

                                <div className="rounded-full bg-primary/10 p-2">
                                    {item.icon}
                                </div>

                                <div>

                                    <p className="text-sm text-muted-foreground">
                                        {item.label}
                                    </p>

                                    <p className="font-semibold">
                                        {item.value}
                                    </p>

                                </div>

                            </div>

                            {item.label === "Status" && (
                                <Badge
                                    className={
                                        property.availability === "AVAILABLE"
                                            ? "bg-emerald-600"
                                            : "bg-red-600"
                                    }
                                >
                                    {property.availability}
                                </Badge>
                            )}

                        </div>
                    ))}

                </div>

            </CardContent>

        </Card>
    );
}