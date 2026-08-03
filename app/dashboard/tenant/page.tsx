import Link from "next/link";

import {
    CalendarDays,
    Clock,
    Eye,
    Home,
    Plus,
    Search,
    XCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getMyRentalRequests } from "../_actions/rentalRequests/getMyRentalRequests";


const statusVariant = { ACTIVE: "secondary", APPROVED: "default", REJECTED: "destructive", CANCELLED: "outline" } as const;

export default async function DashboardTenant() {
    const { data: rentalRequests } = await getMyRentalRequests();

    return (
        <div className="space-y-8">

            {/* Hero */}
            <section className="relative overflow-hidden border bg-linear-to-r from-primary/10 via-background to-primary/5 p-8">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

                <div className="relative space-y-3">
                    <h2 className="text-3xl font-bold">
                        Welcome back.
                    </h2>

                    <p className="max-w-2xl text-muted-foreground">
                        Manage your rental requests, monitor approvals,
                        and keep track of all your rental activities.
                    </p>
                </div>
            </section>

            {/* Overview */}
            <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">
                            Total Requests
                        </CardTitle>

                        <Home className="h-5 w-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <h3 className="text-3xl font-bold">
                            {rentalRequests.length}
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Rental applications submitted
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">
                            Active
                        </CardTitle>

                        <Clock className="h-5 w-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <h3 className="text-3xl font-bold">
                            {
                                rentalRequests.filter(
                                    (r: any) => r.status === "ACTIVE"
                                ).length
                            }
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Waiting for landlord response
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">
                            Approved
                        </CardTitle>

                        <CalendarDays className="h-5 w-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <h3 className="text-3xl font-bold">
                            {
                                rentalRequests.filter(
                                    (r: any) => r.status === "APPROVED"
                                ).length
                            }
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Successfully approved
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="text-sm">
                            Cancelled
                        </CardTitle>

                        <XCircle className="h-5 w-5 text-primary" />
                    </CardHeader>

                    <CardContent>
                        <h3 className="text-3xl font-bold">
                            {
                                rentalRequests.filter(
                                    (r: any) => r.status === "CANCELLED"
                                ).length
                            }
                        </h3>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Cancelled requests
                        </p>
                    </CardContent>
                </Card>

            </section>

            {/* Recent Requests */}
            <section className="grid gap-6 xl:grid-cols-3">

                <Card className="xl:col-span-2">

                    <CardHeader className="flex flex-row items-center justify-between">

                        <div>
                            <CardTitle>
                                Recent Rental Requests
                            </CardTitle>

                            <CardDescription>
                                Your latest submitted rental requests.
                            </CardDescription>
                        </div>

                        <Button asChild>
                            <Link href="/dashboard/tenant/requests">
                                View All
                            </Link>
                        </Button>

                    </CardHeader>

                    <CardContent className="p-3">

                        <Table>

                            <TableHeader>

                                <TableRow>

                                    <TableHead>Property</TableHead>

                                    <TableHead>City</TableHead>

                                    <TableHead>Move In</TableHead>

                                    <TableHead>Status</TableHead>

                                    <TableHead className="text-right">
                                        Action
                                    </TableHead>

                                </TableRow>

                            </TableHeader>

                            <TableBody>

                                {rentalRequests.length > 0 ? (

                                    rentalRequests.slice(0, 5).map((request: any) => (

                                        <TableRow key={request.id}>

                                            <TableCell>
                                                {request.property.title}
                                            </TableCell>

                                            <TableCell>
                                                {request.property.city}
                                            </TableCell>

                                            <TableCell>
                                                {new Date(
                                                    request.moveInDate
                                                ).toLocaleDateString()}
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

                                            <TableCell className="text-right">

                                                <Button
                                                    asChild
                                                    variant="ghost"
                                                    size="sm">
                                                    <Link
                                                        href={`/dashboard/tenant/requests/${request.id}`}>
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
                                            colSpan={5}
                                            className="text-center text-muted-foreground">
                                            No rental requests found.
                                        </TableCell>

                                    </TableRow>

                                )}

                            </TableBody>

                        </Table>

                    </CardContent>

                </Card>

                {/* Quick Actions */}

                <Card>

                    <CardHeader>

                        <CardTitle>
                            Quick Actions
                        </CardTitle>

                    </CardHeader>

                    <CardContent className="space-y-4">

                        <div className="rounded-lg border p-4">

                            <h4 className="font-semibold">
                                Browse Properties
                            </h4>

                            <p className="mt-1 text-sm text-muted-foreground">
                                Discover new apartments and houses.
                            </p>

                            <Button
                                asChild
                                className="mt-4 w-full"
                            >
                                <Link href="/properties">
                                    <Search className="mr-2 h-4 w-4" />
                                    Browse
                                </Link>
                            </Button>

                        </div>

                        <div className="rounded-lg border p-4">

                            <h4 className="font-semibold">
                                My Rental Requests
                            </h4>

                            <p className="mt-1 text-sm text-muted-foreground">
                                View all submitted applications.
                            </p>

                            <Button
                                asChild
                                variant="outline"
                                className="mt-4 w-full"
                            >
                                <Link href="/dashboard/tenant/requests">
                                    <Plus className="mr-2 h-4 w-4" />
                                    View Requests
                                </Link>
                            </Button>

                        </div>

                    </CardContent>

                </Card>

            </section>

        </div>
    );
}