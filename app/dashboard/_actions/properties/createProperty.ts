'use server';

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers"; 

export const handleCreateProperty = async (data: any) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
    });
    const result = await response.json();

    if (result.success) {
        revalidateTag("properties", "max"); 
    }

    return result;
};