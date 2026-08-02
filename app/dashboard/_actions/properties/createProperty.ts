'use server';

import { cookies } from "next/headers";
import { PropertyFormValues } from "../../landlord/_components/createPropertyForm";

export const handleCreateProperty = async (data: PropertyFormValues) => {

    console.log("Database Ready Tokenized Data Object Received:", data);

    const cookiesStore = await cookies();
    const accessToken = cookiesStore.get("accessToken")?.value;

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        method: "POST",
        body: JSON.stringify(data)
    });

    const result = await response.json();

    console.log("Database Ready Tokenized Data Object Sent:", result);

    return result;

}