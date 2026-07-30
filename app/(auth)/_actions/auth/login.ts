"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken"
import { loginSchema } from "@/validations/auth.validation";
import { LoginState } from "@/types/auth";
import { authenticateUser } from "@/lib/auth";


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

    if (!response.ok) {
        return result
    }

    if (result.success && result.data) {
        await authenticateUser(result.data.accessToken, result.data.refreshToken);
    }

    return result;
}