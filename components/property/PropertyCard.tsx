import Image from "next/image";
import Link from "next/link";
import {
    Bath,
    BedDouble,
    Heart,
    MapPin,
    Maximize,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IProperty } from "@/types/property";

interface PropertyCardProps {
    property: IProperty;
}

export default function PropertyCard({
    property,
}: PropertyCardProps) {
    return (
        <Card className="group overflow-hidden border hover:border-primary bg-background p-0 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">


            <div className="relative h-64 overflow-hidden">

                <Image
                    src={
                        property.images?.[0] ||
                        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1470&auto=format&fit=crop"
                    }
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                <Badge className="absolute left-4 top-4 rounded-full px-3 py-1">
                    {property.category.name}
                </Badge>

                <Badge
                    className={`absolute right-4 top-4 rounded-full px-3 py-1 text-white ${property.availability === "AVAILABLE"
                        ? "bg-emerald-600 hover:bg-emerald-700"
                        : "bg-red-500 hover:bg-red-600 "
                        }`}
                >
                    {property.availability}
                </Badge>

                <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-4 right-4 rounded-full"
                >
                    <Heart className="h-5 w-5" />
                </Button>
            </div>

            <div className="space-y-6 p-6">

                <div className="flex items-center justify-between">

                    <div>
                        <h2 className="text-3xl font-bold text-primary">
                            ৳{property.rentAmount.toLocaleString()}
                        </h2>

                        <p className="text-sm text-muted-foreground">
                            Per Month
                        </p>
                    </div>

                </div>


                <div>

                    <h3 className="line-clamp-1 text-xl font-bold">
                        {property.title}
                    </h3>

                    <div className="mt-2 flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary" />

                        <span className="line-clamp-1">
                            {property.address}, {property.city}
                        </span>
                    </div>

                </div>

                <div className="flex items-center justify-between border group-hover:border-primary transition-all duration-500 p-4">

                    <div className="flex flex-1 flex-col items-center">

                        <BedDouble className="mb-2 h-5 w-5 text-primary" />

                        <span className="font-semibold">
                            {property.bedrooms}
                        </span>

                        <span className="text-xs text-muted-foreground">
                            Beds
                        </span>

                    </div>

                    <div className="h-10 w-px bg-border" />

                    <div className="flex flex-1 flex-col items-center">

                        <Bath className="mb-2 h-5 w-5 text-primary" />

                        <span className="font-semibold">
                            {property.bathrooms}
                        </span>

                        <span className="text-xs text-muted-foreground">
                            Baths
                        </span>

                    </div>

                    <div className="h-10 w-px bg-border" />

                    <div className="flex flex-1 flex-col items-center">

                        <Maximize className="mb-2 h-5 w-5 text-primary" />

                        <span className="font-semibold">
                            {property.area}
                        </span>

                        <span className="text-xs text-muted-foreground">
                            Sqft
                        </span>

                    </div>

                </div>


                <div className="flex flex-wrap gap-2">

                    {property.amenities.slice(0, 3).map((item) => (
                        <Badge
                            key={item}
                            variant="secondary"
                            className="rounded-full"
                        >
                            {item}
                        </Badge>
                    ))}

                    {property.amenities.length > 4 && (
                        <Badge
                            variant="outline"
                            className="rounded-full"
                        >
                            +{property.amenities.length - 3}
                        </Badge>
                    )}

                </div>

                {/* Footer */}

                <div className="flex items-center justify-between border-t pt-5">

                    <div className="flex items-center gap-3">

                        <Avatar className="h-11 w-11">

                            <AvatarImage
                                src={property.landlord.profileImg ?? ""}
                            />

                            <AvatarFallback>
                                {property.landlord.name
                                    .charAt(0)
                                    .toUpperCase()}
                            </AvatarFallback>

                        </Avatar>

                        <div>

                            <p className="font-semibold">
                                {property.landlord.name}
                            </p>

                            <p className="text-xs text-muted-foreground">
                                Landlord
                            </p>

                        </div>

                    </div>

                    <Link  href={`/properties/${property.id}`}>
                        <Button className="cursor-pointer">
                            View Details
                        </Button>
                    </Link>

                </div>

            </div>
        </Card>
    );
}