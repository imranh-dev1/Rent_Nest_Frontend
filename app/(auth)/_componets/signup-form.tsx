"use client";

import { useActionState, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { toast } from "sonner";

import {
  registerSchema,
  RegisterFormData,
} from "@/validations/auth.validation";
import { RegisterState } from "@/types/auth";
import { registerAction } from "@/app/(auth)/_actions/auth/register";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const initialState: RegisterState = {
  success: false,
  message: "",
};

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [state, formAction, pending] = useActionState(registerAction,initialState);

  const {register,setError,formState: { errors },} = useForm<RegisterFormData>({resolver: zodResolver(registerSchema),});

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      return;
    }

    toast.error(state.message);

    Object.entries(state.errors ?? {}).forEach(([key, value]) => {
      if (value?.length) {
        setError(key as keyof RegisterFormData, {
          type: "server",
          message: value[0],
        });
      }
    });
  }, [state, setError]);

  return (
    <div className={cn("container mx-auto", className)} {...props}>
      <Card className="overflow-hidden p-0 shadow-xl">
        <CardContent className="grid p-0 lg:grid-cols-2">
          {/* Left Side */}
          <div className="flex items-center">
            <form
              action={formAction}
              className="w-full space-y-6 p-8 lg:p-14"
            >
              <FieldGroup>
                <div className="space-y-2 text-center">
                  <h1 className="text-2xl font-bold">
                    Create Account
                  </h1>

                  <p className="text-muted-foreground">
                    Join RentNest and find your perfect home.
                  </p>
                </div>

                {/* Name */}
                <Field>
                  <FieldLabel>Full Name</FieldLabel>

                  <Input
                    {...register("name")}
                    placeholder="John Doe"
                  />

                  {errors.name && (
                    <FieldDescription className="text-red-500">
                      {errors.name.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* Email */}
                <Field>
                  <FieldLabel>Email Address</FieldLabel>

                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                  />

                  {errors.email && (
                    <FieldDescription className="text-red-500">
                      {errors.email.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* Profile Photo */}
                <Field>
                  <FieldLabel>Profile Photo</FieldLabel>

                  <Input
                    type="file"
                    name="profilePhoto"
                    accept="image/*"
                  />

                  <FieldDescription>
                    JPG, PNG or WEBP (Max 5MB)
                  </FieldDescription>
                </Field>

                {/* Role */}
                <Field>
                  <FieldLabel>Account Type</FieldLabel>

                  <select
                    {...register("role")}
                    className="flex h-9 w-full border border-input bg-background px-3 text-sm"
                  >
                    <option value="TENANT">Tenant</option>
                    <option value="LANDLORD">Landlord</option>
                  </select>

                  {errors.role && (
                    <FieldDescription className="text-red-500">
                      {errors.role.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* Password */}
                <Field>
                  <FieldLabel>Password</FieldLabel>

                  <div className="relative">
                    <Input
                      {...register("password")}
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter password"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  {errors.password && (
                    <FieldDescription className="text-red-500">
                      {errors.password.message}
                    </FieldDescription>
                  )}
                </Field>

                {/* Confirm Password */}
                <Field>
                  <FieldLabel>Confirm Password</FieldLabel>

                  <div className="relative">
                    <Input
                      {...register("confirmPassword")}
                      type={
                        showConfirmPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Confirm password"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(
                          !showConfirmPassword
                        )
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  {errors.confirmPassword && (
                    <FieldDescription className="text-red-500">
                      {errors.confirmPassword.message}
                    </FieldDescription>
                  )}
                </Field>

                <Field>
                  <Button
                    type="submit"
                    disabled={pending}
                    className="w-full h-11"
                  >
                    {pending
                      ? "Creating Account..."
                      : "Create Account"}
                  </Button>
                </Field>

                <FieldSeparator>
                  Or continue with
                </FieldSeparator>

                <Button
                  variant="outline"
                  type="button"
                  className="w-full"
                >
                  Continue with Google
                </Button>

                <FieldDescription className="text-center">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-semibold text-primary hover:underline"
                  >
                    Sign In
                  </Link>
                </FieldDescription>
              </FieldGroup>
            </form>
          </div>
          {/* Right Side */}
          <div className="relative hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
              alt="Register"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-br from-black/70 via-black/40 to-primary/50" />

            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">
              <h2 className="text-4xl font-bold leading-tight">
                Start Your Rental Journey
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-200">
                Join RentNest today to discover verified rental
                properties, connect with trusted landlords, manage
                rental requests, and enjoy a secure renting experience.
              </p>

              <div className="mt-8 flex gap-8">
                <div>
                  <h3 className="text-3xl font-bold">5K+</h3>
                  <p className="text-sm text-gray-300">
                    Active Properties
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">2K+</h3>
                  <p className="text-sm text-gray-300">
                    Happy Tenants
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold">99%</h3>
                  <p className="text-sm text-gray-300">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}