"use server";
import { GetPropertiesParams } from "@/types/property";



export async function getProperties(params: GetPropertiesParams = {}) {
    try {
        const searchParams = new URLSearchParams();

        if (params.page) searchParams.set("page", params.page.toString());

        if (params.limit) searchParams.set("limit", params.limit.toString());

        if (params.search) searchParams.set("search", params.search);

        if (params.categoryId)
            searchParams.set("categoryId", params.categoryId);

        if (params.city) searchParams.set("city", params.city);

        if (params.minPrice)
            searchParams.set("minPrice", params.minPrice.toString());

        if (params.maxPrice)
            searchParams.set("maxPrice", params.maxPrice.toString());

        if (params.availability)
            searchParams.set("availability", params.availability);

        if (params.sortBy)
            searchParams.set("sortBy", params.sortBy);

        if (params.sortOrder)
            searchParams.set("sortOrder", params.sortOrder);

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/properties?${searchParams}`,
            {
                cache: "no-store",
            }
        );

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.message);
        }

        return result;
    } catch (error) {
        console.error(error);

        return {
            data: [],
            meta: {
                page: 1,
                limit: 9,
                total: 0,
                totalPage: 1,
            },
        };
    }
}