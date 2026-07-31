"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavItemProps {
    href?: string;
    title: string;
    icon: LucideIcon;
    onClick?: () => void;
}

export default function NavItem({
    href,
    title,
    icon: Icon,
    onClick,
}: NavItemProps) {
    const pathname = usePathname();

    const isActive = href && (pathname === href || pathname.startsWith(`${href}/`));

    const className = cn("w-full justify-start gap-3",
        isActive
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "text-muted-foreground hover:bg-muted hover:text-foreground"
    );

    if (href) {
        return (
            <Button asChild variant="ghost" className={className}>
                <Link href={href}>
                    <Icon className="h-5 w-5" />
                    {title}
                </Link>
            </Button>
        );
    }

    return (
        <Button
            onClick={onClick}
            className={className}
        >
            <Icon className="h-5 w-5" />
            {title}
        </Button>
    );
}