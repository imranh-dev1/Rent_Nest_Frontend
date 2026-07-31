"use client";

import { Bell, Menu, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import MobileSidebar from "./MobileSidebar";
import UserDropdown from "./UserDropdown";

type UserRole = "TENANT" | "LANDLORD" | "ADMIN";

interface DashboardHeaderProps {
    role: UserRole;
    title: string;
    description?: string;
    user: any;
}

export default function DashboardHeader({ role, title, description, user }: DashboardHeaderProps) {

    return (
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
            <div className="flex h-16 items-center justify-between px-6">

                {/* Left */}

                <div className="flex items-center gap-4">

                    <div className="md:hidden">
                        <MobileSidebar role={role} />
                    </div>

                    <Separator
                        orientation="vertical"
                        className="hidden h-6 md:block"
                    />

                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">
                            {title}
                        </h1>

                        {description && (
                            <p className="text-sm text-muted-foreground">
                                {description}
                            </p>
                        )}
                    </div>

                </div>

                {/* Right */}

                <div className="flex items-center gap-2">

                    <Button
                        variant="ghost"
                        size="icon"
                    >
                        <Search className="h-5 w-5" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="relative"
                    >
                        <Bell className="h-5 w-5" />

                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                    </Button>

                    <UserDropdown user={user} />

                </div>

            </div>
        </header>
    );
}