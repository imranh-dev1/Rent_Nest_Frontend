"use client";

import { useActionState, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  Eye,
  EyeOff,
} from "lucide-react";

import { toast } from "sonner";

import { loginAction } from "@/app/(auth)/_actions/auth/login";
import {
  loginSchema,
  LoginFormData,
} from "@/validations/auth.validation";
import { LoginState } from "@/types/auth";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";

import { Input } from "@/components/ui/input";


// =====================================================
// Demo Accounts
// =====================================================

const DEMO_ACCOUNTS = {
  TENANT: {
    label: "Tenant",
    email: "imranhossen@gmail.com",
    password: "123456",
  },

  TENANT_2: {
    label: "Tenant 2",
    email: "imran1@gmail.com",
    password: "123456",
  },

  LANDLORD: {
    label: "Landlord",
    email: "imranh.dev1@gmail.com",
    password: "123456",
  },

  ADMIN: {
    label: "Admin",
    email: "admin@rentnest.com",
    password: "admin123",
  },
};


// =====================================================
// Initial State
// =====================================================

const initialState: LoginState = {
  success: false,
  message: "",
};


// =====================================================
// Login Form
// =====================================================

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] =
    useState(false);

  const [state, formAction, pending] =
    useActionState(
      loginAction,
      initialState
    );

  const {
    register,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });


  // =================================================
  // Server Response
  // =================================================

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      return;
    }

    toast.error(state.message);

    if (state.errors?.email) {
      setError("email", {
        type: "server",
        message: state.errors.email[0],
      });
    }

    if (state.errors?.password) {
      setError("password", {
        type: "server",
        message: state.errors.password[0],
      });
    }
  }, [state, setError]);


  // =================================================
  // Demo Login
  // =================================================

  const handleDemoLogin = (
    email: string,
    password: string
  ) => {
    setValue("email", email, {
      shouldValidate: true,
      shouldDirty: true,
    });

    setValue("password", password, {
      shouldValidate: true,
      shouldDirty: true,
    });

    clearErrors();

    toast.success("Demo credentials filled");
  };


  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        className
      )}
      {...props}
    >
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">

          {/* =================================================
                        Login Form
                    ================================================= */}

          <form
            action={formAction}
            className="p-6 md:p-8"
          >
            <FieldGroup>

              {/* Header */}

              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">
                  Welcome Back
                </h1>

                <p className="text-balance text-muted-foreground">
                  Login to your RentNest account
                </p>
              </div>


              {/* =================================================
                                Email
                            ================================================= */}

              <Field>
                <FieldLabel htmlFor="email">
                  Email
                </FieldLabel>

                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register("email")}
                  name="email"
                  onChange={(event) => {
                    register("email").onChange(
                      event
                    );

                    clearErrors("email");
                  }}
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.email.message}
                  </p>
                )}
              </Field>


              {/* =================================================
                                Password
                            ================================================= */}

              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">
                    Password
                  </FieldLabel>

                  <Link
                    href="/forgot-password"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>

                <div className="relative">
                  <Input
                    id="password"
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    placeholder="••••••••"
                    {...register("password")}
                    name="password"
                    className="pr-10"
                    onChange={(event) => {
                      register(
                        "password"
                      ).onChange(
                        event
                      );

                      clearErrors(
                        "password"
                      );
                    }}
                  />

                  <button
                    type="button"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    onClick={() =>
                      setShowPassword(
                        (value) =>
                          !value
                      )
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>

                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">
                    {
                      errors.password
                        .message
                    }
                  </p>
                )}
              </Field>


              {/* =================================================
                                Login Button
                            ================================================= */}

              <Field>
                <Button
                  type="submit"
                  disabled={pending}
                  className="w-full"
                >
                  {pending
                    ? "Signing In..."
                    : "Login"}
                </Button>
              </Field>


              {/* =================================================
                                Demo Login
                            ================================================= */}

              <div className="space-y-3 rounded-lg border bg-muted/30 p-4">

                <div className="text-center">
                  <p className="text-sm font-semibold">
                    Demo Login
                  </p>

                  <p className="text-xs text-muted-foreground">
                    Explore RentNest with a demo account
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2">

                  {/* Tenant */}

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleDemoLogin(
                        DEMO_ACCOUNTS
                          .TENANT
                          .email,
                        DEMO_ACCOUNTS
                          .TENANT
                          .password
                      )
                    }
                  >
                    Tenant
                  </Button>


                  {/* Tenant 2 */}

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleDemoLogin(
                        DEMO_ACCOUNTS
                          .TENANT_2
                          .email,
                        DEMO_ACCOUNTS
                          .TENANT_2
                          .password
                      )
                    }
                  >
                    Tenant 2
                  </Button>


                  {/* Landlord */}

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleDemoLogin(
                        DEMO_ACCOUNTS
                          .LANDLORD
                          .email,
                        DEMO_ACCOUNTS
                          .LANDLORD
                          .password
                      )
                    }
                  >
                    Landlord
                  </Button>


                  {/* Admin */}

                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      handleDemoLogin(
                        DEMO_ACCOUNTS
                          .ADMIN
                          .email,
                        DEMO_ACCOUNTS
                          .ADMIN
                          .password
                      )
                    }
                  >
                    Admin
                  </Button>

                </div>
              </div>


              {/* =================================================
                                Separator
                            ================================================= */}

              <FieldSeparator className="*:data-[slot=field-separator-content]:bg-card">
                Or continue with
              </FieldSeparator>


              {/* =================================================
                                Social Login
                            ================================================= */}

              <Field className="">
                {/* Google */}

                <Button
                  variant="outline"
                  type="button"
                  aria-label="Continue with Google"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                  >
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>

                  <span className="">
                    Continue with Google
                  </span>
                </Button>

              </Field>


              {/* =================================================
                                Signup
                            ================================================= */}

              <FieldDescription className="text-center">
                Don't have an account?{" "}

                <Link
                  href="/signup"
                  className="font-medium text-primary hover:underline"
                >
                  Create Account
                </Link>
              </FieldDescription>

            </FieldGroup>
          </form>


          {/* =================================================
                        Login Image
                    ================================================= */}

          <div className="relative hidden bg-muted md:block">
            <Image
              fill
              priority
              sizes="50vw"
              className="absolute inset-0 object-cover"
              src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1374&auto=format&fit=crop"
              alt="Modern rental property"
            />
          </div>

        </CardContent>
      </Card>


      {/* =================================================
                Terms
            ================================================= */}

      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our{" "}

        <Link
          href="/terms"
          className="underline"
        >
          Terms of Service
        </Link>{" "}

        and{" "}

        <Link
          href="/privacy"
          className="underline"
        >
          Privacy Policy
        </Link>
        .
      </FieldDescription>

    </div>
  );
} 