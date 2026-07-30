"use server";

import { cookies } from "next/headers";

export async function getCurrentUser() {

    const cookieStores = await cookies()

    const accessToken = cookieStores.get("accessToken")?.value;

    if (!accessToken) {
        return null;
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/me`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
    });

    if (!response.ok) {
        return null;
    }

    const result = await response.json();

    return result.data;
}