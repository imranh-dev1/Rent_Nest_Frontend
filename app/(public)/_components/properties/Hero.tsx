import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b bg-linear-to-br from-primary/10 via-background to-primary/5">

            <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

            <div className="container relative mx-auto px-4 py-20">

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full border bg-background px-4 py-1 text-sm font-medium text-primary">
                        Browse Properties
                    </span>

                    <h1 className="mt-6 text-5xl font-bold tracking-tight">
                        Find Your Dream Rental Property
                    </h1>

                    <p className="mt-5 text-lg text-muted-foreground">
                        Discover verified apartments, houses, villas and studios
                        across Bangladesh.
                    </p>

                    <div className="mt-10 flex flex-col gap-4 border bg-background p-3 shadow-xl md:flex-row">

                        <Input
                            placeholder="Search by title or location..."
                            className="border-0 shadow-none"
                        />

                        <Button size="lg">
                            <Search className="mr-2 h-5 w-5" />
                            Search
                        </Button>

                    </div>

                </div>

            </div>

        </section>
    );
}