import Image from "next/image";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { getRentalRequestById } from "@/services/getRentalRequestById";
import CancelRequestButton from "../../_components/CancelRequestButton";

const statusVariant = {
    ACTIVE: "secondary",
    APPROVED: "default",
    REJECTED: "destructive",
    CANCELLED: "outline",
} as const;

interface Props {
    params: Promise<{
        id: string;
    }>;
}

export default async function TenantRequestDetails({
    params,
}: Props) {
    const { id } = await params;

    const { data: request } = await getRentalRequestById(id);


    return (
        <div className="space-y-6">

            {/* Header */}

            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-3xl font-bold">
                        Rental Request
                    </h1>

                    <p className="text-muted-foreground">
                        Request ID: {request.id}
                    </p>
                </div>

                <Badge
                    variant={
                        statusVariant[
                        request.status as keyof typeof statusVariant
                        ]
                    }
                >
                    {request.status}
                </Badge>

            </div>

            {/* Property */}

            <Card>

                <CardHeader>
                    <CardTitle>
                        Property Information
                    </CardTitle>
                </CardHeader>

                <CardContent>

                    <div className="grid gap-6 md:grid-cols-2">

                        <Image
                            src={request.property.images[0]}
                            alt={request.property.title}
                            width={700}
                            height={450}
                            className="h-72 w-full rounded-lg object-cover"
                        />

                        <div className="space-y-3">

                            <h2 className="text-2xl font-bold">
                                {request.property.title}
                            </h2>

                            <p>{request.property.address}</p>

                            <p>{request.property.city}</p>

                            <p className="font-semibold text-primary">
                                ৳ {request.property.rentAmount}/month
                            </p>

                            <div className="grid grid-cols-3 gap-3">

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Bedrooms
                                    </p>

                                    <p>{request.property.bedrooms}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Bathrooms
                                    </p>

                                    <p>{request.property.bathrooms}</p>
                                </div>

                                <div>
                                    <p className="text-sm text-muted-foreground">
                                        Area
                                    </p>

                                    <p>{request.property.area} sqft</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </CardContent>

            </Card>

            {/* Landlord */}

            <Card>

                <CardHeader>
                    <CardTitle>
                        Landlord Information
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-2">

                    <p>
                        <strong>Name:</strong>{" "}
                        {request.property.landlord.name}
                    </p>

                    <p>
                        <strong>Email:</strong>{" "}
                        {request.property.landlord.email}
                    </p>

                </CardContent>

            </Card>

            {/* Request */}

            <Card>

                <CardHeader>
                    <CardTitle>
                        Request Details
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-3">

                    <p>
                        <strong>Move In:</strong>{" "}
                        {new Date(
                            request.moveInDate
                        ).toLocaleDateString()}
                    </p>

                    <p>
                        <strong>Lease:</strong>{" "}
                        {request.leaseMonths} Months
                    </p>

                    <p>
                        <strong>Created:</strong>{" "}
                        {new Date(
                            request.createdAt
                        ).toLocaleDateString()}
                    </p>

                    <div>

                        <p className="font-semibold mb-2">
                            Message
                        </p>

                        <p className="rounded-md bg-muted p-4">
                            {request.message}
                        </p>

                    </div>

                </CardContent>

            </Card>

            {/* Payment */}

            {request.payment && (
                <Card>

                    <CardHeader>
                        <CardTitle>
                            Payment Information
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-2">

                        <p>
                            <strong>Status:</strong>{" "}
                            {request.payment.status}
                        </p>

                        <p>
                            <strong>Amount:</strong> ৳
                            {request.payment.amount}
                        </p>

                        <p>
                            <strong>Provider:</strong>{" "}
                            {request.payment.provider}
                        </p>

                        <p>
                            <strong>Method:</strong>{" "}
                            {request.payment.paymentMethod}
                        </p>

                        <p>
                            <strong>Transaction:</strong>{" "}
                            {request.payment.transactionId}
                        </p>

                    </CardContent>

                </Card>
            )}

            {request.status === "ACTIVE" && (
                <div className="flex justify-end">

                    <CancelRequestButton
                        requestId={request.id}
                    />

                </div>
            )}

        </div>
    );
}