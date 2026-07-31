import {
    LayoutGrid,
    ArrowUpDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Toolbar({ propertiesCount }: { propertiesCount: number }) {

    return (
        <div className="flex flex-col gap-4 border bg-background p-5 shadow-sm md:flex-row md:items-center md:justify-between">

            <div>

                <h2 className="text-2xl font-bold">
                    {propertiesCount} Properties
                </h2>

                <p className="text-sm text-muted-foreground">
                    Showing the latest verified rental properties.
                </p>

            </div>

            <div className="flex items-center gap-3">

                <Button variant="outline">
                    <ArrowUpDown className="mr-2 h-4 w-4" />
                    Newest
                </Button>

                <Button variant="outline" size="icon">
                    <LayoutGrid className="h-4 w-4" />
                </Button>

            </div>

        </div>
    );
}