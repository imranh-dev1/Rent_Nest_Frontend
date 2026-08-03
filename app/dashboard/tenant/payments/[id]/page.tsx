import Image from "next/image";
import Link from "next/link";
import {
    ArrowLeft,
    Calendar,
    CreditCard,
    Home,
    MapPin,
    Receipt,
    User,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { getPaymentById } from "@/app/dashboard/_actions/payments/getPaymentById";


export default async function PaymentDetailsPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const { data: payment } = await getPaymentById(id);
    console.log(payment)

    return (
        <div className="space-y-6">

            <Button asChild variant="outline">
                <Link href="/dashboard/tenant/payments">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Payments
                </Link>
            </Button>

            <Card>

                <CardHeader>
                    <CardTitle>
                        Payment Details
                    </CardTitle>
                </CardHeader>

                <CardContent className="space-y-8">

                    <Image
                        src={payment?.rentalRequest.property.images[0]}
                        alt={payment.rentalRequest.property.title}
                        width={1200}
                        height={400}
                        className="h-72 w-full rounded-lg object-cover"
                    />

                    <div className="grid gap-6 md:grid-cols-2">

                        <Card>
                            <CardHeader>
                                <CardTitle>Property Information</CardTitle>
                            </CardHeader>

                            <CardContent className="space-y-4">

                                <div className="flex items-center gap-2">
                                    <Home className="h-4 w-4" />
                                    {payment?.rentalRequest.property.title}
                                </div>

                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    {payment?.rentalRequest.property.address}, {payment.rentalRequest.property.city}
                                </div>

                            </CardContent>
                        </Card>

                    </div>

                    <Card>

                        <CardHeader>
                            <CardTitle>
                                Transaction Information
                            </CardTitle>
                        </CardHeader>

                        <CardContent className="grid gap-4 md:grid-cols-2">

                            <div>
                                <p className="text-muted-foreground">
                                    Amount
                                </p>

                                <p className="text-2xl font-bold">
                                    ৳ {payment.amount.toLocaleString()}
                                </p>
                            </div>

                            <div>
                                <p className="text-muted-foreground">
                                    Status
                                </p>

                                <Badge>
                                    {payment.status}
                                </Badge>
                            </div>

                            <div>
                                <p className="text-muted-foreground">
                                    Payment Method
                                </p>

                                <div className="flex items-center gap-2">
                                    <CreditCard className="h-4 w-4" />
                                    {payment.paymentMethod}
                                </div>
                            </div>

                            <div>
                                <p className="text-muted-foreground">
                                    Transaction ID
                                </p>

                                <div className="flex items-center gap-2">
                                    <Receipt className="h-4 w-4" />
                                    {payment.transactionId}
                                </div>
                            </div>

                            <div>
                                <p className="text-muted-foreground">
                                    Payment Date
                                </p>

                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4" />
                                    {new Date(payment.createdAt).toLocaleDateString("en-GB")}
                                </div>
                            </div>

                        </CardContent>

                    </Card>

                </CardContent>

            </Card>

        </div>
    );
}