"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const neighborhoods = [
    {
        name: "Dhanmondi",
        location: "Dhaka, Bangladesh",
        properties: "1,250+",
        image:
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1400&auto=format&fit=crop",
        className: "lg:col-span-7 lg:row-span-2",
    },
    {
        name: "Gulshan",
        location: "Dhaka, Bangladesh",
        properties: "980+",
        image:
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1200&auto=format&fit=crop",
        className: "lg:col-span-5",
    },
    {
        name: "Bashundhara",
        location: "Dhaka, Bangladesh",
        properties: "870+",
        image:
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
        className: "lg:col-span-5",
    },
];

export default function PopularNeighborhoods() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="mb-14 grid gap-8 lg:grid-cols-2 lg:items-end">

                    <div>
                        <span className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                            Explore locations
                        </span>

                        <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                            Find a place
                            <br />
                            <span className="text-primary">
                                you will love to call home.
                            </span>
                        </h2>
                    </div>

                    <div className="flex flex-col items-start gap-5 lg:items-end lg:text-right">
                        <p className="max-w-md text-base leading-7 text-muted-foreground">
                            Discover rental properties in some of the most
                            desirable neighborhoods and communities.
                        </p>

                        <Link
                            href="/properties"
                            className="group inline-flex items-center gap-2 text-sm font-medium ">

                            <Button className="cursor-pointer" variant='secondary'>
                                Explore all properties
                                <ArrowUpRight
                                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                                />
                            </Button>
                        </Link>
                    </div>

                </div>

                {/* Neighborhood Grid */}
                <div className="grid auto-rows-70 gap-5 lg:grid-cols-12 lg:auto-rows-65">

                    {neighborhoods.map((item, index) => (
                        <Link
                            key={item.name}
                            href={`/properties?location=${encodeURIComponent(
                                item.name,
                            )}`}
                            className={`group relative overflow-hidden ${item.className}`}
                        >
                            <Image
                                src={item.image}
                                alt={`${item.name} rental properties`}
                                fill
                                sizes={
                                    index === 0
                                        ? "(max-width: 1024px) 100vw, 58vw"
                                        : "(max-width: 1024px) 100vw, 42vw"
                                }
                                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

                            {/* Top */}
                            <div className="absolute left-6 right-6 top-6 flex items-start justify-between">

                                <div className="flex items-center gap-2 rounded-full bg-black/20 px-3 py-1.5 text-xs text-white backdrop-blur-md">
                                    <MapPin className="h-3.5 w-3.5" />

                                    {item.location}
                                </div>

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 group-hover:opacity-100">
                                    <ArrowUpRight className="h-4 w-4" />
                                </div>

                            </div>

                            {/* Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">

                                <div className="flex items-end justify-between gap-5">

                                    <div>
                                        <h3 className="font-heading text-3xl font-semibold text-white sm:text-4xl">
                                            {item.name}
                                        </h3>

                                        <p className="mt-2 text-sm text-white/65">
                                            {item.properties} rental properties
                                        </p>
                                    </div>

                                    <span className="hidden text-xs uppercase tracking-wider text-white/50 sm:block">
                                        Explore
                                    </span>

                                </div>

                            </div>
                        </Link>
                    ))}

                </div>

                {/* Bottom Statement */}
                <div className="mt-12 grid gap-8 border-t pt-10 sm:grid-cols-3">

                    <div>
                        <p className="font-heading text-3xl font-semibold">
                            15K+
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Verified rental properties
                        </p>
                    </div>

                    <div>
                        <p className="font-heading text-3xl font-semibold">
                            2K+
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Trusted landlords
                        </p>
                    </div>

                    <div className="sm:text-right">
                        <p className="text-sm leading-6 text-muted-foreground">
                            From city apartments to spacious family homes,
                            RentNest helps you find the right place for your
                            next chapter.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}