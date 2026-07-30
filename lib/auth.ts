"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";

export async function authenticateUser(accessToken: string, refreshToken: string): Promise<never> {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        path: "/",
        maxAge: 60 * 60 * 48,
    });

    cookieStore.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
    });

    const decoded = jwt.decode(accessToken) as JwtPayload;

    switch (decoded.role) {
        case "ADMIN":
            redirect("/dashboard/admin");

        case "LANDLORD":
            redirect("/dashboard/landlord");

        case "TENANT":
            redirect("/dashboard/tenant");

        default:
            redirect("/");
    }
}