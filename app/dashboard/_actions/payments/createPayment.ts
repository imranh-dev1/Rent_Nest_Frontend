"use server";

import { cookies } from "next/headers";

export const createPayment = async (rentalRequestId: string) => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payments/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
            rentalRequestId,
            provider: "STRIPE",
        }),
    }
    );

    const result = await res.json();

    return result;
};