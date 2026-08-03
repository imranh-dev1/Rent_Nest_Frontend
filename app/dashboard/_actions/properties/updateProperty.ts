"use server";

import { CreatePropertyPayload } from "@/validations/properties.validation";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";


export async function handleUpdateProperty(id: string, data: CreatePropertyPayload) {

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/properties/${id}`, {
        method: "PATCH",

        headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${accessToken}`,
        },

        body: JSON.stringify(data),

    });


    const result = await response.json();

    if (result.success) {
        revalidateTag("properties", "max");
        revalidateTag("my-properties", "max");
    }

    return result;

}