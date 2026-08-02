"use server";

import { revalidateTag } from "next/cache";

export async function getCategories() {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/categories`,
            {
                method: "GET",
                next: {
                    tags: ["categories"],
                },
            }
        );

        const result = await res.json();

        return result.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}