'use server'
 

import { cookies } from "next/headers";

interface CreateReviewPayload {
    rating: number;
    comment: string;
}

export const createReview = async (
    propertyId: string,
    payload: CreateReviewPayload
) => {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/reviews/${propertyId}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: accessToken!,
            },
            body: JSON.stringify(payload),
        }
    );

    const result = await res.json(); 

    return result;
};