import { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { jwtUtils } from "./utils/verifyToken";



const AUTH_ROUTES = ["/login", "/register"];

const PUBLIC_ROUTES = [
    "/",
    "/properties",
    "/about",
    "/contact",
];

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;

    const cookieStore = await cookies();

    let accessToken = request.cookies.get("accessToken")?.value;
    // const refreshToken = request.cookies.get("refreshToken")?.value;

    let decodedAccessToken = accessToken
        ? jwtUtils.verifyToken(
            accessToken,
            process.env.JWT_ACCESS_SECRET as string
        )
        : null;

    if (!decodedAccessToken?.success) {
        cookieStore.delete("accessToken");
        cookieStore.delete("refreshToken");

        accessToken = undefined;
    }

    if (!decodedAccessToken?.success) {
        cookieStore.delete("accessToken");
    }

    let userRole: string | null = null;

    if (decodedAccessToken?.success && decodedAccessToken.data) {
        userRole = (decodedAccessToken.data as JwtPayload).role;
    }

    if (accessToken && AUTH_ROUTES.includes(pathname)) {
        switch (userRole) {
            case "LANDLORD":
                return NextResponse.redirect(
                    new URL("/dashboard/landlord", request.url)
                );

            case "TENANT":
                return NextResponse.redirect(
                    new URL("/dashboard/tenant", request.url)
                );

            case "ADMIN":
                return NextResponse.redirect(
                    new URL("/dashboard/admin", request.url)
                );

            default:
                return NextResponse.redirect(
                    new URL("/", request.url)
                );
        }
    }

    const isPublicRoute = PUBLIC_ROUTES.some(
        (route) =>
            pathname === route ||
            pathname.startsWith(route + "/")
    );

    const isAuthRoute = AUTH_ROUTES.some(
        (route) =>
            pathname === route ||
            pathname.startsWith(route + "/")
    );

    if (!accessToken && !isPublicRoute && !isAuthRoute) {
        return NextResponse.redirect(
            new URL("/login", request.url)
        );
    }


    // Landlord
    if (
        pathname.startsWith("/dashboard/landlord") &&
        userRole !== "LANDLORD"
    ) {
        return NextResponse.redirect(
            new URL("/not-found", request.url)
        );
    }

    // Tenant
    if (
        pathname.startsWith("/dashboard/tenant") &&
        userRole !== "TENANT"
    ) {
        return NextResponse.redirect(
            new URL("/not-found", request.url)
        );
    }

    // Admin
    if (
        pathname.startsWith("/dashboard/admin") &&
        userRole !== "ADMIN"
    ) {
        return NextResponse.redirect(
            new URL("/not-found", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
    ],
};