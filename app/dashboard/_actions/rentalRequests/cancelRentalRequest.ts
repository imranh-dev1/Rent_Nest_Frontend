"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export async function cancelRentalRequest(requestId: string) {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rental-requests/${requestId}/cancel`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    }
    );

    const result = await res.json();

    revalidateTag("my-rental-requests", "max");

    console.log(result)
    return result;
}