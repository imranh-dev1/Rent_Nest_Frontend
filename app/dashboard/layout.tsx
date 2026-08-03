import { getCurrentUser } from "@/services/auth.service";
import { ReactNode } from "react";
import DashboardSidebar from "./_components/DashboardSidebar";
import DashboardHeader from "./_components/DashboardHeader";


export default async function DashboardLayout({
    children,
}: {
    children: ReactNode;
}) {
    const user = await getCurrentUser();

    return (
        <div className="min-h-screen bg-muted/30">
            <div className="flex">
                <DashboardSidebar role={user.role} />

                <div className="flex flex-1 flex-col">
                    <DashboardHeader
                        user={user}
                        role={user.role}
                        title="Dashboard"
                        description={`Welcome back, ${user.name}`}
                    />

                    <main className="flex-1 p-6">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}