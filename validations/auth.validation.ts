import { z } from "zod";

export const loginSchema = z.object({
    email: z.email("Please enter a valid email address."),
    password: z.string().min(6),
});

export const registerSchema = z
    .object({
        name: z.string().min(2),
        email: z.email(),
        password: z.string().min(6),
        confirmPassword: z.string().min(6),
        role: z.enum(["TENANT", "LANDLORD"]),
    })
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            message: "Passwords do not match.",
            path: ["confirmPassword"],
        }
    );

export const forgotPasswordSchema = z.object({
    email: z.email(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;