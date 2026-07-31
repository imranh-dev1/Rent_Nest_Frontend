"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, HousePlug, MapPin, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Banner() {
    return (
        <section className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1920"
                    alt="Rental Property"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/65" />
            </div>

            <div className="container relative mx-auto px-4">
                <div className="flex min-h-[90vh] items-center">
                    <div className="max-w-3xl text-white">
                        {/* Badge */}

                        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm backdrop-blur">
                            <HousePlug className="text-primary mr-3" /> Trusted Rental Marketplace
                        </span>

                        {/* Heading */}

                        <h1 className="mt-6 text-5xl font-bold leading-tight md:text-7xl">
                            Find Your
                            <span className="block text-primary">
                                Perfect Rental Home
                            </span>
                        </h1>

                        {/* Description */}

                        <p className="mt-6 max-w-2xl text-lg text-gray-200">
                            Browse verified rental properties, connect with
                            trusted landlords, submit rental requests,
                            and enjoy secure online payments—all in one place.
                        </p>

                        {/* Search Card */}

                        <div className="mt-10 bg-secondary p-4 shadow-2xl">
                            <div className="grid gap-4 md:grid-cols-[1fr_180px_auto]">
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

                                    <Input
                                        placeholder="Search by city or location..."
                                        className="pl-12 h-10"
                                    />
                                </div>

                                <Input
                                    placeholder="Property Type"
                                    className="h-10"
                                />

                                <Button
                                    size="lg"
                                    className="h-10 pr-6"
                                >
                                    <Search className="mr-2 size-5" />
                                    Search
                                </Button>
                            </div>
                        </div>

                        {/* CTA */}

                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button
                                size="lg"
                                asChild
                            >
                                <Link href="/properties">
                                    Explore Properties
                                    <ArrowRight className="ml-2 size-5" />
                                </Link>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                            >
                                <Link href="/dashboard/landlord/properties/new">
                                    List Your Property
                                </Link>
                            </Button>
                        </div>

                        {/* Stats */}

                        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
                            {[
                                ["15K+", "Properties"],
                                ["5K+", "Happy Tenants"],
                                ["2K+", "Landlords"],
                                ["98%", "Success Rate"],
                            ].map(([value, label]) => (
                                <div key={label}>
                                    <h3 className="text-3xl font-bold">
                                        {value}
                                    </h3>

                                    <p className="text-gray-300">
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}