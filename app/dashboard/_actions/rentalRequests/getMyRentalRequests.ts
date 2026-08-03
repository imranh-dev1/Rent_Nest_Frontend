"use server";

import { cookies } from "next/headers";

export const getMyRentalRequests = async () => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rental-requests/my-requests`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "force-cache",
        next: {
            tags: ["my-rental-requests"],
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch rental requests");
    }

    return response.json();
};