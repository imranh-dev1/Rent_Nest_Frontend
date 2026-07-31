"use client";

import {
    Bath,
    BedDouble,
    Heart,
    MapPin,
    Maximize,
    Share2,
    User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { IProperty } from "@/types/property";

interface Props {
    property: IProperty;
}

export default function PropertyHeader({
    property,
}: Props) {
    return (
        <div className="space-y-6">

            {/* Top */}

            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">

                <div className="space-y-4">

                    {/* Badges */}

                    <div className="flex flex-wrap gap-3">

                        <Badge variant="secondary">
                            {property.category.name}
                        </Badge>

                        <Badge
                            className={
                                property.availability === "AVAILABLE"
                                    ? "bg-emerald-600 hover:bg-emerald-700"
                                    : "bg-red-600 hover:bg-red-700"
                            }
                        >
                            {property.availability}
                        </Badge>

                    </div>

                    {/* Title */}

                    <h1 className="text-4xl font-bold tracking-tight">
                        {property.title}
                    </h1>

                    {/* Address */}

                    <div className="flex items-center gap-2 text-muted-foreground">

                        <MapPin className="h-5 w-5 text-primary" />

                        <span>
                            {property.address}, {property.city}
                        </span>

                    </div>

                </div>

                {/* Actions */}

                <div className="flex items-center gap-3">

                    <Button
                        variant="outline"
                        size="icon"
                    >
                        <Heart className="h-5 w-5" />
                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                    >
                        <Share2 className="h-5 w-5" />
                    </Button>

                </div>

            </div>

            <Separator />

            {/* Price + Features */}

            <div className="grid gap-6 lg:grid-cols-2">

                <div>

                    <h2 className="text-4xl font-bold text-primary">

                        ৳ {property.rentAmount.toLocaleString()}

                        <span className="ml-2 text-lg font-normal text-muted-foreground">
                            /month
                        </span>

                    </h2>

                </div>

                <div className="grid grid-cols-2 gap-5 md:grid-cols-4">

                    <div className="flex items-center gap-2">

                        <BedDouble className="h-5 w-5 text-primary" />

                        <div>

                            <p className="font-semibold">
                                {property.bedrooms}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                Bedrooms
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-2">

                        <Bath className="h-5 w-5 text-primary" />

                        <div>

                            <p className="font-semibold">
                                {property.bathrooms}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                Bathrooms
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-2">

                        <Maximize className="h-5 w-5 text-primary" />

                        <div>

                            <p className="font-semibold">
                                {property.area}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                sqft
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-2">

                        <User className="h-5 w-5 text-primary" />

                        <div>

                            <p className="font-semibold">
                                {property.landlord.name}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                Landlord
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}