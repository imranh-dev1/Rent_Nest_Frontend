"use server";

import { cookies } from "next/headers";
import { ProfileFormValues } from "@/types/auth";

export async function updateProfile(payload: ProfileFormValues) {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    if (!accessToken) {
        return {
            success: false,
            message: "Unauthorized",
        };
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/update-me`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload),
    }
    );

    const result = await response.json();

    return result;
}