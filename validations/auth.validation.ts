import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address."),
  password: z.string().min(6),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
  role: z.enum(["TENANT", "LANDLORD"]),
})
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

export const forgotPasswordSchema = z.object({
  email: z.email(),
});


export const profileSchema = z.object({
  name: z.string().min(2, "Name is required"),

  email: z.string().email(),

  phone: z
    .string()
    .optional()
    .or(z.literal("")),

  profileImg: z.string().optional(),

  role: z.enum([
    "ADMIN",
    "LANDLORD",
    "TENANT",
  ]),

  status: z.enum([
    "ACTIVE",
    "BLOCKED",
  ]),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;



export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;