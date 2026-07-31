"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { IProperty } from "@/types/property";

interface Props {
    property: IProperty;
}

export default function PropertyGallery({
    property,
}: Props) {
    const images =
        property.images?.length > 0
            ? property.images
            : [
                "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
            ];

    return (
        <div className="space-y-3">

            <div className="grid gap-3 lg:grid-cols-4">

                {/* Main Image */}

                <div className="relative h-125 overflow-hidden lg:col-span-2">

                    <Image
                        src={images[0]}
                        alt={property.title}
                        fill
                        priority
                        className="object-cover transition duration-500 hover:scale-105"
                    />

                </div>

                {/* Right Images */}

                <div className="grid gap-3 lg:col-span-2 lg:grid-cols-2">

                    {images.slice(1, 5).map((image, index) => (
                        <div
                            key={index}
                            className="relative h-75 overflow-hidden"
                        >
                            <Image
                                src={image}
                                alt={`Property ${index}`}
                                fill
                                className="object-cover transition duration-500 hover:scale-105"
                            />
                        </div>
                    ))}

                </div>

            </div>

            {/* View All */}

            <div className="flex justify-end">

                <Dialog>

                    <DialogTrigger asChild>

                        <Button variant="outline">

                            <ImageIcon className="mr-2 h-4 w-4" />

                            View All Photos

                        </Button>

                    </DialogTrigger>

                    <DialogContent className="max-w-6xl">

                        <DialogHeader>

                            <DialogTitle>
                                {property.title}
                            </DialogTitle>

                        </DialogHeader>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative h-72 overflow-hidden rounded-xl"
                                >
                                    <Image
                                        src={image}
                                        alt={`Property ${index}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}

                        </div>

                    </DialogContent>

                </Dialog>

            </div>

        </div>
    );
}