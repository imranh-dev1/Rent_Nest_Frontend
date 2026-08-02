"use server";

import { CreatePropertyPayload } from "@/validations/properties.validation";
import { cookies } from "next/headers";


export async function handleUpdateProperty(id: string, data: CreatePropertyPayload) {

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;


    console.log(
        "TOKEN:",
        accessToken ? "FOUND" : "NOT FOUND"
    );


    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/properties/${id}`,
        {
            method: "PATCH",

            headers: {
                "Content-Type": "application/json",

                Authorization: `Bearer ${accessToken}`,
            },

            body: JSON.stringify(data),

        }
    );


    const result = await response.json();


    console.log(
        "BACKEND RESPONSE:",
        result
    );


    return result;

}