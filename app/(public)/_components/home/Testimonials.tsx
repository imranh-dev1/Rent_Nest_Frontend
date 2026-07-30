"use client";

import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import {
    Card,
    CardContent,
} from "@/components/ui/card";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

const testimonials = [
    {
        id: 1,
        name: "Sarah Ahmed",
        role: "Tenant",
        image: "https://i.pravatar.cc/150?img=32",
        review:
            "RentNest made finding my apartment incredibly easy. The entire process was smooth, transparent, and stress-free.",
    },
    {
        id: 2,
        name: "Michael Brown",
        role: "Landlord",
        image: "https://i.pravatar.cc/150?img=14",
        review:
            "Listing my properties on RentNest helped me find reliable tenants much faster than expected.",
    },
    {
        id: 3,
        name: "Nusrat Jahan",
        role: "Tenant",
        image: "https://i.pravatar.cc/150?img=24",
        review:
            "The UI is beautiful, fast and very easy to use. Highly recommended for anyone looking for rental properties.",
    },
    {
        id: 4,
        name: "David Wilson",
        role: "Landlord",
        image: "https://i.pravatar.cc/150?img=60",
        review:
            "RentNest is by far the best rental platform I've used. Professional and reliable.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-muted/30 relative overflow-hidden">

            <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="container mx-auto text-center">
                <span className="font-semibold text-primary">
                    Testimonials
                </span>

                <h2 className="mt-3 text-4xl font-bold">
                    Trusted by Hundreds of Happy Clients
                </h2>

                <p className="mt-4 text-muted-foreground">
                    Discover why landlords and tenants choose RentNest.
                </p>
            </div>

            <Carousel className="container mx-auto mt-10" opts={{ align: "start", loop: true, }} plugins={[
                Autoplay({
                    delay: 4000,
                    stopOnInteraction: false,
                }),
            ]}>
                <CarouselContent>

                    {testimonials.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <Card className="h-full border border-primary bg-muted/40 shadow-lg transition-all duration-300 hover:shadow-2xl">
                                <CardContent className="flex h-full flex-col justify-between  py-4 px-8">

                                    <div>

                                        <div className="mb-4 flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>

                                        <p className="leading-8 text-muted-foreground">
                                            "{item.review}"
                                        </p>

                                    </div>

                                    <div className="mt-4 flex items-center gap-4">

                                        <Avatar className="h-14 w-14">
                                            <AvatarImage src={item.image} />
                                            <AvatarFallback>
                                                {item.name[0]}
                                            </AvatarFallback>
                                        </Avatar>

                                        <div>
                                            <h4 className="font-semibold">
                                                {item.name}
                                            </h4>

                                            <p className="text-sm text-muted-foreground">
                                                {item.role}
                                            </p>
                                        </div>

                                    </div>

                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}

                </CarouselContent>
            </Carousel>
        </section>
    );
}