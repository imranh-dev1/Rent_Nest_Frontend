"use server";

import { cookies } from "next/headers";


export const getPaymentById = async (id: string) => {

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;


    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/payments/${id}`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-cache",
    });

    if (!response.ok) {
        throw new Error('Failed to fetch payment details');
    }

    return response.json();
};