import { authenticateUser } from "@/lib/auth";
import { RegisterState } from "@/types/auth";
import { registerSchema } from "@/validations/auth.validation";

export async function registerAction(
    prevState: RegisterState,
    formData: FormData
): Promise<RegisterState> {
    const values = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        confirmPassword: formData.get("confirmPassword"),
        role: formData.get("role"),
        // profilePhoto: formData.get("profilePhoto"),
    };

    const validated = registerSchema.safeParse(values);

    if (!validated.success) {
        return {
            success: false,
            message: "Validation failed.",
            errors: validated.error.flatten().fieldErrors,
        };
    }
    const payload = {
        name: validated.data.name,
        email: validated.data.email,
        password: validated.data.password,
        role: validated.data.role,
    };

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
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