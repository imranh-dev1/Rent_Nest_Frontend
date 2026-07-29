"use client";

import { useActionState, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { toast } from "sonner";

import { loginSchema, LoginFormData, } from "@/validations/auth.validation";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { LoginState } from "@/types/auth";
import { loginAction } from "@/app/(auth)/_actions/auth/login";


const initialState: LoginState = {
  success: false,
  message: "",
};

export default function LoginForm() {

  const [showPassword, setShowPassword] = useState(false);

  const [state, formAction, pending] = useActionState(loginAction, initialState);

  const { register, formState: { errors } } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema)
  });

  useEffect(() => {

    if (!state.message) return;

    if (state.success) {
      toast.success(state.message || "Login Successful");
    }

    if (!state.success) {
      toast.error(state.message || "Login failed");
    }

  }, [state]);

  return (
    <section className="container mx-auto ">

      <Card className="w-full overflow-hidden shadow-2xl  gap-0 p-0">

        <CardContent className="grid p-0 lg:grid-cols-2 border-0">

          {/* LEFT */}

          <div className="flex items-center">

            <form action={formAction} className="w-full space-y-6 p-8 lg:p-16">

              <div className="space-y-2">

                <h1 className="text-4xl font-bold">
                  Welcome Back..!
                </h1>

                <p className="text-muted-foreground">
                  Login to your RentNest account
                </p>

              </div>

              {/* Email */}

              <div className="space-y-2">

                <label className="text-sm font-medium">
                  Email Address
                </label>

                <div className="relative">

                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    {...register("email")}
                    type="email"
                    placeholder="john@example.com"
                    className="h-10 pl-12"
                  />

                </div>

                {(errors.email || state.errors?.email) && (
                  <p className="text-sm text-red-500">
                    {errors.email?.message ??
                      state.errors?.email?.[0]}
                  </p>
                )}

              </div>

              {/* Password */}

              <div className="space-y-2">

                <div className="flex items-center justify-between">

                  <label className="text-sm font-medium">
                    Password
                  </label>
                </div>

                <div className="relative">

                  <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    {...register("password")}
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="h-10 pl-12 pr-12"
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground transition hover:text-primary"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>

                </div>

                {(errors.password || state.errors?.password) && (
                  <p className="text-sm text-red-500">
                    {errors.password?.message ??
                      state.errors?.password?.[0]}
                  </p>
                )}

              </div>

              {/* Remember */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-2">

                  <Checkbox id="remember" />

                  <label
                    htmlFor="remember"
                    className="text-sm"
                  >
                    Remember me
                  </label>

                </div>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Submit Button */}

              <Button

                type="submit"
                disabled={pending}
                className="h-11 w-full text-base"
              >
                {pending ? "Signing In..." : "Login"}
              </Button>

              {/* Divider */}

              <div className="relative">

                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>

                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-3 text-muted-foreground">
                    Or Continue With
                  </span>
                </div>

              </div>

              {/* Google Login */}

              <Button
                type="button"
                variant="outline"
                className="h-11 w-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="mr-2 h-5 w-5"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611 20.083H42V20H24v8h11.303C33.654 32.657 29.195 36 24 36c-6.627 0-12-5.373-12-12S17.373 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.277 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                  />
                  <path
                    fill="#FF3D00"
                    d="M6.306 14.691l6.571 4.819C14.655 16.108 19.001 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.277 4 24 4c-7.732 0-14.41 4.388-17.694 10.691z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M24 44c5.177 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.14 35.091 26.715 36 24 36c-5.176 0-9.622-3.328-11.283-7.946l-6.522 5.025C9.438 39.556 16.227 44 24 44z"
                  />
                  <path
                    fill="#1976D2"
                    d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.084 5.57l.003-.002l6.19 5.238C36.971 38.493 44 33 44 24c0-1.341-.138-2.65-.389-3.917z"
                  />
                </svg>

                Continue with Google
              </Button>

              {/* Register */}

              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-primary hover:underline"
                >
                  Create Account
                </Link>
              </p>

            </form>

          </div>

          {/* Right Side */}

          <div className="relative hidden lg:block">

            <Image
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop"
              alt="Modern apartment"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-br from-black/70 to-primary/50" />

            <div className="absolute inset-0 flex flex-col justify-end p-12 text-white">

              <h2 className="text-4xl font-bold leading-tight">
                Find Your Perfect Rental Home
              </h2>

              <p className="mt-5 text-base leading-7 text-gray-200">
                Discover verified rental properties, connect with trusted
                landlords, submit rental requests, and pay securely—all in one
                place.
              </p>

            </div>

          </div>

        </CardContent>

      </Card>
    </section >
  );
}