"use client";

import Link from "next/link";
import {
  CreditCard,
  LogOut,
  Settings,
  User,
} from "lucide-react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface UserDropdownProps {
  user: {
    name: string;
    email: string;
    role: "TENANT" | "LANDLORD" | "ADMIN";
    image?: string | null;
  };
}

export default function UserDropdown({ user }: UserDropdownProps) {
  const initials = user?.name
    .split(" ")
    .map((item) => item[0])
    .join("")
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded-full outline-none ring-offset-background transition hover:opacity-90 focus:ring-2 focus:ring-primary">
          <Avatar className="h-10 w-10 cursor-pointer">
            <AvatarImage src={user?.image ?? ""} />

            <AvatarFallback>
              {initials}
            </AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-72"
      >
        <DropdownMenuLabel>
          <div className="space-y-1">
            <p className="font-semibold">
              {user?.name}
            </p>

            <p className="text-xs text-muted-foreground">
              {user?.email}
            </p>

            <Badge className="mt-2">
              {user?.role}
            </Badge>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={`/dashboard/${user?.role.toLowerCase()}/profile`}>
              <User className="mr-2 h-4 w-4" />
              Profile
            </Link>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </DropdownMenuItem>

          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            Billing
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="text-destructive focus:text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}