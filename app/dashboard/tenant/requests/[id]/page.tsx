import Image from "next/image";

import {
    Bath,
    Bed,
    CalendarDays,
    CreditCard,
    Mail,
    MapPin,
    MessageSquare,
    Ruler,
    User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
} from "@/components/ui/card";

import { getRentalRequestById } from "@/services/getRentalRequestById";
import CancelRequestButton from "../../_components/CancelRequestButton";
import CreateReviewDialog from "@/app/dashboard/_components/review/CreateReviewsDialog";
import { getReviews } from "@/app/dashboard/_actions/reviews/getReviews";

const statusStyles = {
    ACTIVE:
        "bg-primary text-primary-foreground border-primary",
    APPROVED:
        "bg-green-100 text-green-700 border-green-200",
    REJECTED:
        "bg-red-100 text-red-700 border-red-200",
    CANCELLED:
        "bg-gray-100 text-gray-700 border-gray-200",
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
    const { data: reviews } = await getReviews(request.propertyId);

    console.log(reviews)

    return (
        <div className="space-y-6">

            {/* Header */}

            <div className="flex flex-col gap-6 border bg-card p-6 shadow-sm md:flex-row md:items-center md:justify-between">

                <div>

                    <h1 className="text-3xl font-bold">
                        Rental Request
                    </h1>
                    <Badge
                        className={statusStyles[request.status as keyof typeof statusStyles]}>
                        {request.status}
                    </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-3">

                    <CreateReviewDialog propertyId={request.propertyId} />

                    <CancelRequestButton status={request.status} requestId={request.id} />

                </div>

            </div>

            {/* Property */}
            <Card className="overflow-hidden rounded-2xl border shadow-sm">

                <CardHeader>

                    <CardTitle>
                        Property Information
                    </CardTitle>

                    <CardDescription>
                        Details about the rental property.
                    </CardDescription>

                </CardHeader>

                <CardContent>

                    <div className="grid gap-8 lg:grid-cols-2">

                        {/* Property Image */}

                        <div className="relative h-72 overflow-hidden rounded-xl lg:h-full">

                            <Image
                                src={
                                    request.property.images?.[0] ||
                                    "/placeholder-property.jpg"
                                }
                                alt={request.property.title}
                                fill
                                className="object-cover transition duration-300 hover:scale-105"
                            />

                        </div>

                        {/* Property Details */}

                        <div className="space-y-6">

                            <div>

                                <h2 className="text-2xl font-bold">
                                    {request.property.title}
                                </h2>

                                <div className="mt-3 flex items-center gap-2 text-muted-foreground">

                                    <MapPin className="h-4 w-4" />

                                    <span>
                                        {request.property.address},
                                        {" "}
                                        {request.property.city}
                                    </span>

                                </div>

                                <p className="mt-4 text-3xl font-bold text-primary">
                                    ৳ {request.property.rentAmount}
                                    <span className="ml-1 text-base font-normal text-muted-foreground">
                                        /month
                                    </span>
                                </p>

                            </div>

                            <div className="grid grid-cols-3 gap-4">

                                <Card>

                                    <CardContent className="flex flex-col items-center justify-center p-5">

                                        <Bed className="mb-2 h-6 w-6 text-primary" />

                                        <p className="text-2xl font-bold">
                                            {request.property.bedrooms}
                                        </p>

                                        <p className="text-sm text-muted-foreground">
                                            Bedrooms
                                        </p>

                                    </CardContent>

                                </Card>

                                <Card>

                                    <CardContent className="flex flex-col items-center justify-center p-5">

                                        <Bath className="mb-2 h-6 w-6 text-primary" />

                                        <p className="text-2xl font-bold">
                                            {request.property.bathrooms}
                                        </p>

                                        <p className="text-sm text-muted-foreground">
                                            Bathrooms
                                        </p>

                                    </CardContent>

                                </Card>

                                <Card>

                                    <CardContent className="flex flex-col items-center justify-center p-5">

                                        <Ruler className="mb-2 h-6 w-6 text-primary" />

                                        <p className="text-2xl font-bold">
                                            {request.property.area}
                                        </p>

                                        <p className="text-sm text-muted-foreground">
                                            Sq Ft
                                        </p>

                                    </CardContent>

                                </Card>

                            </div>

                        </div>

                    </div>

                </CardContent>

            </Card>
            {/* Landlord */}

            <Card className="rounded-2xl border shadow-sm">

                <CardHeader>

                    <CardTitle>
                        Landlord Information
                    </CardTitle>

                    <CardDescription>
                        Property owner contact information.
                    </CardDescription>

                </CardHeader>

                <CardContent className="space-y-5">

                    <div className="flex items-center gap-3">

                        <div className="rounded-full bg-primary/10 p-3">

                            <User className="h-5 w-5 text-primary" />

                        </div>

                        <div>

                            <p className="text-sm text-muted-foreground">
                                Name
                            </p>

                            <p className="font-semibold">
                                {request.property.landlord.name}
                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-3">

                        <div className="rounded-full bg-primary/10 p-3">

                            <Mail className="h-5 w-5 text-primary" />

                        </div>

                        <div>

                            <p className="text-sm text-muted-foreground">
                                Email
                            </p>

                            <p className="font-semibold">
                                {request.property.landlord.email}
                            </p>

                        </div>

                    </div>

                </CardContent>

            </Card>
            {/* Request */}

            <Card className="rounded-2xl border shadow-sm">

                <CardHeader>

                    <CardTitle>
                        Request Details
                    </CardTitle>

                    <CardDescription>
                        Information submitted with this rental request.
                    </CardDescription>

                </CardHeader>

                <CardContent className="space-y-6">

                    <div className="grid gap-5 md:grid-cols-3">

                        <Card>

                            <CardContent className="flex items-center gap-4 p-5">

                                <CalendarDays className="h-10 w-10 rounded-lg bg-primary/10 p-2 text-primary" />

                                <div>

                                    <p className="text-sm text-muted-foreground">
                                        Move In Date
                                    </p>

                                    <p className="font-semibold">
                                        {new Date(request.moveInDate).toLocaleDateString()}
                                    </p>

                                </div>

                            </CardContent>

                        </Card>

                        <Card>

                            <CardContent className="flex items-center gap-4 p-5">

                                <CalendarDays className="h-10 w-10 rounded-lg bg-primary/10 p-2 text-primary" />

                                <div>

                                    <p className="text-sm text-muted-foreground">
                                        Lease Duration
                                    </p>

                                    <p className="font-semibold">
                                        {request.leaseMonths} Months
                                    </p>

                                </div>

                            </CardContent>

                        </Card>

                        <Card>

                            <CardContent className="flex items-center gap-4 p-5">

                                <CalendarDays className="h-10 w-10 rounded-lg bg-primary/10 p-2 text-primary" />

                                <div>

                                    <p className="text-sm text-muted-foreground">
                                        Requested On
                                    </p>

                                    <p className="font-semibold">
                                        {new Date(request.createdAt).toLocaleDateString()}
                                    </p>

                                </div>

                            </CardContent>

                        </Card>

                    </div>

                    <div>

                        <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold">

                            <MessageSquare className="h-5 w-5 text-primary" />

                            Applicant Message

                        </h3>

                        <div className="rounded-xl border bg-muted/40 p-5 leading-7">

                            {request.message || "No message provided."}

                        </div>

                    </div>

                </CardContent>

            </Card>

            {/* Payment */}

            {request.payment && (

                <Card className="rounded-2xl border shadow-sm">

                    <CardHeader>

                        <CardTitle>
                            Payment Information
                        </CardTitle>

                        <CardDescription>
                            Payment details for this rental request.
                        </CardDescription>

                    </CardHeader>

                    <CardContent>

                        <div className="grid gap-4 md:grid-cols-2">

                            <Card>

                                <CardContent className="flex items-center gap-4 p-5">

                                    <CreditCard className="h-10 w-10 rounded-lg bg-primary/10 p-2 text-primary" />

                                    <div>

                                        <p className="text-sm text-muted-foreground">
                                            Payment Status
                                        </p>

                                        <p className="font-semibold">
                                            {request.payment.status}
                                        </p>

                                    </div>

                                </CardContent>

                            </Card>

                            <Card>

                                <CardContent className="flex items-center gap-4 p-5">

                                    <CreditCard className="h-10 w-10 rounded-lg bg-primary/10 p-2 text-primary" />

                                    <div>

                                        <p className="text-sm text-muted-foreground">
                                            Amount
                                        </p>

                                        <p className="font-semibold">
                                            ৳ {request.payment.amount}
                                        </p>

                                    </div>

                                </CardContent>

                            </Card>

                            <Card>

                                <CardContent className="flex items-center gap-4 p-5">

                                    <CreditCard className="h-10 w-10 rounded-lg bg-primary/10 p-2 text-primary" />

                                    <div>

                                        <p className="text-sm text-muted-foreground">
                                            Provider
                                        </p>

                                        <p className="font-semibold">
                                            {request.payment.provider}
                                        </p>

                                    </div>

                                </CardContent>

                            </Card>

                            <Card>

                                <CardContent className="flex items-center gap-4 p-5">

                                    <CreditCard className="h-10 w-10 rounded-lg bg-primary/10 p-2 text-primary" />

                                    <div>

                                        <p className="text-sm text-muted-foreground">
                                            Payment Method
                                        </p>

                                        <p className="font-semibold">
                                            {request.payment.paymentMethod}
                                        </p>

                                    </div>

                                </CardContent>

                            </Card>

                        </div>

                        <div className="mt-6 rounded-xl border bg-muted/40 p-5">

                            <p className="text-sm text-muted-foreground">
                                Transaction ID
                            </p>

                            <p className="mt-2 break-all font-mono text-sm font-semibold">
                                {request.payment.transactionId}
                            </p>

                        </div>

                    </CardContent>

                </Card>

            )}

            <Card className="rounded-2xl border shadow-sm">

                <CardHeader>

                    <CardTitle>
                        Comments
                    </CardTitle>

                    <CardDescription>
                        Discussion between tenant and landlord.
                    </CardDescription>

                </CardHeader>

                <CardContent>

                    {reviews.length > 0 ? (
                        <div className="space-y-5">
                            {reviews.map((comment: any) => (
                                <div
                                    key={comment.id}
                                    className="flex gap-4 rounded-xl border p-4"
                                >
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                        <User className="h-5 w-5 text-primary" />
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="font-semibold">
                                                    {comment.tenant.name}
                                                </h4>

                                                <p className="text-xs text-muted-foreground">
                                                    {new Date(comment.createdAt).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mt-3 leading-7">
                                            {comment.comment}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-xl border border-dashed py-10 text-center">
                            <MessageSquare className="mx-auto mb-3 h-10 w-10 text-muted-foreground" />

                            <h3 className="font-semibold">
                                No comments yet
                            </h3>

                            <p className="text-sm text-muted-foreground">
                                Start the conversation by adding the first comment.
                            </p>
                        </div>
                    )}

                </CardContent>

            </Card>

        </div>
    );
}