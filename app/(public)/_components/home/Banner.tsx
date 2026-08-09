"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
    ArrowRight,
    HousePlug,
    MapPin,
    Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Banner({ user }: any) {
    const router = useRouter();

    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");

    const handleSearch = () => {
        const params = new URLSearchParams();

        // Search keyword
        if (search.trim()) {
            params.set("search", search.trim());
        }

        // City
        if (city.trim()) {
            params.set("city", city.trim());
        }

        // Reset pagination when performing a new search
        params.set("page", "1");
        params.set("limit", "9");

        router.push(`/properties?${params.toString()}`);
    };

    return (
        <section className="relative overflow-hidden">
            {/* Background */}
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
                            <HousePlug className="mr-3 text-primary" />
                            Trusted Rental Marketplace
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
                            trusted landlords, submit rental requests, and
                            enjoy secure online payments—all in one place.
                        </p>

                        {/* Search */}
                        <div className="mt-10 bg-secondary p-4 shadow-2xl">
                            <div className="grid gap-4 md:grid-cols-[1fr_180px_auto]">

                                {/* Search */}
                                <div className="relative">
                                    <MapPin className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />

                                    <Input
                                        value={search}
                                        onChange={(e) =>
                                            setSearch(e.target.value)
                                        }
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                handleSearch();
                                            }
                                        }}
                                        placeholder="Search by property name..."
                                        className="h-10 pl-12"
                                    />
                                </div>

                                {/* City */}
                                <Input
                                    value={city}
                                    onChange={(e) =>
                                        setCity(e.target.value)
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            handleSearch();
                                        }
                                    }}
                                    placeholder="City"
                                    className="h-10"
                                />

                                {/* Search Button */}
                                <Button
                                    size="lg"
                                    className="h-10 cursor-pointer"
                                    onClick={handleSearch}
                                >
                                    <Search className="mr-2 size-5" />
                                    Search
                                </Button>

                            </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Button size="lg" asChild>
                                <Link href="/properties">
                                    Explore Properties
                                    <ArrowRight className="ml-2 size-5" />
                                </Link>
                            </Button>

                            {user?.role === "LANDLORD" ? (
                                <Button
                                    variant="outline"
                                    size="lg"
                                    asChild
                                >
                                    <Link href="/dashboard/landlord/properties/create">
                                        List Your Property
                                    </Link>
                                </Button>
                            ) : (
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    asChild
                                >
                                    <Link href="/dashboard/tenant/profile">
                                        Become a Landlord
                                    </Link>
                                </Button>
                            )}
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