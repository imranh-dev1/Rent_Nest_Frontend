import Link from "next/link";
import { ArrowLeft, Home, SearchX } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function NotFound() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/30 px-6">
            <Card className="w-full max-w-2xl rounded-2xl border shadow-lg">
                <CardContent className="flex flex-col items-center py-14 text-center">

                    <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                        <SearchX className="h-12 w-12 text-primary" />
                    </div>

                    <h1 className="text-7xl font-extrabold tracking-tight text-primary">
                        404
                    </h1>

                    <h2 className="mt-4 text-3xl font-bold">
                        Page Not Found
                    </h2>

                    <p className="mt-3 max-w-md text-muted-foreground">
                        Sorry, the page you're looking for doesn't exist,
                        may have been moved, or is temporarily unavailable.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

                        <Button asChild>
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" />
                                Back to Home
                            </Link>
                        </Button>

                        <Button
                            variant="outline"
                            onClick={() => window.history.back()}
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Go Back
                        </Button>

                    </div>

                </CardContent>
            </Card>
        </div>
    );
}