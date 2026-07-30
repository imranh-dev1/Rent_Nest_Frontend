"use client";

import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BadgeCheck,
    CreditCard,
    Headphones,
    MoveRight,
    Sparkles,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const features = [
    {
        icon: BadgeCheck,
        title: "Verified Properties",
        description:
            "Every property is reviewed to ensure accurate details and trustworthy listings.",
    },
    {
        icon: CreditCard,
        title: "Secure Payments",
        description:
            "Complete your rental payments safely with our secure payment system.",
    },
    {
        icon: Sparkles,
        title: "Fast Rental Process",
        description:
            "Find, request, approve, and rent your dream home with fewer steps.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description:
            "Our support team helps tenants and landlords whenever they need assistance.",
    },
];

const stats = [
    {
        value: "10K+",
        label: "Properties Listed",
    },
    {
        value: "8K+",
        label: "Happy Tenants",
    },
    {
        value: "1.5K+",
        label: "Trusted Landlords",
    },
    {
        value: "98%",
        label: "Success Rate",
    },
];

export default function WhyChooseRentNest() {
    return (
        <section className="relative overflow-hidden py-20">

            {/* Background Decoration */}

            <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />


            <div className="container mx-auto px-4">


                {/* Header */}

                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                            Property Types
                        </span>

                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Explore by Property Category
                        </h2>

                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Browse carefully selected rental properties tailored to every
                            lifestyle—from modern apartments to luxurious villas.
                        </p>
                    </div>

                    <Link href="/properties">
                        <Button >
                            Explore Properties <MoveRight />
                        </Button>
                    </Link>
                </div>

                {/* Main Content */}

                <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
                    {/* Image Side */}

                    <div className="relative h-full">
                        <div className="relative h-full min-h-150 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop"
                                alt="Modern home interior"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />

                            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

                            <div className="absolute bottom-8 left-8 max-w-sm text-white">
                                <h3 className="text-3xl font-bold">
                                    Your perfect home is closer than ever
                                </h3>

                                <p className="mt-3 text-white/80">
                                    Discover thousands of verified rental properties and enjoy a
                                    hassle-free renting journey.
                                </p>
                            </div>
                        </div>

                        {/* Floating Card */}

                        <Card className="absolute -bottom-8 right-5 hidden w-54 rounded-3xl border-0 shadow-2xl lg:block">
                            <CardContent className="text-center">
                                <p className="text-sm text-muted-foreground">Trusted by</p>

                                <h4 className="mt-2 text-3xl font-bold">15,000+</h4>

                                <p className="text-sm mt-2 text-muted-foreground">Users worldwide</p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Content Side */}

                    <div className="flex h-full flex-col justify-between">
                        <div className="space-y-5">
                            {features.map((feature) => {
                                const Icon = feature.icon;

                                return (
                                    <Card
                                        key={feature.title}
                                        className="group py-0 border hover:border-primary bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                                    >
                                        <CardContent className="flex gap-5 p-6">
                                            <div className="flex h-14 w-14 shrink-0 border border-primary items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                                                <Icon size={28} />
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-semibold">
                                                    {feature.title}
                                                </h3>

                                                <p className="mt-2 text-muted-foreground">
                                                    {feature.description}
                                                </p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* Stats */}

                        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4 justify-between">
                            {stats.map((stat) => (
                                <div key={stat.label}>
                                    <h4 className="text-3xl font-bold text-primary">
                                        {stat.value}
                                    </h4>

                                    <p className="mt-1 text-sm text-muted-foreground">
                                        {stat.label}
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