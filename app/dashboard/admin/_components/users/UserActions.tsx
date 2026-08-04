"use client";

import {
    MoreHorizontal,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function UserActions({
    user,
}: {
    user: any;
}) {
    return (
        <DropdownMenu>

            <DropdownMenuTrigger asChild>

                <Button
                    variant="ghost"
                    size="icon"
                >
                    <MoreHorizontal className="h-4 w-4" />
                </Button>

            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">

                <DropdownMenuItem>
                    View Details
                </DropdownMenuItem>

                <DropdownMenuItem>
                    Change Role
                </DropdownMenuItem>

                <DropdownMenuItem>
                    {user.status === "ACTIVE"
                        ? "Block User"
                        : "Unblock User"}
                </DropdownMenuItem>

            </DropdownMenuContent>

        </DropdownMenu>
    );
}