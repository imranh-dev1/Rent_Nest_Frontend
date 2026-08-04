"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export async function updateRentalRequestStatus(
    requestId: string,
    status: "APPROVED" | "REJECTED"
) {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rental-requests/${requestId}/status`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify({ status }),
        }
    );

    const result = await res.json();

    if (res.ok) {
        revalidateTag("my-rental-requests", "max");
    }

    return result;
}