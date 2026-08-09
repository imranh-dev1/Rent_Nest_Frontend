"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
    ArrowRight,
    CheckCircle2,
    Clock3,
    Headphones,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Send,
    ShieldCheck,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

/* =========================================================
   VALIDATION
========================================================= */

const contactSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters.")
        .max(60, "Name is too long."),

    email: z
        .string()
        .email("Please enter a valid email address."),

    subject: z
        .string()
        .min(5, "Subject must be at least 5 characters.")
        .max(100, "Subject is too long."),

    message: z
        .string()
        .min(20, "Message must be at least 20 characters.")
        .max(1000, "Message is too long."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

/* =========================================================
   CONTACT INFORMATION
========================================================= */

const contactItems = [
    {
        icon: Mail,
        label: "Email",
        title: "support@rentnest.com",
        description: "For general questions and support.",
        href: "mailto:support@rentnest.com",
    },
    {
        icon: Phone,
        label: "Phone",
        title: "+880 1700-000000",
        description: "Monday – Friday, 9:00 AM – 6:00 PM.",
        href: "tel:+8801700000000",
    },
    {
        icon: MapPin,
        label: "Office",
        title: "Rajshahi, Bangladesh",
        description: "Visit our main RentNest office.",
        href: "#location",
    },
];

/* =========================================================
   FAQ
========================================================= */

const faqs = [
    {
        question: "How can I list my property?",
        answer:
            "Create a landlord account and use your dashboard to create, update, manage, and publish your rental properties.",
    },
    {
        question: "How does the rental request work?",
        answer:
            "Tenants can submit a request from a property details page. Landlords can review, approve, or reject requests from their dashboard.",
    },
    {
        question: "Are payments secure?",
        answer:
            "Yes. Approved rental payments are processed through a supported secure payment gateway.",
    },
    {
        question: "Can I update my property later?",
        answer:
            "Yes. Landlords can edit pricing, availability, property information, images, and other listing details from their dashboard.",
    },
];

/* =========================================================
   PAGE
========================================================= */

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);
    const [serverError, setServerError] = useState("");

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),

        defaultValues: {
            name: "",
            email: "",
            subject: "",
            message: "",
        },
    });

    /* =====================================================
       SUBMIT
    ====================================================== */

    const onSubmit = async (values: ContactFormValues) => {
        try {
            setServerError("");

            /*
             * Replace this simulated request with:
             *
             * POST /api/contact
             */

            await new Promise((resolve) =>
                setTimeout(resolve, 1200)
            );

            console.log(values);

            reset();
            setSubmitted(true);
        } catch {
            setServerError(
                "Unable to send your message. Please try again."
            );
        }
    };

    return (
        <main className="overflow-hidden">

            {/* =====================================================
                HERO
            ====================================================== */}

            <section className="relative border-b bg-background">

                {/* Decorative background */}

                <div className="pointer-events-none absolute inset-0 overflow-hidden">

                    <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

                    <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

                    <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

                </div>

                <div className="container relative mx-auto px-4">

                    <div className="mx-auto max-w-5xl py-24 text-center sm:py-20 lg:py-20">

                        {/* Badge */}

                        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">

                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />

                            RentNest Support

                        </div>

                        {/* Heading */}

                        <h1 className="mt-8 text-xl font-bold tracking-[-0.04em] sm:text-6xl lg:text-8xl">

                            Let&apos;s make your

                            <span className="block text-primary">
                                rental journey easier.
                            </span>

                        </h1>

                        <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">

                            Whether you are searching for a new home,
                            managing rental properties, or need help with
                            your account, our team is ready to help.

                        </p>

                        {/* Trust indicators */}

                        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">

                            <div className="flex items-center gap-2">

                                <CheckCircle2 className="h-4 w-4 text-primary" />

                                Verified support

                            </div>

                            <div className="flex items-center gap-2">

                                <ShieldCheck className="h-4 w-4 text-primary" />

                                Secure platform

                            </div>

                            <div className="flex items-center gap-2">

                                <Clock3 className="h-4 w-4 text-primary" />

                                Fast response

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                CONTACT CARDS
            ====================================================== */}

            <section className="relative pt-20">

                <div className="container mx-auto px-4">

                    <div className="grid gap-5 md:grid-cols-3">

                        {contactItems.map((item) => {

                            const Icon = item.icon;

                            return (
                                <Link
                                    href={item.href}
                                    key={item.title}
                                    className="group"
                                >

                                    <Card className="h-full border bg-card/70 shadow-sm backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary hover:shadow-2xl hover:shadow-primary/5">

                                        <CardContent className="p-7 sm:p-8">

                                            <div className="flex items-start justify-between">

                                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground">

                                                    <Icon className="h-5 w-5" />

                                                </div>

                                                <ArrowRight className="h-5 w-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-primary" />

                                            </div>

                                            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">

                                                {item.label}

                                            </p>

                                            <h2 className="mt-2 font-heading text-xl font-semibold tracking-tight">

                                                {item.title}

                                            </h2>

                                            <p className="mt-3 text-sm leading-6 text-muted-foreground">

                                                {item.description}

                                            </p>

                                        </CardContent>

                                    </Card>

                                </Link>
                            );
                        })}

                    </div>

                </div>

            </section>

            {/* =====================================================
                CONTACT FORM
            ====================================================== */}

            <section className="py-0 sm:py-20 lg:pb-20">

                <div className="container mx-auto px-4">

                    <div className="overflow-hidden border bg-card shadow-2xl shadow-black/5">

                        <div className="grid lg:grid-cols-[0.85fr_1.15fr]">

                            {/* LEFT PANEL */}

                            <div className="relative overflow-hidden bg-foreground p-8 text-background sm:p-12 lg:p-14">

                                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

                                <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

                                <div className="relative">

                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">

                                        <MessageCircle className="h-5 w-5" />

                                    </div>

                                    <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-primary">

                                        Get in touch

                                    </p>

                                    <h2 className="mt-5 font-heading text-4xl font-bold tracking-tight sm:text-5xl">

                                        We&apos;re here to help.

                                    </h2>

                                    <p className="mt-6 max-w-md text-sm leading-7 text-background/60">

                                        Have a question about a property,
                                        rental request, payment, or your
                                        account? Send us a message and our
                                        support team will take care of it.

                                    </p>

                                    {/* Support points */}

                                    <div className="mt-12 space-y-7">

                                        <div className="flex gap-4">

                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background/10">

                                                <Headphones className="h-4 w-4 text-primary" />

                                            </div>

                                            <div>

                                                <h3 className="text-sm font-semibold">
                                                    Dedicated support
                                                </h3>

                                                <p className="mt-1 text-xs leading-5 text-background/50">
                                                    Help with accounts,
                                                    properties, payments and
                                                    rental requests.
                                                </p>

                                            </div>

                                        </div>

                                        <div className="flex gap-4">

                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background/10">

                                                <Clock3 className="h-4 w-4 text-primary" />

                                            </div>

                                            <div>

                                                <h3 className="text-sm font-semibold">
                                                    Fast response
                                                </h3>

                                                <p className="mt-1 text-xs leading-5 text-background/50">
                                                    We aim to respond within
                                                    one business day.
                                                </p>

                                            </div>

                                        </div>

                                        <div className="flex gap-4">

                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-background/10">

                                                <ShieldCheck className="h-4 w-4 text-primary" />

                                            </div>

                                            <div>

                                                <h3 className="text-sm font-semibold">
                                                    Secure communication
                                                </h3>

                                                <p className="mt-1 text-xs leading-5 text-background/50">
                                                    Your information is handled
                                                    securely and responsibly.
                                                </p>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>

                            {/* FORM */}

                            <div className="p-7 sm:p-10 lg:p-14">

                                {submitted ? (

                                    <div className="flex min-h-125 flex-col items-center justify-center text-center">

                                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">

                                            <CheckCircle2 className="h-8 w-8" />

                                        </div>

                                        <h3 className="mt-7 font-heading text-3xl font-bold">

                                            Message sent successfully.

                                        </h3>

                                        <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">

                                            Thank you for contacting RentNest.
                                            Our support team will review your
                                            message and get back to you soon.

                                        </p>

                                        <Button
                                            variant="outline"
                                            className="mt-8 rounded-xl"
                                            onClick={() =>
                                                setSubmitted(false)
                                            }
                                        >
                                            Send another message
                                        </Button>

                                    </div>

                                ) : (

                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="space-y-6"
                                        noValidate
                                    >

                                        <div>

                                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                                                Contact form
                                            </p>

                                            <h3 className="mt-3 text-3xl font-bold tracking-tight">
                                                Tell us what you need.
                                            </h3>

                                            <p className="mt-3 text-sm text-muted-foreground">
                                                Fill out the form and we&apos;ll
                                                get back to you.
                                            </p>

                                        </div>

                                        {/* NAME + EMAIL */}

                                        <div className="grid gap-5 sm:grid-cols-2">

                                            <div className="space-y-2">

                                                <label
                                                    htmlFor="name"
                                                    className="text-sm font-medium"
                                                >
                                                    Full name
                                                </label>

                                                <Input
                                                    id="name"
                                                    placeholder="Imran Hossain"
                                                    autoComplete="name"
                                                    className="h-10 bg-muted/30"
                                                    {...register("name")}
                                                />

                                                {errors.name && (
                                                    <p className="text-xs font-medium text-destructive">
                                                        {errors.name.message}
                                                    </p>
                                                )}

                                            </div>

                                            <div className="space-y-2">

                                                <label
                                                    htmlFor="email"
                                                    className="text-sm font-medium"
                                                >
                                                    Email address
                                                </label>

                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="you@example.com"
                                                    autoComplete="email"
                                                    className="h-10 bg-muted/30"
                                                    {...register("email")}
                                                />

                                                {errors.email && (
                                                    <p className="text-xs font-medium text-destructive">
                                                        {errors.email.message}
                                                    </p>
                                                )}

                                            </div>

                                        </div>

                                        {/* SUBJECT */}

                                        <div className="space-y-2">

                                            <label
                                                htmlFor="subject"
                                                className="text-sm font-medium"
                                            >
                                                Subject
                                            </label>

                                            <Input
                                                id="subject"
                                                placeholder="How can we help?"
                                                className="h-10 bg-muted/30"
                                                {...register("subject")}
                                            />

                                            {errors.subject && (
                                                <p className="text-xs font-medium text-destructive">
                                                    {errors.subject.message}
                                                </p>
                                            )}

                                        </div>

                                        {/* MESSAGE */}

                                        <div className="space-y-2">

                                            <label
                                                htmlFor="message"
                                                className="text-sm font-medium"
                                            >
                                                Message
                                            </label>

                                            <Textarea
                                                id="message"
                                                placeholder="Tell us how we can help..."
                                                className="min-h-40 resize-none bg-muted/30"
                                                {...register("message")}
                                            />

                                            {errors.message && (
                                                <p className="text-xs font-medium text-destructive">
                                                    {errors.message.message}
                                                </p>
                                            )}

                                        </div>

                                        {/* SERVER ERROR */}

                                        {serverError && (

                                            <div className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3">

                                                <p className="text-sm font-medium text-destructive">
                                                    {serverError}
                                                </p>

                                            </div>

                                        )}

                                        {/* SUBMIT */}

                                        <Button
                                            type="submit"
                                            size="lg"
                                            disabled={isSubmitting}
                                            className="h-10 w-full text-sm font-semibold cursor-pointer"
                                        >

                                            {isSubmitting ? (
                                                <>
                                                    <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />

                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    Send message

                                                    <Send className="ml-2 h-4 w-4" />
                                                </>
                                            )}

                                        </Button>

                                        <p className="text-center text-xs text-muted-foreground">

                                            Your information is protected and
                                            will only be used to respond to
                                            your request.

                                        </p>

                                    </form>

                                )}

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
} 
