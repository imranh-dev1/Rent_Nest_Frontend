import {
    Building2,
    DollarSign,
    Eye,
    Home,
    Users,
} from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getMyProperties } from "@/services/getMyProperties";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getLandlordRentalRequests } from "@/services/getLandlordRentalRequets";


type StatusVariant = Record<string, "default" | "secondary" | "destructive" | "outline">;

const statusVariant: StatusVariant = {};

export default async function DashboardLandlord() {
    const { data: properties } = await getMyProperties();
    const { data: rentalRequests } = await getLandlordRentalRequests();
    console.log(rentalRequests);

    return (
        <div className="space-y-8">

            <section className="relative overflow-hidden border bg-linear-to-r from-primary/10 via-background to-primary/5 p-8">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative space-y-3">

                    <h2 className="text-3xl font-bold">
                        Welcome back.
                    </h2>

                    <p className="max-w-2xl text-muted-foreground">
                        Keep track of your properties, manage incoming rental requests,
                        monitor monthly earnings, and grow your rental business effortlessly.
                    </p>
                </div>
            </section>

            {/* Quick Overview */}
            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">
                            Properties
                        </CardTitle>

                        <Building2 className="h-5 w-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <h3 className="text-3xl font-bold">{properties.length ? properties.length : 0}</h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Total listed properties
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">
                            Pending Requests
                        </CardTitle>

                        <Users className="h-5 w-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <h3 className="text-3xl font-bold">{properties.filter((p: any) => p.status === "pending").length || 0}</h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Waiting for approval
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">
                            Monthly Earnings
                        </CardTitle>

                        <DollarSign className="h-5 w-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <h3 className="text-3xl font-bold">৳ {properties.reduce((total: number, property: any) => total + (property.monthlyRent || 0), 0).toLocaleString()}</h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            This month's income
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">
                            Available Units
                        </CardTitle>

                        <Home className="h-5 w-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <h3 className="text-3xl font-bold">{properties.filter((p: any) => p.status === "available").length || 0}</h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Ready for rent
                        </p>
                    </CardContent>
                </Card>
            </section>

            {/* Placeholder Sections */}
            <section className="grid gap-6 xl:grid-cols-3">
                <Card className="xl:col-span-2">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <div>
                            <CardTitle>Recent Rental Requests</CardTitle>
                            <CardDescription>
                                Review and manage your latest tenant requests.
                            </CardDescription>
                        </div>

                        <Button asChild>
                            <Link href="/dashboard/landlord/requests">
                                View All
                            </Link>
                        </Button>
                    </CardHeader>

                    <CardContent className="p-3">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Tenant</TableHead>
                                    <TableHead>Property</TableHead>
                                    <TableHead>Move In</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Action</TableHead>
                                </TableRow>
                            </TableHeader>

                            <TableBody>
                                {rentalRequests.map((request: any) => (
                                    <TableRow key={request.id}>
                                        <TableCell className="font-medium">
                                            {request.tenant?.name}
                                        </TableCell>

                                        <TableCell>
                                            {request.property?.title}
                                        </TableCell>

                                        <TableCell>
                                            {new Date(request?.moveInDate).toLocaleDateString("en-GB", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </TableCell>

                                        <TableCell>
                                            <Badge variant={statusVariant[request?.status]}>
                                                {request?.status}
                                            </Badge>
                                        </TableCell>

                                        <TableCell className="text-right">
                                            <Button
                                                asChild
                                                size="sm"
                                                variant="ghost"
                                            >
                                                <Link href={`/dashboard/landlord/requests/${request.id}`}>
                                                    <Eye className="mr-2 h-4 w-4" />
                                                    View
                                                </Link>
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                        <div className="rounded-lg border p-4">
                            <h4 className="font-semibold">
                                Add New Property
                            </h4>

                            <p className="mt-1 text-sm text-muted-foreground">
                                List a new rental property.
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h4 className="font-semibold">
                                View Requests
                            </h4>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Approve or reject tenant requests.
                            </p>
                        </div>

                        <div className="rounded-lg border p-4">
                            <h4 className="font-semibold">
                                Earnings Report
                            </h4>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Review your monthly income.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </div>
    );
}