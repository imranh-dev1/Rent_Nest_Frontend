"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const createRentalRequest = async (payload: {
    propertyId: string;
    leaseMonths: number;
    message: string;
}) => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/rental-requests`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(payload),
        }
    );

    const result = await res.json();

    if (res.ok) {
        revalidateTag("my-rental-requests", "max");
    }

    return result;
};