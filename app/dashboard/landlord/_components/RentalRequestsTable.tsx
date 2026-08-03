"use client";

import Image from "next/image";
import { Eye, Check, X } from "lucide-react";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface RentalRequest {
    id: string;
    moveInDate: string;
    status: "PENDING" | "APPROVED" | "REJECTED" | "ACTIVE" | "COMPLETED";

    property: {
        title: string;
        rentAmount: number;
        city: string;
        address: string;
        images: string[];
    };

    tenant: {
        name: string;
        email: string;
        profileImg?: string;
    };

    createdAt: string;
}

interface RentalRequestsTableProps {
    requests: RentalRequest[];
}

export default function RentalRequestsTable({ requests, }: RentalRequestsTableProps) {

    // console.log(requests)

    return (
        <div className="overflow-hidden border py-4 px-6">
            <Table>

                <TableHeader>
                    <TableRow>
                        <TableHead>Property</TableHead>
                        <TableHead>Tenant</TableHead>
                        <TableHead>Move In</TableHead>
                        <TableHead>Rent</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Requested</TableHead>
                        <TableHead className="text-right">
                            Actions
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>

                    {requests.map((request) => (
                        <TableRow key={request.id}>

                            {/* Property */}

                            <TableCell>
                                <div className="flex items-center gap-4">

                                    <div className="relative h-16 w-16 overflow-hidden">
                                        <Image
                                            src={request.property.images[0]}
                                            alt={request.property.title}
                                            fill
                                            sizes="64px"
                                            className="object-cover"
                                        />
                                    </div>

                                    <div>
                                        <h4 className="font-semibold">
                                            {request.property.title}
                                        </h4>

                                        <p className="text-sm text-muted-foreground">
                                            {request?.property?.city}, {request?.property?.address}
                                        </p>
                                    </div>

                                </div>
                            </TableCell>

                            {/* Tenant */}

                            <TableCell>

                                <div>
                                    <h4 className="font-semibold">
                                        {request.tenant.name}
                                    </h4>

                                    <p className="text-sm text-muted-foreground">
                                        {request.tenant.email}
                                    </p>
                                </div>

                            </TableCell>

                            {/* Move In */}

                            <TableCell>
                                {new Date(request.moveInDate).toLocaleDateString()}
                            </TableCell>

                            {/* Rent */}

                            <TableCell>
                                ৳{request.property.rentAmount.toLocaleString()}
                            </TableCell>

                            {/* Status */}

                            <TableCell>

                                <Badge className="text-primary"
                                    variant={
                                        request.status === "ACTIVE"
                                            ? "outline"
                                            : request.status === "APPROVED"
                                                ? "default"
                                                : "destructive"
                                    }
                                >
                                    {request.status}
                                </Badge>

                            </TableCell>

                            {/* Requested */}

                            <TableCell>
                                {new Date(request.createdAt).toLocaleDateString()}
                            </TableCell>

                            {/* Actions */}

                            <TableCell className="text-right">

                                <div className="flex justify-end gap-2">

                                    <Button
                                        asChild
                                        size="icon"
                                        variant="outline"
                                    >
                                        <Link
                                            href={`/dashboard/landlord/requests/${request.id}`}
                                        >
                                            <Eye className="h-4 w-4" />
                                        </Link>
                                    </Button>

                                    <Button
                                        size="icon"
                                        variant="default"
                                        disabled={request.status !== "PENDING"}
                                    >
                                        <Check className="h-4 w-4" />
                                    </Button>

                                    <Button
                                        size="icon"
                                        variant="destructive"
                                        disabled={request.status !== "PENDING"}
                                    >
                                        <X className="h-4 w-4" />
                                    </Button>

                                </div>

                            </TableCell>

                        </TableRow>
                    ))}

                </TableBody>

            </Table>
        </div>
    );
}