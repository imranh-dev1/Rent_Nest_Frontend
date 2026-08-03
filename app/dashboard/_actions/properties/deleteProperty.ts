"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";


export async function handleDeleteProperty(id: string) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/properties/${id}`,
        {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );

    const result = await response.json();

    if (result.success) {
        revalidateTag("properties", "max");
    }

    return result;
}