"use client";

import Link from "next/link";
import { Menu, LogOut } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import NavItem from "./NavItem";
import { sidebarRoutes } from "../../../lib/SidebarRoutes";

interface MobileSidebarProps {
    role: keyof typeof sidebarRoutes;
}

export default function MobileSidebar({
    role,
}: MobileSidebarProps) {
    const routes = sidebarRoutes[role];

    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-72 p-0">
                <SheetHeader className="border-b p-6">
                    <SheetTitle className="text-left">
                        <Link
                            href="/"
                            className="text-2xl font-bold tracking-tight"
                        >
                            Rent
                            <span className="text-primary">Nest</span>
                        </Link>
                    </SheetTitle>
                </SheetHeader>

                <ScrollArea className="h-[calc(100vh-140px)] px-4 py-6">
                    <div className="space-y-2">
                        {routes?.map((route) => (
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

                <div className="p-4">
                    <Button
                        variant="outline"
                        className="w-full justify-start gap-2"
                    >
                        <LogOut className="h-4 w-4" />
                        Logout
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}