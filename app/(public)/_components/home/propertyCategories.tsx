import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const categories = [
    {
        title: "Apartments",
        description: "Modern city living with premium amenities.",
        count: "245+ Homes",
        image:
            "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
        href: "/properties?type=Apartment",
        size: "large",
    },
    {
        title: "Family Houses",
        description: "Comfortable homes designed for families.",
        count: "180+ Homes",
        image:
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop",
        href: "/properties?type=House",
        size: "large",
    },
    {
        title: "Luxury Villas",
        description: "Exclusive villas with breathtaking views.",
        count: "65+ Homes",
        image:
            "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?q=80&w=1200&auto=format&fit=crop",
        href: "/properties?type=Villa",
        size: "small",
    },
    {
        title: "Studios",
        description: "Compact spaces for modern lifestyles.",
        count: "120+ Homes",
        image:
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
        href: "/properties?type=Studio",
        size: "small",
    },
    {
        title: "Duplex",
        description: "Spacious two-story homes.",
        count: "95+ Homes",
        image:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
        href: "/properties?type=Duplex",
        size: "small",
    },
    {
        title: "Cottages",
        description: "Peaceful countryside living.",
        count: "40+ Homes",
        image:
            "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1200&auto=format&fit=crop",
        href: "/properties?type=Cottage",
        size: "small",
    },
];

export default function PropertyCategories() {
    return (
        <section className="py-20 bg-muted/30 relative overflow-hidden">

            <div className="absolute left-0 top-0 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute bottom-0 right-0 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="container mx-auto px-4">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <span className="inline-flex rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                        Property Types
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight lg:text-5xl">
                        Explore by Property Category
                    </h2>

                    <p className="mt-5 text-lg text-muted-foreground">
                        Browse carefully selected rental properties tailored to every
                        lifestyle—from modern apartments to luxurious villas.
                    </p>
                </div>

                {/* Grid */}

                <div className="grid gap-6 lg:grid-cols-4">

                    {categories.map((category) => (

                        <Link
                            key={category.title}
                            href={category.href}
                            className={`group relative overflow-hidden
                                ${category.size === "large"
                                    ? "lg:col-span-2 h-105"
                                    : "h-80"
                                }`}
                        >

                            {/* Image */}


                            <Image
                                src={category.image}
                                alt={category.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Overlay */}

                            <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent transition group-hover:from-black/70" />

                            {/* Glass Badge */}

                            <div className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                                {category.count}
                            </div>

                            {/* Content */}

                            <div className="absolute bottom-0 left-0 w-full p-8">

                                <p className="mb-3 text-sm uppercase tracking-[0.25em] text-white/70">
                                    Category
                                </p>

                                <h3 className="text-3xl font-bold text-white">
                                    {category.title}
                                </h3>

                                <p className="mt-3 max-w-xs text-white/80">
                                    {category.description}
                                </p>

                                <div className="mt-8 inline-flex items-center gap-2 text-white">

                                    <span className="font-medium transition duration-300 group-hover:text-primary">
                                        Explore Properties
                                    </span>

                                    <ArrowUpRight
                                        className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
                                        size={20}
                                    />

                                </div>

                            </div>

                        </Link>

                    ))}

                </div>
            </div>
        </section>
    );
}