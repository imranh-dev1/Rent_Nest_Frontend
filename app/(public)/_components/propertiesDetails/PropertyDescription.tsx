import {
    FileText,
    Home,
    MapPinned,
    CalendarDays,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Separator } from "@/components/ui/separator";
import { IProperty } from "@/types/property";

interface Props {
    property: IProperty;
}

export default function PropertyDescription({
    property,
}: Props) {
    return (
        <Card className="shadow-sm px-6 py-8 ">

            <CardHeader>

                <CardTitle className="flex items-center gap-2">

                    <FileText className="h-5 w-5 text-primary" />

                    About this Property

                </CardTitle>

            </CardHeader>

            <CardContent className="space-y-8">

                {/* Description */}

                <p className="leading-8 text-muted-foreground">
                    {property.description}
                </p>

                <Separator />

                {/* Overview */}

                <div>

                    <h3 className="mb-5 text-lg font-semibold">
                        Property Overview
                    </h3>

                    <div className="grid gap-5 sm:grid-cols-2">

                        <div className="flex items-center gap-3">

                            <Home className="h-5 w-5 text-primary" />

                            <div>

                                <p className="text-sm text-muted-foreground">
                                    Category
                                </p>

                                <p className="font-medium">
                                    {property.category.name}
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3">

                            <MapPinned className="h-5 w-5 text-primary" />

                            <div>

                                <p className="text-sm text-muted-foreground">
                                    City
                                </p>

                                <p className="font-medium">
                                    {property.city}
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3">

                            <CalendarDays className="h-5 w-5 text-primary" />

                            <div>

                                <p className="text-sm text-muted-foreground">
                                    Listed On
                                </p>

                                <p className="font-medium">
                                    {new Date(property.createdAt).toLocaleDateString()}
                                </p>

                            </div>

                        </div>

                        <div className="flex items-center gap-3">

                            <Home className="h-5 w-5 text-primary" />

                            <div>

                                <p className="text-sm text-muted-foreground">
                                    Status
                                </p>

                                <p className="font-medium">
                                    {property.availability}
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </CardContent>

        </Card>
    );
}