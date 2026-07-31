"use client";

import { RotateCcw, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

const amenities = [
    "WiFi",
    "Parking",
    "Lift",
    "Generator",
    "Security",
    "Gas",
    "Electricity",
];

export default function FilterSidebar() {
    return (
        <Card className="p-6 shadow-sm">

            {/* Header */}

            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h2 className="text-xl font-bold">
                        Filters
                    </h2>

                    <p className="text-sm text-muted-foreground">
                        Find properties faster
                    </p>
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                >
                    <RotateCcw className="h-4 w-4" />
                </Button>

            </div>

            <div className="space-y-8">

                {/* Search */}

                <div className="space-y-3">

                    <Label>Search</Label>

                    <div className="relative">

                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                        <Input
                            placeholder="Search property..."
                            className="pl-9"
                        />

                    </div>

                </div>

                {/* Location */}

                <div className="space-y-3">

                    <Label>Location</Label>

                    <Select >

                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select city" />
                        </SelectTrigger>

                        <SelectContent>

                            <SelectItem value="dhaka">
                                Dhaka
                            </SelectItem>

                            <SelectItem value="rajshahi">
                                Rajshahi
                            </SelectItem>

                            <SelectItem value="khulna">
                                Khulna
                            </SelectItem>

                            <SelectItem value="chattogram">
                                Chattogram
                            </SelectItem>

                        </SelectContent>

                    </Select>

                </div>

                {/* Price */}

                <div className="space-y-4">

                    <div className="flex items-center justify-between">

                        <Label>Monthly Rent</Label>

                        <span className="text-sm font-medium text-primary">
                            ৳5k - ৳80k
                        </span>

                    </div>

                    <Slider
                        defaultValue={[25000]}
                        max={80000}
                        min={5000}
                        step={1000}
                    />

                </div>

                {/* Bedrooms */}

                <div className="space-y-3">

                    <Label>Bedrooms</Label>

                    <Select>

                        <SelectTrigger  className="w-full">
                            <SelectValue placeholder="Any" />
                        </SelectTrigger>

                        <SelectContent>

                            <SelectItem value="1">1 Bedroom</SelectItem>

                            <SelectItem value="2">2 Bedrooms</SelectItem>

                            <SelectItem value="3">3 Bedrooms</SelectItem>

                            <SelectItem value="4">4+ Bedrooms</SelectItem>

                        </SelectContent>

                    </Select>

                </div>

                {/* Bathrooms */}

                <div className="space-y-3">

                    <Label>Bathrooms</Label>

                    <Select>

                        <SelectTrigger  className="w-full">
                            <SelectValue placeholder="Any" />
                        </SelectTrigger>

                        <SelectContent>

                            <SelectItem value="1">1 Bathroom</SelectItem>

                            <SelectItem value="2">2 Bathrooms</SelectItem>

                            <SelectItem value="3">3 Bathrooms</SelectItem>

                            <SelectItem value="4">4+ Bathrooms</SelectItem>

                        </SelectContent>

                    </Select>

                </div>

                {/* Property Type */}

                <div className="space-y-4">

                    <Label>Property Type</Label>

                    <div className="space-y-3">

                        {["Apartment", "House", "Villa", "Studio"].map((type) => (
                            <div
                                key={type}
                                className="flex items-center space-x-2"
                            >
                                <Checkbox id={type} />

                                <Label
                                    htmlFor={type}
                                    className="font-normal"
                                >
                                    {type}
                                </Label>

                            </div>
                        ))}

                    </div>

                </div>

                {/* Amenities */}

                <div className="space-y-4">

                    <Label>Amenities</Label>

                    <div className="space-y-3">

                        {amenities.map((item) => (
                            <div
                                key={item}
                                className="flex items-center space-x-2"
                            >
                                <Checkbox id={item} />

                                <Label
                                    htmlFor={item}
                                    className="font-normal"
                                >
                                    {item}
                                </Label>

                            </div>
                        ))}

                    </div>

                </div>

                {/* Availability */}

                <div className="space-y-4">

                    <Label>Availability</Label>

                    <div className="space-y-3">

                        <div className="flex items-center space-x-2">

                            <Checkbox id="available" />

                            <Label htmlFor="available">
                                Available
                            </Label>

                        </div>

                        <div className="flex items-center space-x-2">

                            <Checkbox id="rented" />

                            <Label htmlFor="rented">
                                Rented
                            </Label>

                        </div>

                    </div>

                </div>

                {/* Apply */}

                <Button className="w-full">
                    Apply Filters
                </Button>

            </div>

        </Card>
    );
}