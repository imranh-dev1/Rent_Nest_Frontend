"use server";

interface Props {
    categoryId: string;
    currentId: string;
}

export async function getSimilarProperties({
    categoryId,
    currentId,
}: Props) {

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/properties?categoryId=${categoryId}&limit=4`, {
        cache: "no-store",
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message);
    }

    return result.data.filter((property: any) => property.id !== currentId);
}