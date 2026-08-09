import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    ArrowUpRight,
    BadgeCheck,
    Building2,
    Check,
    MapPin,
    ShieldCheck,
    Sparkles,
    Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stats = [
    { value: "15K+", label: "Verified properties" },
    { value: "5K+", label: "Happy tenants" },
    { value: "2K+", label: "Trusted landlords" },
    { value: "98%", label: "Successful rentals" },
];

const principles = [
    {
        number: "01",
        title: "Verified by design",
        description:
            "We make property information easier to understand so renters can make decisions with confidence.",
    },
    {
        number: "02",
        title: "Built for simplicity",
        description:
            "From discovery to rental requests and payments, every step is designed to feel clear and effortless.",
    },
    {
        number: "03",
        title: "People come first",
        description:
            "RentNest connects tenants and landlords through a marketplace built around real rental needs.",
    },
];

const journey = [
    {
        number: "01",
        title: "Discover",
        text: "Explore properties by location, price, property type, and lifestyle preferences.",
    },
    {
        number: "02",
        title: "Request",
        text: "Find the right property and submit a rental request directly to the landlord.",
    },
    {
        number: "03",
        title: "Secure",
        text: "Once approved, complete your payment through a secure online checkout.",
    },
];

export default function AboutPage() {
    return (
        <main className="overflow-hidden bg-background">

            {/* =====================================================
                HERO
            ====================================================== */}
            <section className="relative">
                <div className="mx-auto container px-4 sm:px-6 lg:px-8">
                    <div className="grid min-h-180 items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-20">

                        {/* Hero Content */}
                        <div className="relative z-10">

                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-primary" />

                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                                    About RentNest
                                </span>
                            </div>

                            <h1 className="mt-8 max-w-2xl font-heading text-5xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-[76px]">
                                Renting should feel
                                <span className="block text-primary">
                                    effortless.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
                                RentNest is a modern rental marketplace connecting
                                tenants with trusted landlords through a simpler,
                                clearer, and more secure rental experience.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <Button
                                    size="lg"
                                    className="h-12 rounded-full px-7"
                                    asChild
                                >
                                    <Link href="/properties">
                                        Explore properties
                                        <ArrowUpRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>

                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-12 rounded-full px-7"
                                    asChild
                                >
                                    <Link href="/contact">
                                        Contact RentNest
                                    </Link>
                                </Button>
                            </div>

                            {/* Trust line */}
                            <div className="mt-12 flex items-center gap-4 border-t pt-6">
                                <div className="flex -space-x-2">
                                    {["SA", "MB", "NJ", "DW"].map((initials) => (
                                        <div
                                            key={initials}
                                            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-background bg-muted text-xs font-semibold"
                                        >
                                            {initials}
                                        </div>
                                    ))}
                                </div>

                                <div>
                                    <div className="flex items-center gap-1">
                                        <BadgeCheck className="h-4 w-4 text-primary" />
                                        <p className="text-sm font-semibold">
                                            Trusted rental marketplace
                                        </p>
                                    </div>

                                    <p className="mt-1 text-xs text-muted-foreground">
                                        Helping tenants and landlords move forward
                                        with confidence.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="relative">

                            <div className="relative h-87.5 overflow-hidden sm:h-100 lg:h-112.5">
                                <Image
                                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop"
                                    alt="Premium modern rental interior"
                                    fill
                                    priority
                                    sizes="(max-width: 1024px) 100vw, 55vw"
                                    className="object-cover transition-transform duration-1000 hover:scale-105"
                                />

                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/5 to-transparent" />

                                <div className="absolute bottom-30 left-7 right-7">
                                    <div className="flex items-center gap-2 text-white/70">
                                        <MapPin className="h-4 w-4" />
                                        <span className="text-xs uppercase tracking-[0.18em]">
                                            Bangladesh
                                        </span>
                                    </div>

                                    <p className="mt-3 max-w-md font-heading text-2xl font-semibold text-white sm:text-3xl">
                                        A better rental experience starts with the right place.
                                    </p>
                                </div>
                            </div>

                            {/* Floating metric */}
                            <div className="absolute -bottom-7 -left-5 hidden w-56 rounded-2xl border bg-background p-5 shadow-2xl sm:block lg:-left-10">
                                <div className="flex items-start justify-between">
                                    <div>
                                        <p className="text-xs uppercase tracking-wider text-muted-foreground">
                                            Marketplace
                                        </p>

                                        <p className="mt-2 font-heading text-3xl font-bold">
                                            15K+
                                        </p>

                                        <p className="mt-1 text-xs text-muted-foreground">
                                            properties available
                                        </p>
                                    </div>

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                        <Building2 className="h-5 w-5" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                STATS
            ====================================================== */}
            <section className="border-y">
                <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center">

                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`px - 5 py - 9 sm: px - 8 sm: py - 12 ${index !== 0
                                    ? "border-l"
                                    : ""
                                    } `}
                            >
                                <p className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
                                    {stat.value}
                                </p>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    {stat.label}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* =====================================================
                STORY
            ====================================================== */}
            <section className="py-20 sm:py-20 lg:py-20">
                <div className="mx-auto container px-4 sm:px-6 lg:px-8">

                    <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">

                        <div>
                            <div className="flex items-center gap-3">
                                <span className="h-px w-8 bg-primary" />

                                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                                    Our story
                                </span>
                            </div>

                            <h2 className="mt-6 max-w-md font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                We are changing
                                <span className="block text-muted-foreground">
                                    how people rent.
                                </span>
                            </h2>
                        </div>

                        <div className="max-w-3xl">
                            <p className="text-xl leading-9 tracking-tight sm:text-2xl sm:leading-10">
                                Finding a home should be exciting, not exhausting.
                                RentNest brings property discovery, rental requests,
                                landlord management, and secure payments together in
                                one modern experience.
                            </p>

                            <div className="mt-10 grid gap-8 sm:grid-cols-2">
                                <div className="border-l-2 border-primary pl-5">
                                    <p className="font-semibold">
                                        For tenants
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                        Discover suitable homes, compare options,
                                        request rentals, and manage your journey
                                        from one place.
                                    </p>
                                </div>

                                <div className="border-l-2 border-muted pl-5">
                                    <p className="font-semibold">
                                        For landlords
                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                                        List properties, manage availability,
                                        review requests, and build better tenant
                                        relationships.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* =====================================================
                FEATURE IMAGE / MISSION
            ====================================================== */}
            <section className="border-y bg-muted/20">
                <div className="mx-auto container px-4 py-20 sm:px-6 lg:px-8 lg:py-20">

                    <div className="grid items-center gap-12 lg:grid-cols-2">

                        <div className="relative  h-87.5 overflow-hidden sm:h-100 lg:h-150">
                            <Image
                                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1400&auto=format&fit=crop"
                                alt="Elegant apartment living room"
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />
                        </div>

                        <div className="lg:pl-10">

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                                <Sparkles className="h-5 w-5" />
                            </div>

                            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                                Our mission
                            </p>

                            <h2 className="mt-5 font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                                Make every rental decision
                                <span className="block text-muted-foreground">
                                    feel more confident.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-xl leading-8 text-muted-foreground">
                                We believe technology should remove friction from
                                renting. That's why RentNest focuses on clear
                                property information, intuitive workflows, trusted
                                interactions, and secure transactions.
                            </p>

                            <div className="mt-9 space-y-4">
                                {[
                                    "Clear property information",
                                    "Simple rental request workflow",
                                    "Secure online payments",
                                    "Dedicated tenant and landlord dashboards",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <Check className="h-3.5 w-3.5" />
                                        </div>

                                        <span className="text-sm font-medium">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                PRINCIPLES
            ====================================================== */}
            <section>
                <div className="mx-auto container px-4 sm:px-6 lg:px-8 py-20">

                    {/* Section Heading */}
                    <div className="mx-auto max-w-2xl text-center">
                        <div className="flex items-center justify-center gap-3">
                            <span className="h-px w-8 bg-primary" />

                            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                                What we believe
                            </span>

                            <span className="h-px w-8 bg-primary" />
                        </div>

                        <h2 className="mt-6 font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                            The principles behind
                            <span className="block text-primary">
                                RentNest.
                            </span>
                        </h2>
                    </div>

                    {/* Principles */}
                    <div className="mx-auto mt-16 container divide-y border-y">
                        {principles.map((item) => (
                            <div
                                key={item.number}
                                className="group grid gap-6 py-9 transition-colors hover:bg-muted/30 md:grid-cols-[100px_0.7fr_1fr] md:items-center md:gap-10 md:px-6"
                            >
                                <span className="font-mono text-sm text-primary">
                                    {item.number}
                                </span>

                                <h3 className="font-heading text-2xl font-semibold tracking-tight">
                                    {item.title}
                                </h3>

                                <div className="flex items-center justify-between gap-6">
                                    <p className="max-w-lg text-sm leading-7 text-muted-foreground">
                                        {item.description}
                                    </p>

                                    <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-2 group-hover:text-primary md:block" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =====================================================
    JOURNEY
====================================================== */}

            <section className="relative overflow-hidden bg-zinc-950 py-24 text-white sm:py-32">

                {/* Subtle background glow */}
                <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

                <div className="relative mx-auto container px-6 lg:px-8">
                    <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

                        {/* Section Intro */}
                        <div className="lg:sticky lg:top-24 lg:self-start">

                            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
                                    The journey
                                </span>
                            </div>

                            <h2 className="mt-8 max-w-xl font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[4.25rem]">
                                From search
                                <span className="block text-white/30">
                                    to move-in.
                                </span>
                            </h2>

                            <p className="mt-7 max-w-md text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
                                A simpler way to discover, evaluate, and secure your next
                                home — without the usual rental friction.
                            </p>

                            <div className="mt-12 hidden items-center gap-4 lg:flex">
                                <div className="h-px w-20 bg-white/15" />

                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                                    04 steps
                                </span>
                            </div>
                        </div>

                        {/* Journey Cards */}
                        <div className="relative">

                            {/* Timeline */}
                            <div className="absolute bottom-8 left-[17px] top-8 hidden w-px bg-white/10 sm:block" />

                            <div className="space-y-4">
                                {journey.map((item, index) => (
                                    <div
                                        key={item.number}
                                        className="group relative"
                                    >
                                        <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06] sm:grid-cols-[42px_1fr] sm:p-7 lg:p-8">

                                            {/* Number */}
                                            <div className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-zinc-950 font-mono text-[10px] text-white/50 transition-colors duration-300 group-hover:border-primary/50 group-hover:text-white">
                                                {item.number}
                                            </div>

                                            {/* Content */}
                                            <div>
                                                <div className="flex items-start justify-between gap-6">
                                                    <div>
                                                        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/25">
                                                            Step {index + 1}
                                                        </p>

                                                        <h3 className="font-heading text-xl font-semibold tracking-tight text-white sm:text-2xl">
                                                            {item.title}
                                                        </h3>
                                                    </div>

                                                    <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-white/20 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                                                </div>

                                                <p className="mt-4 max-w-xl text-sm leading-7 text-white/45 transition-colors duration-300 group-hover:text-white/60">
                                                    {item.text}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* =====================================================
                LANDLORD CTA
            ====================================================== */}
            <div className="relative overflow-hidden bg-muted/20 ">

                {/* Decorative background */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

                <div className="relative grid lg:grid-cols-[1fr_0.9fr] container mx-auto">

                    {/* Content */}
                    <div className="relative z-10 flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 xl:px-20">

                        {/* Eyebrow */}
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-primary" />

                            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                                For landlords
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="mt-8 max-w-2xl font-heading text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                            Your property
                            <span className="block text-muted-foreground/60">
                                deserves more.
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="mt-7 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
                            Put your property in front of serious renters and manage
                            everything from inquiries to rental requests in one refined,
                            effortless experience.
                        </p>

                        {/* CTA */}
                        <div className="mt-9 flex flex-wrap items-center gap-5">
                            <Button
                                size="lg"
                                className="group h-10 px-7"
                                asChild
                            >
                                <Link href="/auth/register">
                                    List your property
                                    <ArrowUpRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </Link>
                            </Button>

                            <span className="text-xs text-muted-foreground">
                                No complicated setup
                            </span>
                        </div>

                        {/* Bottom Stats */}
                        <div className="mt-14 flex flex-wrap gap-x-10 gap-y-5 border-t pt-7">
                            <div>
                                <p className="font-heading text-2xl font-semibold">
                                    15K+
                                </p>

                                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                    Active properties
                                </p>
                            </div>

                            <div className="h-10 w-px bg-border" />

                            <div>
                                <p className="font-heading text-2xl font-semibold">
                                    24/7
                                </p>

                                <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                    Property visibility
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Image Area */}
                    <div className="relative min-h-[420px] overflow-hidden lg:min-h-[620px]">

                        <Image
                            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?q=80&w=1600&auto=format&fit=crop"
                            alt="Luxury rental property"
                            fill
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover transition-transform duration-1000 hover:scale-105"
                        />

                        {/* Image overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent" />

                        {/* Location */}
                        <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">
                            <MapPin className="h-3.5 w-3.5 text-white/80" />

                            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/80">
                                Bangladesh
                            </span>
                        </div>

                        {/* Floating property card */}
                        <div className="absolute bottom-6 left-6 right-6 sm:left-auto sm:w-64">
                            <div className="rounded-2xl border border-white/20 bg-black/30 p-5 text-white shadow-2xl backdrop-blur-xl">

                                <div className="flex items-center justify-between">
                                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                                        Featured
                                    </span>

                                    <span className="h-2 w-2 rounded-full bg-green-400" />
                                </div>

                                <p className="mt-4 font-heading text-xl font-semibold">
                                    Modern Living
                                </p>

                                <div className="mt-3 flex items-center justify-between text-xs text-white/50">
                                    <span>Dhaka, Bangladesh</span>
                                    <span>৳45K/mo</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* =====================================================
                FINAL CTA
            ====================================================== */}
            <section className="border-t">
                <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:py-20">

                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ShieldCheck className="h-5 w-5" />
                    </div>

                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                        Your next chapter starts here
                    </p>

                    <h2 className="mx-auto mt-5 max-w-3xl font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                        Find a place that feels
                        <span className="text-primary">
                            {" "}right.
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-xl leading-8 text-muted-foreground">
                        Explore verified rental properties and discover a
                        simpler way to find your next home.
                    </p>

                    <div className="mt-9 flex flex-wrap justify-center gap-3">
                        <Button
                            size="lg"
                            className="h-10 px-8"
                            asChild
                        >
                            <Link href="/properties">
                                Explore properties
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="h-10 px-8"
                            asChild
                        >
                            <Link href="/contact">
                                Get in touch
                            </Link>
                        </Button>
                    </div>

                </div>
            </section>

        </main>
    );
} 