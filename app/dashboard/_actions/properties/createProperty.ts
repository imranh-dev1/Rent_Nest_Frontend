'use server';

import { cookies } from "next/headers";

export const handleCreateProperty = async (data: any) => {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;

    // console.log("Payload =>", JSON.stringify(data, null, 2));
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            body: JSON.stringify(data),
        }
    );

    console.log("Status:", response.status);

    return await response.json();
    console.log("Response:", data);
};