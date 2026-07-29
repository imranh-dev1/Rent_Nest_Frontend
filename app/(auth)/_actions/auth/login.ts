"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { loginSchema } from "@/validations/auth.validation";
import { LoginState } from "@/types/auth";


export async function loginAction(
    prevState: LoginState,
    formData: FormData
): Promise<LoginState> {
    try {
        const values = {
            email: formData.get("email"),
            password: formData.get("password"),
        };

        const validated = loginSchema.safeParse(values);

        console.log(values)

        if (!validated.success) {
            return {
                success: false,
                message: "Validation failed.",
                errors: validated.error.flatten().fieldErrors,
            };
        }

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(validated.data),
            }
        );

        const result = await response.json();

        console.log(result)

        if (!response.ok) {
            return {
                success: false,
                message: result.message || "Login failed.",
            };
        }

        (await cookies()).set("accessToken", result.data.accessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
        });

        return result;
        // const role = result.data.user.role;

        // if (role === "ADMIN") {
        //     redirect("/dashboard/admin");
        // }

        // if (role === "LANDLORD") {
        //     redirect("/dashboard/landlord");
        // }

        // redirect("/dashboard/tenant");

    } catch (error) {
        console.error(error);

        return {
            success: false,
            message: "Something went wrong.",
        };
    }
}