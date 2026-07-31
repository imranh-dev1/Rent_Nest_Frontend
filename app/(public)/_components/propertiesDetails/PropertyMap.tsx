import { MapPin, Navigation } from "lucide-react";

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

export default function PropertyMap({
    property,
}: Props) {
    const address = `${property.address}, ${property.city}`;

    const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
        address
    )}&output=embed`;

    return (
        <Card className="px-6 py-8 shadow-sm">

            <CardHeader>

                <CardTitle className="flex items-center gap-2">

                    <MapPin className="h-5 w-5 text-primary" />

                    Property Location

                </CardTitle>

            </CardHeader>

            <Separator />

            <CardContent className="space-y-6 pt-6">

                {/* Map */}

                <div className="overflow-hidden  border">

                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="400"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border-0"
                    />

                </div>

                {/* Address */}

                <div className=" border bg-muted/30 p-5">

                    <div className="flex items-start gap-3">

                        <Navigation className="mt-1 h-5 w-5 text-primary" />

                        <div>

                            <h3 className="font-semibold">
                                Property Address
                            </h3>

                            <p className="mt-1 text-sm text-muted-foreground">
                                {property.address}
                            </p>

                            <p className="text-sm text-muted-foreground">
                                {property.city}
                            </p>

                        </div>

                    </div>

                </div>

            </CardContent>

        </Card>
    );
}