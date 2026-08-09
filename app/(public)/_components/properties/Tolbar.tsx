"use client";

import {
    LayoutGrid,
    ArrowUpDown,
    Check,
} from "lucide-react";

import {
    usePathname,
    useRouter,
    useSearchParams,
} from "next/navigation";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ToolbarProps {
    propertiesCount: number;
}

const sortOptions = [
    {
        label: "Newest",
        sortBy: "createdAt",
        sortOrder: "desc",
    },
    {
        label: "Oldest",
        sortBy: "createdAt",
        sortOrder: "asc",
    },
    {
        label: "Rent: Low to High",
        sortBy: "rentAmount",
        sortOrder: "asc",
    },
    {
        label: "Rent: High to Low",
        sortBy: "rentAmount",
        sortOrder: "desc",
    },
];

export default function Toolbar({
    propertiesCount,
}: ToolbarProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const currentSortBy =
        searchParams.get("sortBy") ?? "createdAt";

    const currentSortOrder =
        searchParams.get("sortOrder") ?? "desc";

    const currentSort =
        sortOptions.find(
            (option) =>
                option.sortBy === currentSortBy &&
                option.sortOrder === currentSortOrder
        ) ?? sortOptions[0];

    const handleSort = (
        sortBy: string,
        sortOrder: string
    ) => {
        const params = new URLSearchParams(
            searchParams.toString()
        );

        params.set("sortBy", sortBy);
        params.set("sortOrder", sortOrder);

        // Reset pagination when sorting
        params.set("page", "1");

        router.push(`${pathname}?${params.toString()} `);
    };

    return (
        <div className="flex flex-col gap-4 border bg-background p-5 shadow-sm md:flex-row md:items-center md:justify-between">

            {/* Property Count */}
            <div>
                <h2 className="text-2xl font-bold">
                    {propertiesCount} Properties
                </h2>

                <p className="text-sm text-muted-foreground">
                    Showing the latest verified rental properties.
                </p>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">

                {/* Sort */}
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            <ArrowUpDown className="mr-2 h-4 w-4" />

                            {currentSort.label}
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent align="end">
                        {sortOptions.map((option) => {
                            const isActive =
                                option.sortBy === currentSortBy &&
                                option.sortOrder === currentSortOrder;

                            return (
                                <DropdownMenuItem
                                    key={`${option.sortBy} -${option.sortOrder} `}
                                    onClick={() =>
                                        handleSort(
                                            option.sortBy,
                                            option.sortOrder
                                        )
                                    }
                                    className="flex cursor-pointer items-center justify-between"
                                >
                                    <span>
                                        {option.label}
                                    </span>

                                    {isActive && (
                                        <Check className="ml-4 h-4 w-4" />
                                    )}
                                </DropdownMenuItem>
                            );
                        })}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
} 