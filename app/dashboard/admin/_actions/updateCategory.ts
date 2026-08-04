"use server";

import { cookies } from "next/headers";

export async function updateCategory(
    id: string,
    payload: {
        name: string;
        description: string;
    }
) {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories/${id}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(payload),
        }
    );

    const result = await res.json();

    return result;
}