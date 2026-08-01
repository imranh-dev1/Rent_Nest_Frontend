import Link from "next/link";
import {
    Building2,
    CheckCircle2,
    CircleDollarSign,
    Plus,
    Search,
    Home,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import PropertyTable from "../_components/PropertyTable";
import { getMyProperties } from "@/services/getMyProperties";

export default async function LandlordPropertiesPage() {
    const { data: properties } = await getMyProperties();

    return (
        <div className="space-y-8">
            {/* Hero */}

            <section className="flex flex-col gap-6 border bg-linear-to-r from-primary/10 via-background to-primary/5 p-8 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-3">
                    <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                        Property Management
                    </span>

                    <h1 className="text-4xl font-bold tracking-tight">
                        Manage Your Properties
                    </h1>

                    <p className="max-w-2xl text-muted-foreground">
                        View, update, and organize all your rental properties in one place.
                        Track availability, rental status, and manage listings effortlessly.
                    </p>
                </div>

                <Button
                    asChild
                    size="lg"
                >
                    <Link href="/dashboard/landlord/properties/create">
                        <Plus className="mr-2 h-4 w-4" />
                        Add Property
                    </Link>
                </Button>
            </section>

            {/* Toolbar */}

            <Card className="p-0">
                <CardContent className="flex flex-col gap-4 p-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="relative w-full lg:max-w-sm">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            placeholder="Search properties..."
                            className="pl-9"
                        />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Select>
                            <SelectTrigger className="w-full sm:w-44">
                                <SelectValue placeholder="Availability" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="all">All</SelectItem>
                                <SelectItem value="available">Available</SelectItem>
                                <SelectItem value="rented">Rented</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select>
                            <SelectTrigger className="w-full sm:w-44">
                                <SelectValue placeholder="Sort By" />
                            </SelectTrigger>

                            <SelectContent>
                                <SelectItem value="newest">Newest</SelectItem>
                                <SelectItem value="oldest">Oldest</SelectItem>
                                <SelectItem value="priceHigh">
                                    Price: High → Low
                                </SelectItem>
                                <SelectItem value="priceLow">
                                    Price: Low → High
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Property Table */}
            <PropertyTable properties={properties} />
        </div>
    );
}