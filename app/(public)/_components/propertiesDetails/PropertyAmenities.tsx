import { CheckCircle2, Sparkles } from "lucide-react";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import { IProperty } from "@/types/property";

interface Props {
    property: IProperty;
}

export default function PropertyAmenities({
    property,
}: Props) {
    return (
        <Card className="px-6 py-8 shadow-sm">

            <CardHeader>

                <CardTitle className="flex items-center gap-2">

                    <Sparkles className="h-5 w-5 text-primary" />

                    Amenities

                    <Badge variant="secondary">
                        {property.amenities.length}
                    </Badge>

                </CardTitle>

            </CardHeader>

            <CardContent>

                {property.amenities.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                        No amenities available.
                    </p>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                        {property.amenities.map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 rounded-xl border bg-muted/40 p-4 transition-all duration-300 hover:border-primary hover:bg-primary/5"
                            >

                                <div className="rounded-full bg-primary/10 p-2">

                                    <CheckCircle2 className="h-5 w-5 text-primary" />

                                </div>

                                <span className="font-medium">
                                    {item}
                                </span>

                            </div>
                        ))}

                    </div>
                )}

            </CardContent>

        </Card>
    );
}