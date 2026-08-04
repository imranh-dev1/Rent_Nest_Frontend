"use server";

import { cookies } from "next/headers";

export const getReviews = async (propertyId: string) => { 
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews/${propertyId}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
    });

    return res.json();
};