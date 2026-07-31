"use client";

import Link from "next/link";
import {
    BadgeCheck,
    Heart,
    Phone,
    ShieldCheck,
    Wallet,
} from "lucide-react";

import { IProperty } from "@/types/property";

import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface Props {
    property: IProperty;
}

export default function RequestCard({
    property,
}: Props) {
    return (
        <Card className="px-6 py-8 border shadow-lg">

            <CardHeader className="space-y-4">

                {/* Price */}

                <div>

                    <h2 className="text-4xl font-bold text-primary">
                        ৳ {property.rentAmount.toLocaleString()}
                    </h2>

                    <p className="text-muted-foreground">
                        Per Month
                    </p>

                </div>

                {/* Availability */}

                <Badge
                    className={
                        property.availability === "AVAILABLE"
                            ? "w-fit bg-emerald-600 hover:bg-emerald-700"
                            : "w-fit bg-red-600 hover:bg-red-700"
                    }
                >
                    {property.availability}
                </Badge>

            </CardHeader>

            <Separator />

            <CardContent className="space-y-6 pt-6">

                {/* Info */}

                <div className="space-y-4">

                    <div className="flex items-center gap-3">

                        <BadgeCheck className="h-5 w-5 text-primary" />

                        <span className="text-sm">
                            Verified Property
                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <ShieldCheck className="h-5 w-5 text-primary" />

                        <span className="text-sm">
                            Secure Rental Process
                        </span>

                    </div>

                    <div className="flex items-center gap-3">

                        <Wallet className="h-5 w-5 text-primary" />

                        <span className="text-sm">
                            Online Payment Supported
                        </span>

                    </div>

                </div>

                <Separator />

                {/* Actions */}

                <div className="space-y-3">

                    <Button
                        className="w-full"
                        size="lg"
                        disabled={property.availability === "RENTED"}
                    >
                        {property.availability === "AVAILABLE"
                            ? "Request Rental"
                            : "Property Already Rented"}
                    </Button>

                    <Button
                        variant="outline"
                        className="w-full"
                    >
                        <Heart className="mr-2 h-4 w-4" />

                        Save Property
                    </Button>

                    <Button
                        asChild
                        variant="secondary"
                        className="w-full"
                    >
                        <Link
                            href={`tel:${property.landlord.phone ?? ""}`}
                        >
                            <Phone className="mr-2 h-4 w-4" />

                            Contact Owner
                        </Link>
                    </Button>

                </div>

                <Separator />

                {/* Footer */}

                <div className="space-y-2 text-sm text-muted-foreground">

                    <p>
                        ✔ No hidden charges
                    </p>

                    <p>
                        ✔ Verified landlord
                    </p>

                    <p>
                        ✔ Secure rental request
                    </p>

                </div>

            </CardContent>

        </Card>
    );
}