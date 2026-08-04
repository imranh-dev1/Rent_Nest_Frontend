"use server";

import { cookies } from "next/headers";

export async function getDashboardStatistics() {
    const cookieStore = await cookies();

    const accessToken =
        cookieStore.get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/dashboard`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
    }
    );

    return res.json();
}