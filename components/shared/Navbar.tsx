"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Heart,
    Home,
    Menu,
    Search,
    User,
} from "lucide-react";

import logo from "@/public/assets/Rent-Nest-logo.png"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navItems = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Properties",
        href: "/properties",
    },
    {
        title: "Apartments",
        href: "/apartments",
    },
    {
        title: "Agents",
        href: "/agents",
    },
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export default function Navbar() {
    const pathname = usePathname();

    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
            <div className="container mx-auto flex h-24 items-center justify-between px-4">

                {/* Logo */}

                <Link
                    href="/"
                    className="flex items-center gap-2"
                >
                    <Image src={logo} width={70} height={70} alt="Rent Nest" />

                    <span className="text-xl font-bold">
                        RentNest
                    </span>
                </Link>

                {/* Desktop */}

                <nav className="hidden items-center gap-8 lg:flex">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === item.href
                                    ? "text-primary"
                                    : "text-muted-foreground"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </nav>

                {/* Right */}

                <div className="hidden items-center gap-2 lg:flex">

                    <Button
                        size="icon"
                        variant="ghost"
                    >
                        <Search className="size-5" />
                    </Button>

                    <Button
                        size="icon"
                        variant="ghost"
                    >
                        <Heart className="size-5" />
                    </Button>

                    <Link href="/login">
                        <Button className="cursor-pointer"
                            variant="outline">
                            <User className="mr-2 size-4" />
                            Login
                        </Button>
                    </Link>

                    <Link href="/properties">

                        <Button className="cursor-pointer">
                            <Home className="mr-2 size-4" />
                            List Property
                        </Button>
                    </Link>
                </div>

                {/* Mobile */}

                <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <Menu className="size-6" />
                </Button>
            </div>

            {open && (
                <div className="border-t bg-background lg:hidden">
                    <nav className="container mx-auto flex flex-col gap-2 px-4 py-4">

                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={cn(
                                    "rounded-md px-3 py-2 text-sm transition hover:bg-muted",
                                    pathname === item.href &&
                                    "bg-muted text-primary"
                                )}
                            >
                                {item.title}
                            </Link>
                        ))}

                        <Button
                            className="mt-4"
                            variant="outline"
                        >
                            Login
                        </Button>

                        <Button>
                            List Property
                        </Button>
                    </nav>
                </div>
            )}
        </header>
    );
}