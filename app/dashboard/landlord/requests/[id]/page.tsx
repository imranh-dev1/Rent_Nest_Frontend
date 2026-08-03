import Image from "next/image";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    Calendar,
    MapPin,
    BedDouble,
    Bath,
    Maximize,
    Wallet,
    User,
    Mail,
    CreditCard,
} from "lucide-react";

import { getRentalRequestById } from "@/services/getRentalRequestById";

export default async function RequestDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const {data} = await getRentalRequestById(id);

    return (
        <div className="space-y-6">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">
                        Rental Request Details
                    </h1>

                    <p className="text-muted-foreground">
                        View complete request information.
                    </p>
                </div>

                <Badge
                    variant={
                        data.status === "APPROVED"
                            ? "default"
                            : data.status === "REJECTED"
                                ? "destructive"
                                : "secondary"
                    }
                >
                    {data.status}
                </Badge>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">

                {/* Left */}
                <div className="space-y-6 lg:col-span-2">

                    {/* Property */}
                    <Card>

                        <div className="relative h-80 w-full">

                            <Image
                                src={data.property.images[0]}
                                alt={data.property.title}
                                fill
                                className="object-cover"
                                sizes="100vw"
                            />

                        </div>

                        <CardContent className="space-y-5 p-6">

                            <div>
                                <h2 className="text-2xl font-bold">
                                    {data.property.title}
                                </h2>

                                <p className="mt-2 text-muted-foreground">
                                    {data.property.description}
                                </p>
                            </div>

                            <Separator />

                            <div className="grid gap-4 md:grid-cols-2">

                                <div className="flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    {data.property.address},{" "}
                                    {data.property.city}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Wallet className="h-5 w-5 text-primary" />
                                    ৳
                                    {data.property.rentAmount.toLocaleString()}
                                    /month
                                </div>

                                <div className="flex items-center gap-2">
                                    <BedDouble className="h-5 w-5 text-primary" />
                                    {data.property.bedrooms} Bedrooms
                                </div>

                                <div className="flex items-center gap-2">
                                    <Bath className="h-5 w-5 text-primary" />
                                    {data.property.bathrooms} Bathrooms
                                </div>

                                <div className="flex items-center gap-2">
                                    <Maximize className="h-5 w-5 text-primary" />
                                    {data.property.area} Sq Ft
                                </div>

                            </div>

                            <Separator />

                            <div>

                                <h3 className="mb-4 text-lg font-semibold">
                                    Amenities
                                </h3>

                                <div className="flex flex-wrap gap-2">

                                    {data.property.amenities.map(
                                        (item: string) => (
                                            <Badge
                                                key={item}
                                                variant="outline"
                                            >
                                                {item}
                                            </Badge>
                                        )
                                    )}

                                </div>

                            </div>

                        </CardContent>

                    </Card>

                    {/* Request */}
                    <Card>

                        <CardHeader>
                            <CardTitle>
                                Rental Request
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">

                            <div className="flex items-center gap-2">
                                <Calendar className="h-5 w-5 text-primary" />
                                Move In:
                                {new Date(
                                    data.moveInDate
                                ).toLocaleDateString()}
                            </div>

                            <div>
                                <strong>
                                    Lease Duration:
                                </strong>{" "}
                                {data.leaseMonths} Months
                            </div>

                            <div>

                                <strong>
                                    Message
                                </strong>

                                <p className="mt-2 rounded-md bg-muted p-4 text-muted-foreground">
                                    {data.message}
                                </p>

                            </div>

                        </CardContent>

                    </Card>

                </div>

                {/* Right */}
                <div className="space-y-6">

                    {/* Tenant */}

                    <Card>

                        <CardHeader>
                            <CardTitle>
                                Tenant
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">

                            <div className="flex items-center gap-2">
                                <User className="h-5 w-5 text-primary" />
                                {data.tenant.name}
                            </div>

                            <div className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-primary" />
                                {data.tenant.email}
                            </div>

                        </CardContent>

                    </Card>

                    {/* Landlord */}

                    <Card>

                        <CardHeader>
                            <CardTitle>
                                Landlord
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">

                            <div className="flex items-center gap-2">
                                <User className="h-5 w-5 text-primary" />
                                {data.property.landlord.name}
                            </div>

                            <div className="flex items-center gap-2">
                                <Mail className="h-5 w-5 text-primary" />
                                {data.property.landlord.email}
                            </div>

                        </CardContent>

                    </Card>

                    {/* Payment */}

                    <Card>

                        <CardHeader>
                            <CardTitle>
                                Payment
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="space-y-4">

                            <div className="flex items-center justify-between">

                                <span>Amount</span>

                                <span className="font-semibold">
                                    ৳
                                    {data.payment.amount.toLocaleString()}
                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <span>Status</span>

                                <Badge
                                    variant={
                                        data.payment.status ===
                                            "COMPLETED"
                                            ? "default"
                                            : "secondary"
                                    }
                                >
                                    {data.payment.status}
                                </Badge>

                            </div>

                            <div className="flex items-center justify-between">

                                <span>Provider</span>

                                <span>
                                    {data.payment.provider}
                                </span>

                            </div>

                            <div className="flex items-center justify-between">

                                <span>Method</span>

                                <span className="capitalize">
                                    {data.payment.paymentMethod}
                                </span>

                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">

                                <CreditCard className="h-4 w-4" />

                                {data.payment.transactionId}

                            </div>

                        </CardContent>

                    </Card>

                </div>

            </div>

        </div>
    );
}