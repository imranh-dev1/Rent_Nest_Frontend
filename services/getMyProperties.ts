import { cookies } from "next/headers";


export const getMyProperties = async () => {

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;


    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties/my-properties`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error('Failed to fetch properties');
    }

    return response.json();
};