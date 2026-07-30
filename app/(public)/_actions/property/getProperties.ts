"use server";

export async function getProperties() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties`, {
            method: "GET",
            cache: "no-store",
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message || "Failed to fetch properties");
        }

        return result.data;
    } catch (error) {
        console.error("Get Properties Error:", error);
        return [];
    }
}