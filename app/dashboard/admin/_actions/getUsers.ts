"use server";

import { cookies } from "next/headers";

export async function getUsers(query = "") {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/users${query}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        cache: "no-store",
    });

    return res.json();
}