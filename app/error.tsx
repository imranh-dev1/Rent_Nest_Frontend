"use client";

import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    return (
        <div className="flex min-h-screen items-center justify-center bg-linear-to-br from-background via-muted/30 to-background px-4">
            <Card className="w-full max-w-lg border-0 shadow-2xl">
                <CardHeader className="items-center text-center space-y-4 pb-2">
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-destructive/10 mx-auto">
                        <AlertTriangle className="h-10 w-10 text-destructive" />
                    </div>

                    <CardTitle className="text-3xl font-bold">
                        Oops! Something went wrong
                    </CardTitle>

                    <CardDescription className="max-w-sm text-base mx-auto">
                        We encountered an unexpected error while loading this page.
                        Please try again or return to the homepage.
                    </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                    <div className="rounded-xl border bg-muted/50 p-4">
                        <p className="text-sm font-medium text-muted-foreground">
                            Error Details
                        </p>

                        <p className="mt-2 wrap-break-word text-sm text-destructive">
                            {error.message || "Unknown error occurred."}
                        </p>

                        {error.digest && (
                            <p className="mt-3 text-xs text-muted-foreground">
                                Error ID: {error.digest}
                            </p>
                        )}
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                            className="flex-1"
                            onClick={() => reset()}
                        >
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Try Again
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            className="flex-1"
                        >
                            <Link href="/">
                                <Home className="mr-2 h-4 w-4" />
                                Back Home
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}