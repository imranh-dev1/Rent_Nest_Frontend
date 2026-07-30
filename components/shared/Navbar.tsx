"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { IUser } from "@/types/auth";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";

import {
    LayoutDashboard,
    LogOut,
    Settings,
    UserIcon,
} from "lucide-react";
import { logout } from "@/app/(auth)/_actions/auth/logout";
import { toast } from "sonner";

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

interface NavbarProps {
    user: IUser | null;
}

export default function Navbar({ user }: NavbarProps) {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        const result = await logout();

        if (result.success) {
            toast.success(result.message);
            setTimeout(() => {
                router.push("/");
            }, 1000);
        }
    };

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

                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-10 w-10 rounded-full p-0 cursor-pointer">
                                    <Avatar className="h-10 w-10 border border-primary">
                                        <AvatarImage
                                            src={user.profileImg ?? ""}
                                            alt={user.name}
                                        />
                                        <AvatarFallback>
                                            {user.name.slice(0, 2).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>
                                </Button>
                            </DropdownMenuTrigger>

                            <DropdownMenuContent
                                align="end"
                                className="w-72"
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 p-3">
                                    <Avatar className="h-12 w-12 border border-primary">
                                        <AvatarImage src={user.profileImg ?? ""} />
                                        <AvatarFallback>
                                            {user.name.slice(0, 2).toUpperCase()}
                                        </AvatarFallback>
                                    </Avatar>

                                    <div className="flex flex-col">
                                        <span className="font-semibold">
                                            {user.name}
                                        </span>

                                        <span className="text-xs text-muted-foreground">
                                            {user.email}
                                        </span>

                                        <span className="mt-1 w-fit bg-primary px-2 py-1 text-xs font-medium text-white">
                                            {user.role}
                                        </span>
                                    </div>
                                </div>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem asChild>
                                    <Link href="/dashboard/tenant">
                                        <LayoutDashboard className="mr-2 h-4 w-4" />
                                        Dashboard
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="/dashboard/tenant/profile">
                                        <User className="mr-2 h-4 w-4" />
                                        My Profile
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuItem asChild>
                                    <Link href="/dashboard/tenant/settings">
                                        <Settings className="mr-2 h-4 w-4" />
                                        Settings
                                    </Link>
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />

                                <DropdownMenuItem
                                    onClick={handleLogout}
                                    className="cursor-pointer text-red-600"
                                >
                                    <LogOut className="mr-2 h-4 w-4" />
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <Link href="/login">
                            <Button variant="outline">
                                <UserIcon className="mr-2 size-4" />
                                Login
                            </Button>
                        </Link>
                    )}

                    <Link className="ml-2" href="/properties">

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

            {
                open && (
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
                )
            }
        </header >
    );
}