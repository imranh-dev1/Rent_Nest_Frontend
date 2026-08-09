"use client";

import { useEffect, useState } from "react";
import {
    RotateCcw,
    Search,
} from "lucide-react";
import {
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";

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

export default function FilterSidebar() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState("");
    const [city, setCity] = useState("");
    const [price, setPrice] = useState([25000]);
    const [availability, setAvailability] = useState(""); 

    useEffect(() => {
        setSearch(searchParams.get("search") ?? "");
        setCity(searchParams.get("city") ?? "");

        setPrice([
            Number(searchParams.get("maxPrice") ?? 25000),
        ]);

        setAvailability(
            searchParams.get("availability") ?? ""
        );
    }, [searchParams]);

    const handleApplyFilters = () => {
        const params = new URLSearchParams(
            searchParams.toString()
        );

        if (search.trim()) {
            params.set("search", search.trim());
        } else {
            params.delete("search");
        }

        if (city) {
            params.set("city", city);
        } else {
            params.delete("city");
        }

        params.set("minPrice", "5000");
        params.set("maxPrice", price[0].toString()); 

        params.set("page", "1");

        router.push(`${pathname}?${params.toString()}`);
    };

    const handleReset = () => {
        setSearch("");
        setCity("");
        setPrice([25000]);
        setAvailability("");

        router.push(pathname);
    };

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
                    onClick={handleReset}
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
                            value={search}
                            onChange={(e) =>
                                setSearch(e.target.value)
                            }
                            placeholder="Search property..."
                            className="pl-9"
                        />
                    </div>
                </div>

                {/* Location */}
                <div className="space-y-3">
                    <Label>Location</Label>

                    <Select
                        value={city}
                        onValueChange={setCity}
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select city" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="Dhaka">
                                Dhaka
                            </SelectItem>

                            <SelectItem value="Rajshahi">
                                Rajshahi
                            </SelectItem>

                            <SelectItem value="Khulna">
                                Khulna
                            </SelectItem>

                            <SelectItem value="Chattogram">
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
                            ৳5,000 - ৳
                            {price[0].toLocaleString()}
                        </span>
                    </div>

                    <Slider
                        value={price}
                        onValueChange={setPrice}
                        max={80000}
                        min={5000}
                        step={1000}
                    />
                </div>

                {/* Bedrooms */}
                <div className="space-y-3">
                    <Label>Bedrooms</Label>

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Any" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="1">
                                1 Bedroom
                            </SelectItem>

                            <SelectItem value="2">
                                2 Bedrooms
                            </SelectItem>

                            <SelectItem value="3">
                                3 Bedrooms
                            </SelectItem>

                            <SelectItem value="4">
                                4+ Bedrooms
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Bathrooms */}
                <div className="space-y-3">
                    <Label>Bathrooms</Label>

                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Any" />
                        </SelectTrigger>

                        <SelectContent>
                            <SelectItem value="1">
                                1 Bathroom
                            </SelectItem>

                            <SelectItem value="2">
                                2 Bathrooms
                            </SelectItem>

                            <SelectItem value="3">
                                3 Bathrooms
                            </SelectItem>

                            <SelectItem value="4">
                                4+ Bathrooms
                            </SelectItem>
                        </SelectContent>
                    </Select>
                </div> 

                {/* Apply */}
                <Button
                    onClick={handleApplyFilters}
                    className="w-full"
                >
                    Apply Filters
                </Button>
            </div>
        </Card>
    );
}