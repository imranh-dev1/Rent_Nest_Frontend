"use client";

import {
    ArrowRight,
    CheckCircle2,
    CreditCard,
    Home,
    Search,
    Send,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
    {
        number: "01",
        icon: Search,
        title: "Find Your Home",
        description:
            "Search thousands of rental properties using location, price, property type, and amenities.",
    },
    {
        number: "02",
        icon: Home,
        title: "Explore Properties",
        description:
            "Compare verified listings, explore property details, check amenities, and find the right fit.",
    },
    {
        number: "03",
        icon: Send,
        title: "Send a Request",
        description:
            "Submit a rental request directly to the landlord and track your request from your dashboard.",
    },
    {
        number: "04",
        icon: CreditCard,
        title: "Pay & Move In",
        description:
            "Once approved, complete your secure online payment and get ready for your new home.",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative overflow-hidden py-20 lg:py-20 bg-muted/30">
            {/* Background Decoration */}
            <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
            </div>

            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="mx-auto mb-14 max-w-2xl text-center">
                    <Badge
                        variant="outline"
                        className="mb-4 rounded-full border-primary/20 bg-primary/5 px-4 py-1.5 text-primary"
                    >
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        Simple & Secure
                    </Badge>

                    <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                        Rent Your Next Home
                        <span className="block text-primary">
                            in Four Simple Steps
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">
                        From discovering the right property to completing your
                        rental, RentNest makes the entire journey simple,
                        transparent, and secure.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute left-[12%] right-[12%] top-14 hidden h-px bg-border lg:block" />

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step, index) => {
                            const Icon = step.icon;

                            return (
                                <Card
                                    key={step.number}
                                    className="group relative overflow-hidden border bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-xl"
                                >
                                    <CardContent className="p-7">
                                        {/* Number + Icon */}
                                        <div className="relative mb-7 flex items-center justify-between">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20 transition-transform duration-300 group-hover:scale-110">
                                                <Icon className="h-6 w-6" />
                                            </div>

                                            <span className="font-heading text-5xl font-bold text-muted/70 transition-colors group-hover:text-primary/15">
                                                {step.number}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <h3 className="font-heading text-xl font-semibold tracking-tight">
                                            {step.title}
                                        </h3>

                                        <p className="mt-3 text-sm leading-6 text-muted-foreground">
                                            {step.description}
                                        </p>

                                        {/* Bottom Indicator */}
                                        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                                            <span>
                                                Step {index + 1}
                                            </span>

                                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-12 flex justify-center">
                    <Button
                        size="lg"
                        className="group px-7 shadow-lg shadow-primary/20"
                        asChild
                    >
                        <a href="/properties">
                            Explore Properties
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                </div>
            </div>
        </section>
    );
}