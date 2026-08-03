"use client";

import Link from "next/link";
import { LogOut } from "lucide-react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import NavItem from "./NavItem";
import { sidebarRoutes } from "../../../lib/SidebarRoutes";

interface DashboardSidebarProps {
    role: keyof typeof sidebarRoutes;
}

export default function DashboardSidebar({
    role,
}: DashboardSidebarProps) {
    const routes = sidebarRoutes[role];


    return (
        <>
            {/* Desktop Sidebar - Fixed */}
            <aside className="fixed top-0 left-0 z-40 hidden md:flex h-screen w-72 flex-col border-r bg-background shadow-lg">
                {/* Logo */}
                <div className="flex h-16 items-center border-b px-6 shrink-0">
                    <Link href="/" className="text-2xl font-bold tracking-tight">
                        Rent<span className="text-primary"> Nest</span>
                    </Link>
                </div>

                {/* Navigation */}
                <ScrollArea className="flex-1 px-4 py-6">
                    <div className="space-y-2">
                        {routes.map((route) => (
                            <NavItem
                                key={route.href}
                                href={route.href}
                                title={route.title}
                                icon={route.icon}
                            />
                        ))}
                    </div>
                </ScrollArea>

                <Separator />

                {/* Footer */}
                <div className="p-4 shrink-0">
                    <Button
                        variant="outline"
                        className="w-full justify-start gap-2"
                    >
                        <LogOut className="h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </aside>

            <div className="hidden md:block w-72 shrink-0" />
        </>
    );
}