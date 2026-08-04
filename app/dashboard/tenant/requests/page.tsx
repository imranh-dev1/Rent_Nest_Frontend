import Link from "next/link";
import { Eye } from "lucide-react";

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
import { getMyRentalRequests } from "../../_actions/rentalRequests/getMyRentalRequests";

const statusVariant: Record<
    string,
    "default" | "secondary" | "destructive" | "outline"
> = {
    ACTIVE: "secondary",
    APPROVED: "default",
    REJECTED: "destructive",
    CANCELLED: "outline",
};

export default async function TenantRequestsPage() {
    const { data: requests } = await getMyRentalRequests();

    // console.log(requests)

    return (
        <div className="space-y-6">

            <div>
                <h1 className="text-3xl font-bold">
                    My Rental Requests
                </h1>

                <p className="text-muted-foreground">
                    View and track all of your rental applications.
                </p>
            </div>

            <Card>

                <CardHeader>
                    <CardTitle>
                        Rental Requests
                    </CardTitle>

                    <CardDescription>
                        Total Requests: {requests.length}
                    </CardDescription>
                </CardHeader>

                <CardContent>

                    <Table>

                        <TableHeader>
                            <TableRow>
                                <TableHead>Property</TableHead>
                                <TableHead>Landlord</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Rent</TableHead>
                                <TableHead>Move In</TableHead>
                                <TableHead>Lease</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Requested On</TableHead>
                                <TableHead className="text-right">
                                    Action
                                </TableHead>
                            </TableRow>
                        </TableHeader>

                        <TableBody>
                            {requests.length > 0 ? (
                                requests.map((request: any) => (
                                    <TableRow key={request.id}>

                                        <TableCell className="font-medium">
                                            {request.property?.title}
                                        </TableCell>

                                        <TableCell>
                                            {request.property?.landlord?.name}
                                        </TableCell>

                                        <TableCell>
                                            {request.property?.city}
                                        </TableCell>

                                        <TableCell>
                                            ৳ {request.property?.rentAmount?.toLocaleString()}
                                        </TableCell>

                                        <TableCell>
                                            {new Date(request.moveInDate).toLocaleDateString(
                                                "en-GB",
                                                {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                }
                                            )}
                                        </TableCell>

                                        <TableCell>
                                            {request.leaseMonths} Months
                                        </TableCell>

                                        <TableCell>
                                            <Badge
                                                variant={
                                                    statusVariant[
                                                    request.status as keyof typeof statusVariant
                                                    ]
                                                }
                                            >
                                                {request.status}
                                            </Badge>
                                        </TableCell>
                                        

                                        <TableCell>
                                            {new Date(request.createdAt).toLocaleDateString(
                                                "en-GB",
                                                {
                                                    day: "2-digit",
                                                    month: "short",
                                                    year: "numeric",
                                                }
                                            )}
                                        </TableCell>

                                        <TableCell className="text-right">
                                            <Button
                                                asChild
                                                size="sm"
                                                variant="outline"
                                            >
                                                <Link
                                                    href={`/dashboard/tenant/requests/${request.id}`}
                                                >
                                                    <Eye className="mr-2 h-4 w-4" />
                                                    View
                                                </Link>
                                            </Button>
                                        </TableCell>

                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={9}
                                        className="py-8 text-center text-muted-foreground"
                                    >
                                        No rental requests found.
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