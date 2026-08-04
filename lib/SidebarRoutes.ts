import {
    LayoutDashboard,
    ClipboardList,
    CreditCard,
    Star,
    User,
    Home,
    PlusCircle,
    Users,
    Building2,
} from "lucide-react";

export const sidebarRoutes = {
    TENANT: [
        {
            title: "Dashboard",
            href: "/dashboard/tenant",
            icon: LayoutDashboard,
        },
        {
            title: "My Requests",
            href: "/dashboard/tenant/requests",
            icon: ClipboardList,
        },
        {
            title: "Payments",
            href: "/dashboard/tenant/payments",
            icon: CreditCard,
        }, 
        {
            title: "Profile",
            href: "/dashboard/tenant/profile",
            icon: User,
        },
    ],

    LANDLORD: [
        {
            title: "Dashboard",
            href: "/dashboard/landlord",
            icon: LayoutDashboard,
        },
        {
            title: "Properties",
            href: "/dashboard/landlord/properties",
            icon: Home,
        },
        {
            title: "New Property",
            href: "/dashboard/landlord/properties/create",
            icon: PlusCircle,
        },
        {
            title: "Requests",
            href: "/dashboard/landlord/requests",
            icon: ClipboardList,
        },
        {
            title: "Profile",
            href: "/dashboard/landlord/profile",
            icon: User,
        },
    ],

    ADMIN: [
        {
            title: "Dashboard",
            href: "/dashboard/admin",
            icon: LayoutDashboard,
        },
        {
            title: "Users",
            href: "/dashboard/admin/users",
            icon: Users,
        },
        {
            title: "Properties",
            href: "/dashboard/admin/properties",
            icon: Building2,
        },
        {
            title: "Requests",
            href: "/dashboard/admin/requests",
            icon: ClipboardList,
        },
        {
            title: "Profile",
            href: "/dashboard/admin/profile",
            icon: User,
        },
    ],
};