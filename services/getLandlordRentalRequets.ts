import { cookies } from "next/headers";


export const getLandlordRentalRequests = async () => {

    const cookieStore = await cookies();
    const accessToken = cookieStore.get("accessToken")?.value;


    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/rental-requests/landlord`, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error('Failed to fetch rental requests');
    }

    return response.json();
};