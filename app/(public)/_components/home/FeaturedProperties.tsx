import Link from "next/link";
import { Button } from "@/components/ui/button";
import PropertyCard from "@/components/property/PropertyCard";
import { IProperty } from "@/types/property";
import { MoveRight } from "lucide-react";
import { Pagination } from "@/components/ui/pagination";

interface FeaturedProperties {
    properties: IProperty[];
}

export default function FeaturedProperties({ properties }: FeaturedProperties) {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                {/* Heading */}

                <div className="mb-10 flex items-center justify-between">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
                            Featured Properties
                        </span>

                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Explore Our Featured Listings
                        </h2>

                        <p className="mt-3 max-w-2xl text-muted-foreground">
                            Browse our hand-picked rental properties with premium
                            locations, modern amenities and affordable pricing.
                        </p>
                    </div>

                    <Link href="/properties">
                        <Button variant="outline">
                            View All <MoveRight />
                        </Button>
                    </Link>
                </div>

                {/* Grid */}

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {properties.map((property) => (<PropertyCard
                        key={property.id}
                        property={property}
                    />))}
                </div> 
            </div>
        </section>
    );
}