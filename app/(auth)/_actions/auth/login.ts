"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken"
import { loginSchema } from "@/validations/auth.validation";
import { LoginState } from "@/types/auth";


export async function loginAction(
    prevState: LoginState,
    formData: FormData
): Promise<LoginState> {

    const values = { email: formData.get("email"), password: formData.get("password") };

    const validated = loginSchema.safeParse(values);

    if (!validated.success) {
        return {
            success: false,
            message: "Validation failed.",
            errors: validated.error.flatten().fieldErrors,
        };
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(validated.data),
    });

    const result = await response.json();

    console.log(result)

    if (!response.ok) {
        return {
            success: false,
            message: result.message || "Login failed.",
        };
    }

    if (result.success && result.data) {
        const cookieStore = await cookies();
        cookieStore.set("accessToken", result.data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            path: "/",
            maxAge: 60 * 60 * 48,
        });

        cookieStore.set("refreshToken", result.data.refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        const decoded = jwt.decode(result.data.accessToken) as JwtPayload;

        if (decoded.role === "ADMIN") {
            redirect("/dashboard/admin");
        } else if (decoded.role === "LANDLORD") {
            redirect("/dashboard/landlord");
        } else if (decoded.role === "TENANT") {
            redirect("/dashboard/tenant");
        }
    }

    return {
        success: true,
        message: "Login success",
    };


}