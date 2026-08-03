import Link from "next/link";
import { CreditCard, Receipt, CheckCircle2, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getMyPayments } from "../../_actions/payments/getMyPayments";

export default async function TenantPaymentsPage() {
    const { data: payments } = await getMyPayments();

    // console.log(payments);

    return (
        <div className="space-y-8">
            <section className="space-y-2">
                <h1 className="text-3xl font-bold">
                    Payment History
                </h1>

                <p className="text-muted-foreground">
                    View your rent payment history and transaction status.
                </p>
            </section>

            <section className="grid gap-6 md:grid-cols-3">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">
                            Total Payments
                        </CardTitle>

                        <CreditCard className="h-5 w-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <h2 className="text-3xl font-bold">
                            {payments.length}
                        </h2>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Completed transactions
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">
                            Paid Amount
                        </CardTitle>

                        <CheckCircle2 className="h-5 w-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <h2 className="text-3xl font-bold">
                            ৳ {payments.reduce((acc: number, payment: any) => acc + payment.amount, 0).toLocaleString()}
                        </h2>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Total rent paid
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">
                            Pending
                        </CardTitle>

                        <Clock className="h-5 w-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <h2 className="text-3xl font-bold">
                            0
                        </h2>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Pending payments
                        </p>
                    </CardContent>
                </Card>
            </section>

            <Card>
                <CardHeader>
                    <CardTitle>Payment History</CardTitle>

                    <CardDescription>
                        All rent payment records.
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Property</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Method</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Paid On</TableHead>
                                <TableHead className="text-right">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {payments.length ? (
                                payments.map((payment: any) => (
                                    <TableRow key={payment.id}>
                                        <TableCell>
                                            {payment.rentalRequest.property.title}
                                        </TableCell>

                                        <TableCell>
                                            ৳ {payment.amount.toLocaleString()}
                                        </TableCell>

                                        <TableCell>
                                            {payment.method}
                                        </TableCell>

                                        <TableCell>
                                            <Badge>
                                                {payment.status}
                                            </Badge>
                                        </TableCell>

                                        <TableCell>
                                            {new Date(
                                                payment.createdAt
                                            ).toLocaleDateString("en-GB")}
                                        </TableCell>

                                        <TableCell className="text-right">
                                            <Button
                                                asChild
                                                variant="outline"
                                                size="sm">
                                                <Link
                                                    href={`/dashboard/tenant/payments/${payment.id}`}>
                                                    <Receipt className="mr-2 h-4 w-4" />
                                                    Receipt
                                                </Link>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={6}
                                        className="py-10 text-center text-muted-foreground">
                                        No payment history available.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}