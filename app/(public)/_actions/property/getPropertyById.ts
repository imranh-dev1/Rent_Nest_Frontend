"use server";

export async function getPropertyById(id: string) {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/properties/${id}`,
            {
                cache: "no-store",
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        return result.data;
    } catch (error) {
        console.error(error);

        return null;
    }
}