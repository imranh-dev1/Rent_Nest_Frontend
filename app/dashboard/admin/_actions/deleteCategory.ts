"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export async function deleteCategory(id: string) {
    const token = (await cookies()).get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories/${id}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    const data = await res.json();

    return data;
}

