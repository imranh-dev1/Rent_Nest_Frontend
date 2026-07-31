import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="container flex min-h-[70vh] flex-col items-center justify-center space-y-5">

            <h1 className="text-5xl font-bold">
                404
            </h1>

            <h2 className="text-2xl font-semibold">
                Property Not Found
            </h2>

            <p className="text-muted-foreground">
                This property may have been removed or doesn't exist.
            </p>

            <Button asChild>

                <Link href="/properties">
                    Browse Properties
                </Link>

            </Button>

        </div>
    );
}