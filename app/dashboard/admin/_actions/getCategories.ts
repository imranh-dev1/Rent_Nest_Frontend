"use server";

import { cookies } from "next/headers";

export async function getCategories() {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
    }
    );

    return res.json();
}